import { createSlice } from '@reduxjs/toolkit'
import { PENDING, REQUESTING, SUCCESS, ERROR } from '../../utilities/helpers'

const name = 'customer'

const initialState = {
    list: {
        status: PENDING,
        customers: []
    },
    create: {
        status: PENDING,
    },
    edit: {
        status: PENDING,
    },
    clear: {
        status: PENDING,
    },
    form: {
        fields: {
            first_name: null,
            last_name: null,
            active_type: null,
            region_type: null,
        },
    },
    error: {
        message: ''
    }
    ,
    region: {
        type: null
    }
}

const reducers = {

    // Create
    createCustomer: (state) => {
        state.create.status = REQUESTING
    },
    createCustomerResult: (state, { payload }) => {


        state.create.status = SUCCESS
        state.list.customers = payload
        state.form.fields = initialState.form.fields
        state.create = initialState.create

    },
    createCustomerError: (state, { payload }) => {
        state.create.status = ERROR
        state.error.message = payload
        state.form.fields = initialState.form.fields
    },

    //Edit
    editCustomer: (state) => {
        state.edit.status = REQUESTING
    },
    setForm: (state, { payload }) => {
        const customer = state.list.customers.find(a => a.id = payload)

        if (customer) {
            state.form.fields = customer
        } else {
            state.error.message = `could not find customer with id: ${payload}`
        }
    },
    editCustomerResult: (state, { payload }) => {
        console.log(payload)
        state.edit.status = SUCCESS
        state.list.customers = payload
        state.form.fields = initialState.form.fields
        state.edit = initialState.edit
    },
    editCustomerError: (state, { payload }) => {
        state.edit.status = ERROR
        state.error.message = payload
        state.form.fields = initialState.form.fields
    },
    editCustomerStatus: (state, { payload }) => {
        state.edit = payload
    },
    // Update Value
    setFormField: (state, { payload }) => {
        const current = state.form.fields
        const { field, value } = payload

        const fields = {
            ...current,
            [field]: value,
        }

        state.form.fields = fields
    },
    //Load
    loadCustomers: (state) => {
        state.create.status = REQUESTING
    },
    loadResult: (state, { payload }) => {
        state.list.customers = payload
    },
    //Reset
    setReset: (state) => {
        state.form.fields = initialState.form.fields
    },
    //Clear
    startClear: (state) => {
        state.clear.status = REQUESTING
    },
    setClear: (state) => {
        state.list.customers = initialState.list.customers
    },
    setClearError: (state, { payload }) => {
        state.clear.status = ERROR
        state.error.message = payload
    },
    //Select Region
    selectRegion: (state, { payload }) => {
        state.customer.region.type = payload
    },
}

const slice = createSlice({
    name,
    initialState,
    reducers,
})

export const {
    createCustomer,
    createCustomerResult,
    createCustomerError,
    editCustomer,
    setForm,
    editCustomerResult,
    editCustomerError,
    editCustomerStatus,

    setFormField,
    loadCustomers,
    loadResult,
    setReset,
    startClear,
    setClear,
    setClearError,
    selectRegion
} = slice.actions

export default slice.reducer
