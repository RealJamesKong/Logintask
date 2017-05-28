import React from "react"
import { connect } from "react-redux"

@connect((store) => {
  return {
    login: store.login
  }
})
export default class Layout extends React.Component {
  constructor(){
    super();
    this.state = {id:"", pw:""};
    this.changeID = this.changeID.bind(this);
    this.changePW = this.changePW.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  changeID(event){
    this.setState({id:event.target.value});
  }
  changePW(event){
    this.setState({pw:event.target.value});
  }
  handleSubmit(event){
    const {dispatch} = this.props;
    dispatch({type:"LOGIN_SUBMITTED", payload: {id: this.state.id, pw: this.state.pw}});
  }
  render() {
    const {login} = this.props;
      if (login.success ==false ) {
        return (<div>
          Please enter your Username and Password
          <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              ID:
              <input type="text" value={this.state.value} onChange={this.changeID}/>
            </label>
          </div>
          <div>
            <label>
              Password:
              <input type="password" value={this.state.value} onChange={this.changePW}/>
            </label>
          </div>
          <input type="submit"/>
          </form>
         </div>);
        }
        if (login.success == true){
          localStorage.setItem("Login", JSON.stringify("True"))
          return <div>You have successfully logged in!</div>
        }
    }
}
