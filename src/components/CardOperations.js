import React from 'react';
import { Link } from 'react-router-dom';
import AddCardPage from './AddCardPage';

// This will contain two buttons: 
// 1) Add a Subject
// 2) Add a Flash Card

const CardOperations = () => (
    
        <div className="content-container">         
            <div className="operations-group">
                
                <Link className="button" to="/create">Add Card</Link>
                
                <Link className="button" to="/revise">Revise</Link>
                            
            </div>
        </div>                     
    
);

export default CardOperations;
