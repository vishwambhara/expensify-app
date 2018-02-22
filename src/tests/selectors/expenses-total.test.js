import getTotalExpense from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
    const emptyExpenses = [];
    const total = getTotalExpense(emptyExpenses);
    expect(total).toBe(0);
});

test('should correctly add up a single expense', () => {
    const oneElementExpenses = [ expenses[0] ];
    const total = getTotalExpense(oneElementExpenses);
    expect(total).toBe(195);
});

test('should correctly add up multiple expenses', () => {
    const total = getTotalExpense(expenses);
    expect(total).toBe(24195);
});
