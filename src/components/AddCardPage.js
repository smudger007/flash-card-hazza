import React from 'react';
import {connect} from 'react-redux';
import CardForm from './CardForm';
import { startAddCard } from '../actions/cards';


export class AddCardPage extends React.Component {

    onSubmit = (card) => {        
        this.props.startAddCard(card);
        this.props.history.push('/');
    };

    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Add Card</h1>
                    </div>
                </div>

                <div className="content-container">
                    <CardForm 
                    onSubmit = {this.onSubmit}
                    errors = {this.props.errors.error}              
                    />
                </div>     
            </div> 

        );
    }
}

const mapStateToProps = (state) => {
    return {
        errors: state.error
    };
};


const mapDispatchToProps = (dispatch) => ({
    startAddCard: (card) => dispatch(startAddCard(card))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddCardPage);