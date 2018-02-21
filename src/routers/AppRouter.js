import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../components/Header';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpense';
import EditExpensePage from '../components/EditExpense';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import { addFromDatabase } from '../actions/expenses';

class AppRouter extends React.Component {

    componentDidMount() {
        // fetch('http://192.168.1.14:8080/api/v1/expenses', {
        //         method: 'GET',
        // }).then((data) => data.json())
        // .then((data) => data.forEach((expense) => this.props.addExpense(expense)));
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <Switch>
                        <Route path = "/index.html" component = {ExpenseDashboardPage} exact = {true} />
                        <Route path = "/create" component = {AddExpensePage} exact = {true} />
                        <Route path = "/edit/:id" component = {EditExpensePage} exact = {true} />
                        <Route path = "/help" component = {HelpPage} exact = {true} />
                        <Route component = {NotFoundPage} />
                    </Switch>
                </div>
                
            </BrowserRouter>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    addExpense: (expense) => dispatch(addFromDatabase(expense))
});

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppRouter);