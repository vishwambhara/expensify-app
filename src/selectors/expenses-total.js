
const getTotalExpense = (expenses) => {
    return expenses
        .map((expense) => expense.amount)
        .reduce((totalAmount, amount) => { 
            return totalAmount + amount 
        }, 0);
}

export default getTotalExpense;