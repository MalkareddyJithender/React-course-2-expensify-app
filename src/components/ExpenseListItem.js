import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';
import currencyFormatter from 'currency-formatter';



const ExpenseListItem = ({id,description,amount,createdAt}) => (
    <div>
        <Link to={`/edit/${id}`}>
        <h3>{description}</h3>
        </Link>
        <p>
            {currencyFormatter.format(amount/100,{code:'INR'})}            
              -     
            {moment(createdAt).format('MMMM Do, YYYY')}
             </p>
    </div>
);

export default ExpenseListItem;