import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ id, createdAt, description, amount }) => (
    <div>
        <Link to = {`/edit/${id}`} >{description}</Link>
        <p>{amount} - {createdAt}</p>
    </div>
);

export default ExpenseListItem;