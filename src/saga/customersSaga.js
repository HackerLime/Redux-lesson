import { put, takeEvery, call } from 'redux-saga/effects'
import { ADD_ASYNC_CUSTOMERS, addManyCustomersAction } from '../store/customersReducer'

const getUsersFromApi = () => fetch('https://jsonplaceholder.typicode.com/users?_limit=10')

function* customersWorker() {
	const data = yield call(getUsersFromApi)
	const json = yield call(() => new Promise(res => res(data.json())))
	yield put(addManyCustomersAction(json))
}

export function* customersWatcher() {
	yield takeEvery(ADD_ASYNC_CUSTOMERS, customersWorker)
}