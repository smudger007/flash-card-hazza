import React from 'react';
import {connect} from 'react-redux';
import CardListItem from './CardListItem';
import {getVisibleCards} from '../selectors/cards';

const CardsList = (props) => (
    <div className="content-container">
        <div className="list-header">
            <div className="show-for-mobile">Subject</div>
            <div className="show-for-desktop">Subject</div>
            <div className="show-for-desktop">Title</div>
        </div> 
        <div className="list-body">           
            {
                props.cards.length === 0 ? (
                    <div className="list-item list-item--message">
                        <span>No Cards</span>
                    </div>
                ) : (
                    
                    props.cards.map((card) => (                
                        <CardListItem key={card.id} {...card} />
                    ))
                )

                
            }
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        cards: getVisibleCards(state.cards, state.filters)
    };
};

export default connect(mapStateToProps)(CardsList);
