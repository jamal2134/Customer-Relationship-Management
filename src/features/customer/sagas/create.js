import { call, all, put, select, takeLatest, delay } from 'redux-saga/effects'
import * as actions from '../reducers'
import { set } from '../../../utilities/async_storage'


export function* watchCreateCustomer() {
    yield takeLatest(actions.createCustomer.toString(), takeCreateCustomer)
}

export function* takeCreateCustomer() {
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));


    console.log('Starting fetch request to API')
    try {
        const fields = yield select(state => state.customer.form.fields)
        const customers = yield select(state => state.customer.list.customers)
        console.log("customers:  "+customers)



        const customer = {
            id: customers.length + 1,
            ...fields,
        }

        // pretend call to API
        yield call(sleep, 500);
        

        const result = [customer, ...customers]

        console.log(result)



        yield call(set, "Customers_KEY", result);

        yield put(actions.createCustomerResult(result))
    } catch (error) {
        console.log(error)
        yield put(actions.createCustomerError(error.toString()))
    }
}



