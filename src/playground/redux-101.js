import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
})

const reset = () => ({
    type: 'RESET'
});

const set = ({ setValue = 0 } = {}) => ({
    type: 'SET',
    setValue
});


// 1. Reducer are pure functions
// 2. Never change state or action

const countReducer = (state = { count: 0 }, action) => {
    switch(action.type){
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
             }
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }
        case 'RESET':
            return {
                count: 0
            }
        case 'SET':{
            return{
                count: action.setValue
            }
        }
        default:
            return state 
    }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log( store.getState())
})

// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy:5
// })
store.dispatch(incrementCount({ incrementBy: 5 }));
// store.dispatch({
//     type: 'INCREMENT',
// })
store.dispatch(incrementCount());

// store.dispatch({
//     type: 'DECREMENT',
//     decrementBy:10
// })
store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 10 }));

// store.dispatch({
//     type: 'RESET'
// })
store.dispatch(reset());

// store.dispatch({
//     type: 'SET',
//     setValue: 100
// })
store.dispatch(set({ setValue: 50 }));
store.dispatch(set());
// unsubscribe()
