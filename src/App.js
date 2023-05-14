import React from 'react';
import './styles.css'
import { useDispatch, useSelector } from 'react-redux';
import { addAsyncCashAction, getAsyncCashAction } from './store/cashReducer';
import { addAsyncCustomersAction, addCustomerAction, removeCustomerAction } from './store/customersReducer';
import { fetchUsers } from './asyncFetch';

const App = () => {
	const cash = useSelector(store => store.cash.cash)
	const customers = useSelector(store => store.customers.customers)
	const dispatch = useDispatch()
	const addCash = () => {
		dispatch(addAsyncCashAction())
	}
	const getCash = () => {
		dispatch(getAsyncCashAction())
	}

	const addCustomer = (custom) => {
		const customer = {
			id: Date.now(),
			name: custom
		}
		dispatch(addCustomerAction(customer))
	}
	const removeCustomer = (custom) => {
		dispatch(removeCustomerAction(custom))
	}


	return (
		<div className="App">
			<div className="container">
				<h1>{cash}</h1>
				<button onClick={() => addCash()}>Add cash</button>
				<button onClick={() => getCash()}>Get cash</button>
				<button onClick={() => addCustomer(prompt())} >Customer++</button>
				<button onClick={() => dispatch(fetchUsers())}>Fetch users</button>
				<button onClick={() => dispatch(addAsyncCustomersAction())}>Async Fetch</button>
				<div className="customers">
					{customers.length
						? customers.map(c =>
							<h3
								onClick={() => removeCustomer(c)}
								key={c.id} >{c.name}</h3>)
						: <h1>Customers not Found</h1>
					}
				</div>
			</div>
		</div >
	);
}

export default App;
