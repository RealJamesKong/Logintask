import axios from "axios";

function tryLogin(id, pw){
    return axios.post("http://api.edu.chat/v1/api/login/", {username: id, password: pw, platform: 'web'})
}

export function doLogin(id, pw) {
    return function (dispatch) {
        tryLogin(id, pw).then((response) => {
            alert('nay')
                dispatch({type: "LOGIN_SUCCESSFUL", payload: id})
            })
            .catch((err) => {
                alert('yay')
                dispatch({type: "LOGIN_FAILED", payload: err})
            })
    }
}
