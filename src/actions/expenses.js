import uuid from 'uuid';

// ADD_EXPENSE
export const addExpense = ({ 
        description = '',
        note = '', 
        amount = 0, 
        createdAt = 0 
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

// ADD_FROM_DATABASE
export const addFromDatabase = ({
    id = '',
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
} = {}
) => ({
    type: 'ADD_FROM_DATABASE',
    expense: {
        id,
        description,
        note,
        amount,
        createdAt
    }
});

// RemoveExpense
export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id: id
});

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});