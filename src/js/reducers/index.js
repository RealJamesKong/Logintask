export default function reducer(state={success: null, username: ""}, action) {
  switch (action.type) {
    case "LOGIN_SUCCESSFUL": {
      return {...state,success:true, username:action.payload}
    }
    case "LOGIN_FAILED": {
      return {...state,success:false}
    }
  }
  return state
}
