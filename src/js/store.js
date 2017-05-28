import { applyMiddleware, createStore } from "redux"
import createSagaMiddleware from 'redux-saga'

import promise from "redux-promise-middleware"
import mySaga from './sagas'

import reducer from "./reducers"

const sagaMiddleware = createSagaMiddleware()

const middleware = applyMiddleware( sagaMiddleware,promise())

export default createStore(reducer, middleware)

sagaMiddleware.run(mySaga)
