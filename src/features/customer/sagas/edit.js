import { call, all, put, select, takeLatest, delay } from 'redux-saga/effects'
import * as actions from '../reducers'
import { set } from '../../../utilities/async_storage'

export function* watchEditCustomer() {
    yield takeLatest(actions.editCustomer.toString(), takeEditCustomer)
}

export function* takeEditCustomer(action) {
    console.log('Starting fetch request to API -- EDIT')
    const CustomerID = action.payload
    
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    try {
        const fields = yield select(state => state.customer.form.fields)
        const customers = yield select(state => state.customer.list.customers)

        const result = customers.map(c => {
            // if customer is not the one being updated, return it unchanged
            if (c.id !== CustomerID) return c

            // otherwise, customer is the one being updated
            // return the new fields instead of the old ones
            return fields
        })
        console.log("Saga ID::: ",result)

        // pretend call to API
        yield call(sleep, 500);

        yield call(set, "Customers_KEY", result);

        yield put(actions.editCustomerResult(result))
    } catch (error) {
        console.Console.log(error)
        yield put(actions.editCustomerError(error.toString()))
    }
}

