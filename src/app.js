import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

// store.dispatch(addExpense({ description: 'Water Bill', amount: 800, createdAt: 4500 }));
// store.dispatch(addExpense({ description: 'Gas Bill', amount: 400, createdAt: 1000 }));
// store.dispatch(addExpense({ description: 'Rent', amount: 1095000 }))
// store.dispatch(setTextFilter('water'));
// store.dispatch(sortByAmount());

// setTimeout(() => {
//     store.dispatch(setTextFilter('bill'));
// } , 3000)

// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// console.log(visibleExpenses);

const jsx = (
    <Provider store = {store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
