export default function reducer(state={login: {success: null}}, action) {
  switch (action.type) {
    case "LOGIN_SUCCESS": {
      return {...state,login:{...state.login, success:true}}
    }
    case "LOGIN_FAIL": {
      return {...state, login:{...state.login, success:false}}
    }
  }
  return state
}
