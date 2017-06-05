import React from "react";

const usernameBox = ({props}) => {
    return (
        <div>
            Please enter your Username and Password
            <form onSubmit={()=>props.onClick}>
                <div>
                    <label>
                        ID:
                        <input type="text" value={props.id} onChange={props.changeID}/>
                    </label>
                </div>
                <div>
                    <label>
                        Password:
                        <input type="password" value={props.pw} onChange={props.changePW}/>
                    </label>
                </div>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default usernameBox
