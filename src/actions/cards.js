import uuid from 'uuid';
import database from '../firebase/firebase';
import { setError, removeError } from '../actions/error';


export const addCard = (card) => ({
    type: 'ADD_CARD',
    card
});

export const startAddCard = (cardData = {} ) => {

    return (dispatch, getState) => {

        const {
            subject = '',
            topic = '',
            paper = '',
            title = '',
            details = ''
        } = cardData;
        
        const uid = getState().auth.uid;
        const card = { subject, topic, paper, title, details};
        
        return database.collection("users").doc(`${uid}`).collection("cards").add(card)
            .then((ref) => {
                
                dispatch(addCard({
                    id: ref.id,
                    ...card                    
                }));
            })
            .then(() => {
                dispatch(removeError({}));
            })
            .catch((e) => {
                console.log("Caught a DB Error - this should dispatch the Error ", e);
                dispatch(setError({
                    error: "DB ERROR - Adding FlashCard"                                    
                }));
            });
    }
};


// SET_CARDS
export const setCards = (cards) => ({
    type: 'SET_CARDS',
    cards
});
  
export const startSetCards = () => {
    return (dispatch, getState) => {
      const uid = getState().auth.uid;
    
      return database.collection("users").doc(`${uid}`).collection("cards")
        .get()
        .then((snapshot) => {
            const cards = [];

            snapshot.forEach((childSnapshot) => {                
                cards.push({
                    id: childSnapshot.id,
                    ...childSnapshot.data()
                });
            });
  
            dispatch(setCards(cards));
        })
        .then(() => {
            dispatch(removeError({}));
        })
        .catch((e) => {
            console.log("DB Error - When obtaining initial list of Flash Cards!!", e);
            dispatch(setError({
                error: "DB ERROR - Getting FlashCards"                                    
            }));
        });
    };
};

// REMOVE_EXPENSE
export const removeCard = ({ id } = {}) => ({
    type: 'REMOVE_CARD',
    id
});
  
export const startRemoveCard = ({ id } = {}) => {
    return (dispatch,getState) => {
        const uid = getState().auth.uid;

        return database.collection("users").doc(`${uid}`).collection("cards").doc(`${id}`).delete().then(() => {           
            dispatch(removeCard({ id }));
        });
    };
};


// Edit Expense
// -------------
  
export const editCard = (id, updates) => ({
    type: 'EDIT_CARD', 
    id,
    updates
});

export const startEditCard = (id, updates) => {
    return (dispatch, getState) => {
        
        const {
            subject = '',
            topic = '',
            paper = '',
            title = '',
            details = ''
        } = updates;
                
        const card = { subject, topic, paper, title, details};        
        const uid = getState().auth.uid;
        
        return database.collection("users").doc(`${uid}`).collection("cards").doc(`${id}`).set(card).then(() => {
          dispatch(editCard(id, card));
        });
    };
};
