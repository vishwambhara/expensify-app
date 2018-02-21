import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: "@@INIT" });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should  set text filter to given value', () => {
    const text = 'test';
    const action = {
        type: 'SET_TEXT_FILTER',
        text
    }
    const state = filtersReducer(undefined, action);
    expect(state.text).toBe(text);
});

test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const state = filtersReducer(currentState, { type: 'SORT_BY_DATE' });
    expect(state.sortBy).toBe('date');
});

test('should set startDate to given value', () => {
    const startDate = moment(0).add(2, 'days');
    const action = { 
        type: 'SET_START_DATE',
        startDate 
    }
    const state = filtersReducer(
        undefined,
        action
    );
    expect(state.startDate).toEqual(moment(0).add(2, 'days'));
});

test('should set endDate to given value', () => {
    const endDate = moment(0).add(2, 'days');
    const action = { 
        type: 'SET_END_DATE', 
        endDate
    }
    const state = filtersReducer(
        undefined,
        action
    );
    expect(state.endDate).toEqual(moment(0).add(2, 'days'));
});