import React from 'react';
import { connect } from 'react-redux';
import CardForm from './CardForm';
import { startEditCard, startRemoveCard } from '../actions/cards';

export class EditCardPage extends React.Component {

  onSubmit = (card) => {    
    this.props.startEditCard(this.props.card.id, card);
    this.props.history.push('/');
  };
  onRemove = () => {
    this.props.startRemoveCard({ id: this.props.card.id });
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Card</h1>
          </div>

          <div className="content-container">
            
            <CardForm
              card={this.props.card}
              onSubmit={this.onSubmit}
            /> 

            <div className="form__center">
              <button className="button button--secondary" onClick={this.onRemove}>Remove</button>
            </div>
                       

          </div>

        </div>
        
        
      </div>
    );
  }
};

const mapStateToProps = (state, props) => ({
  card: state.cards.find((card) => card.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditCard: (id, card) => dispatch(startEditCard(id, card)),
  startRemoveCard: (data) => dispatch(startRemoveCard(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditCardPage);
