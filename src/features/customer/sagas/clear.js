import { call, all, put, select, takeLatest, delay } from 'redux-saga/effects'
import * as actions from '../reducers'
import { clear } from '../../../utilities/async_storage'


export function* watchClearCustomer() {
    yield takeLatest(actions.startClear.toString(), takeClearCustomer)
}

export function* takeClearCustomer() {
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));


    console.log('Starting fetch request to API')
    try {
        

        // pretend call to API
        yield call(sleep, 500);
        

       

        console.log("Clear")

        yield call(clear);

        yield put(actions.setClear())
    } catch (error) {
        console.log(error)
        yield put(actions.setClearError(error.toString()))
    }
}



