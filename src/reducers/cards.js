const cardsReducerDefaultState = [];

export default (state = cardsReducerDefaultState, action) => {
    
    switch(action.type) {        
        case 'ADD_CARD':             
            return [
                ...state,
                action.card
            ]

        case 'REMOVE_CARD':             
            return state.filter(({id}) => action.id !== id);

        case 'EDIT_CARD':
            return state.map((card) => {
                if (card.id === action.id) {
                    return {
                        ...card, 
                        ...action.updates};
                } else {
                    return card;
                }
            });

        case 'SET_CARDS':
            return action.cards;
            
        default: 
            return state;
    }
};

