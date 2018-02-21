import fetch from 'isomorphic-fetch';

// Expense Reducer
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE': 
            // fetch('http://192.168.1.14:8080/api/v1/expenses', {
            //     method: 'POST',
            //     headers: {
            //         Accept: 'application/json',
            //         'Content-Type': 'application/json',
            //         'Access-Control-Allow-Origin': '*' 
            //     },
            //     body: JSON.stringify(action.expense),
            // });
            return [
                ...state,
                action.expense    
            ]
        case 'ADD_FROM_DATABASE':
            return [
                ...state,
                action.expense
            ]
        case 'REMOVE_EXPENSE':
            // fetch(`http://192.168.1.14:8080/api/v1/expenses/${action.id}`, {
            //     method: 'DELETE',
            //     headers: {
            //         Accept: 'application/json',
            //         'Content-Type': 'application/json',
            //         'Access-Control-Allow-Origin': '*'
            //     },
            // });
            return state.filter(({ id }) => action.id !== id);
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if(expense.id === action.id) {
                //     fetch(`http://192.168.1.14:8080/api/v1/expenses/${action.id}`, {
                //         method: 'PUT',
                //         headers: {
                //             Accept: 'application/json',
                //             'Content-Type': 'application/json',
                //             'Access-Control-Allow-Origin': '*'
                //         },
                //         body: JSON.stringify({id: action.id, ...action.updates})
                //    });
                    return {
                        ...expense,
                        ...action.updates
                    }
                }
                else {
                    return expense;
                }
            });
        default: 
            return state;
    }
};

export default expensesReducer;