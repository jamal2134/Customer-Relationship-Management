import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from './reducers'

export const useUpdateFields = (customerID = null) => {
  const dispatch = useDispatch()
  const fields = useSelector(state => state.customer.form.fields)

  console.log("customer ID ::: ", customerID)

  useEffect(() => {
    if (customerID) {
      dispatch(actions.setForm(customerID))
    }
  }, [customerID])

  return {
    fields,
    setFormField: (field, value) => {
      console.log(`Updating field ${field} to ${value}`)
      return dispatch(actions.setFormField({ field, value }))
    },
  }
}

export const useNewCustomer = () => {
  const dispatch = useDispatch()

  return {
    onSubmit: () => {
      console.log('Dispatching CREATE_Customer action')
      dispatch(actions.createCustomer())
    }
  }
}

export const useListCustomers = (region = null) => {
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(actions.loadCustomers())
  }, [dispatch])

  const list = useSelector(state =>  state.customer.list.customers)
  console.log(list)
  if (!Array.isArray(list)) return []; // return empty array if null/undefined
  if (region === null) return list;
  //return list.filter((c) => c.region_type === region);

  return useSelector(state =>  state.customer.list.customers.filter((c) => c.region_type === region))
}




export const useEditCustomer = (customerID) => {
  const dispatch = useDispatch()
  return {
    onSubmit: () => {
      console.log('Dispatching EDIT_customerID action')
      dispatch(actions.editCustomer(customerID))
    }
  }
}

export const useResetForm = () => {
  const dispatch = useDispatch()

  return dispatch(actions.setReset())


}

export const useClearStorage = () => {
  const dispatch = useDispatch()


  return dispatch(actions.startClear())


}


