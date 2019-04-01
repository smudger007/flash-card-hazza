const filterReducerDefaultState = {
    subject: '',
    topic: '', 
    paper: '',
    title: '', 
    details: ''
}

export default (state = filterReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_SUBJECT_FILTER':
            return { ...state, subject: action.subject }
        case 'SET_TOPIC_FILTER':
            return { ...state, topic: action.topic }
        case 'SET_PAPER_FILTER':
            return { ...state, paper: action.paper }
        case 'SET_TITLE_FILTER':
            return { ...state, title: action.title }
        case 'SET_DETAILS_FILTER':
            return { ...state, details: action.details }
        default: 
            return state;
    }
};
