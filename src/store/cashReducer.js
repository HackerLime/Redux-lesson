const defaultState = {
	cash: 0,
}
const ADD_CASH = 'ADD_CASH'
export const ADD_ASYNC_CASH = 'ADD_ASYNC_CASH'
const GET_CASH = 'GET_CASH'
export const GET_ASYNC_CASH = 'GET_ASYNC_CASH'
export const cashReducer = (state = defaultState, action) => {
	switch (action.type) {
		case ADD_CASH:
			return { ...state, cash: state.cash + 5 }
		case GET_CASH:
			return { ...state, cash: state.cash - 5 }
		default:
			return state
	}
}

export const addCashAction = () => ({ type: ADD_CASH })
export const getCashAction = () => ({ type: GET_CASH })
export const addAsyncCashAction = () => ({ type: ADD_ASYNC_CASH })
export const getAsyncCashAction = () => ({ type: GET_ASYNC_CASH })