import React from 'react';
import {connect} from 'react-redux';
import ReactCardFlip from 'react-card-flip';
import {getVisibleCards} from '../selectors/cards';

class RevisePage extends React.Component {

    constructor(props) {
        super(props);        
        this.state = {
            isFlipped: false,
            index: 0, 
          };         
    }

    handleClick = (e) => {        
        this.setState(() => ({ isFlipped: !this.state.isFlipped }));
    }

    onNext= (e) => {               
        this.state.index < this.props.cards.length - 1 ? this.setState(() => ({ index: this.state.index + 1 })) : this.setState(() => ({ index: 0 }));
        this.setState(() => ({ isFlipped: false }));
    }
   
    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Revise</h1>
                    </div>
                </div>

                <div className="content-container">

                    <div className="form__center">
                        <button className="button button--secondary" onClick={this.onNext}>NEXT</button>
                        <p>(Click card to flip)</p>
                    </div>


                    <div className="card-layout">

                        <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
                            <div key="front" className="card-layout__flashcard card-layout__front" onClick={this.handleClick}>
                                <p>{this.props.cards[this.state.index].title}</p>                               
                            </div>

                            <div key="back" className="card-layout__flashcard" onClick={this.handleClick}>
                                <p>{this.props.cards[this.state.index].details} </p>                                                                                                                                                                  
                            </div>
                        </ReactCardFlip>
                    
                    </div>

                </div>
                
            </div> 

        );
    }
}

const mapStateToProps = (state) => {
    return {
        cards: getVisibleCards(state.cards, state.filters)
    };
};


export default connect(mapStateToProps)(RevisePage);