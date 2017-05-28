import { call,put, takeEvery, takeLatest } from 'redux-saga/effects'
import axios from "axios";

export default function* checkLogin(action){
  try {
    const user = yield call(axios.post, "http://api.edu.chat/v1/api/login/",
        action.payload.id, action.payload.pw, "web");
      yield put({type: "LOGIN_SUCCESS"});
    } catch(e){
      yield put({type: "LOGIN_FAIL"});
    }
}

function* mySaga(){
  yield takeEvery("LOGIN_SUBMITTED", checkLogin);
}
