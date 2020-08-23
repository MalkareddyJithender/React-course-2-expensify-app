import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" exact={true} activeClassName="is-active">DashboardExpensepage</NavLink>
        <NavLink to="/create" activeClassName="is-active">AddExpensePage</NavLink>
       
    </header>
);

export default Header;