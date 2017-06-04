export default function reducer(state={success: null, username: ""}, action) {
  switch (action.type) {
    case "LOGIN_SUCCESS": {
      return {...state,success:true, username:action.payload}
    }
    case "LOGIN_FAIL": {
      return {...state,success:false}
    }
  }
  return state
}
