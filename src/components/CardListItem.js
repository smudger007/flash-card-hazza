import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import {removeCard} from '../actions/expenses';

const CardListItem = ({dispatch, id, subject, topic, paper, title, details}) => (
    <Link className="list-item" to={`/edit/${id}`}>
        <div>
            <h3 className="list-item__title">{subject}</h3>
            <span className="list-item__subtitle">{topic}</span>
        </div>
        <h3 className="list-item__data">{title}</h3>      
    </Link>
);

export default connect()(CardListItem);