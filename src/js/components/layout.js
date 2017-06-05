import React from "react"
import { connect } from "react-redux"

import { doLogin } from "../actions/loginActions"
//import usernameBox from "./usernameBox"

@connect((store) => {
    return {
        success: store.success,
        username : store.username,
    };
})


export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = {id: "", pw: ""};
        this.changeID = this.changeID.bind(this);
        this.changePW = this.changePW.bind(this);
    }

    changeID(event){
        this.setState({id:event.target.value});
    }

    changePW(event){
        this.setState({pw:event.target.value});
    }

    doLogin(id, pw) {
        this.props.dispatch(doLogin(id, pw))
    }
/*For dumb component
    renderUserLogin(){
        return(
        <usernameBox  id={this.state.id} pw={this.state.pw}
                      onClick={()=>this.doLogin(this.state.id, this.state.pw)}
                      changeID={this.changeID} changePW={this.changePW}/>
        )
    }
*/

    render() {
        const { success, username } = this.props;
        if (success!==true) {
            return(
            <div>
                Please enter your Username and Password
                <form onSubmit={()=>this.doLogin(this.state.id,this.state.pw)}>
                    <div>
                        <label>
                            ID:
                            <input type="text" value={this.state.value} onChange={this.changeID}/>
                        </label>
                    </div>
                    <div>
                        <label>
                            Password:
                            <input type="password" value={this.state.pw} onChange={this.changePW}/>
                        </label>
                    </div>
                    <input type="submit"/>
                </form>
            </div>)
        }
        //if login is successful
        localStorage.setItem("Username", JSON.stringify(username))
        return (<div>
          <h1>Welcome {username}</h1>
        </div>)
    }
}
