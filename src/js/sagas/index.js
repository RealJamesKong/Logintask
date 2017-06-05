import { call,put, takeEvery, takeLatest } from 'redux-saga/effects'
import axios from "axios";


function sendRequest(id, pw) {
    return axios.post("http://api.edu.chat/v1/api/login/",
        {username: id, password: pw, platform: "web"});
}


function* checkLogin(action) {
    if (action != undefined) {
        try {
            const user = yield call(sendRequest, action.payload.id, action.payload.pw);
            yield put({type: "LOGIN_SUCCESSFUL", payload: action.payload.id});
        } catch (e) {
            yield put({type: "LOGIN_FAILED"});
        }
    }
}


function* mySaga(){
    yield takeEvery("LOGIN_SUBMITTED", checkLogin);
}

export default mySaga;
