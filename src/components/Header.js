import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to = "/index.html" activeClassName = "is-active" exact = {true} >Dashboard</NavLink>
        <NavLink to = "/create" activeClassName = "is-active" >Create Expense</NavLink>
    </header>
);

export default Header;