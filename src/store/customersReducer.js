const defaultState = {
	customers: []
}
const ADD_CUSTOMER = 'ADD_CUSTOMER'
const REMOVE_CUSTOMER = 'REMOVE_CUSTOMER'
export const ADD_MANY_CUSTOMERS = 'ADD_MANY_CUSTOMERS'
export const ADD_ASYNC_CUSTOMERS = 'ADD_ASYNC_CUSTOMERS'

export const customersReducer = (state = defaultState, action) => {
	switch (action.type) {
		case ADD_CUSTOMER:
			return { ...state, customers: [...state.customers, action.payload] }
		case ADD_MANY_CUSTOMERS:
			return { ...state, customers: [...state.customers, ...action.payload] }
		case REMOVE_CUSTOMER:
			return { ...state, customers: state.customers.filter(cust => cust.id !== action.payload.id) }
		default:
			return state
	}
}

export const addCustomerAction = (payload) => ({ type: ADD_CUSTOMER, payload })
export const removeCustomerAction = (payload) => ({ type: REMOVE_CUSTOMER, payload })
export const addManyCustomersAction = (payload) => ({ type: ADD_MANY_CUSTOMERS, payload })
export const addAsyncCustomersAction = (paylaod) => ({ type: ADD_ASYNC_CUSTOMERS, paylaod })