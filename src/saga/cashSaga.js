import { put, takeEvery } from 'redux-saga/effects'
import { ADD_ASYNC_CASH, GET_ASYNC_CASH, addCashAction, getCashAction } from '../store/cashReducer'

const delay = (ms) => new Promise(res => setTimeout(res, ms))
function* addCashWorker() {
	yield delay(1000)
	yield put(addCashAction())
}
function* getCashWorker() {
	yield delay(1000)
	yield put(getCashAction())
}
export function* cashWatcher() {
	yield takeEvery(ADD_ASYNC_CASH, addCashWorker)
	yield takeEvery(GET_ASYNC_CASH, getCashWorker)
}