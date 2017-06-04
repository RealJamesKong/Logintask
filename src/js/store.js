import { applyMiddleware, createStore } from "redux"
//import createSagaMiddleware from 'redux-saga'

import logger from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"
//import mySaga from './sagas'

import reducer from "./reducers"

//const sagaMiddleware = createSagaMiddleware()

const middleware = applyMiddleware( promise(), thunk, logger())

export default createStore(reducer, middleware)

//sagaMiddleware.run(mySaga)
