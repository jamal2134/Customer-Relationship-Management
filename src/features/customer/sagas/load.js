import { call,all, put, select, delay, takeLatest } from 'redux-saga/effects'
import * as actions from '../reducers'
import { get } from '../../../utilities/async_storage'

export function* watchLoadCustomers() {
    yield takeLatest(actions.loadCustomers.toString(), takeloadCustomers)
}

export function* takeloadCustomers() {
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    try {
        const customers = yield get('Customers_KEY')

        yield call(sleep, 1500);

        yield put(actions.loadResult(customers))
    } catch (error) {
        yield put(actions.loadResult([]))
    }
}

