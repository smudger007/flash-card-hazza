
export const setSubjectFilter = ( subject = '' ) => ({
    type: 'SET_SUBJECT_FILTER',
    subject
});

export const setTopicFilter = ( topic = '' ) => ({
    type: 'SET_TOPIC_FILTER',
    topic
});

export const setPaperFilter = ( paper = '' ) => ({
    type: 'SET_PAPER_FILTER',
    paper
});

export const setTitleFilter = ( title = '' ) => ({
    type: 'SET_TITLE_FILTER',
    title
});

export const setDetailsFilter = ( details = '' ) => ({
    type: 'SET_DETAILS_FILTER',
    details
});
