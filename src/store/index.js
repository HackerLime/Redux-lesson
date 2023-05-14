import { legacy_createStore, applyMiddleware } from 'redux'
import { combineReducers } from 'redux'
import { cashReducer } from './cashReducer'
import { customersReducer } from './customersReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import { rootWatcher } from '../saga'

const sagaMiddleware = createSagaMiddleware()
const rootReducer = combineReducers({
	cash: cashReducer,
	customers: customersReducer
})
export const store = legacy_createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware, sagaMiddleware)))
sagaMiddleware.run(rootWatcher)