

export const getVisibleCards = (cards, {subject, topic, paper, title, details}) => {
    
    return cards.filter((card) => {               
        const subjectMatch = !card.subject || card.subject.match(new RegExp(subject, "i"));
        const topicMatch = !card.topic || card.topic.match(new RegExp(topic, "i"));
        const paperMatch = !card.paper || card.paper.match(new RegExp(paper, "i"));
        const titleMatch = !card.title || card.title.match(new RegExp(title, "i"));
        const detailsMatch = !card.details || card.details.match(new RegExp(details, "i"));
        return subjectMatch && topicMatch && paperMatch && titleMatch && detailsMatch;        
    });
};


export const getSubjectWithTopics = (cards) => {
        
    return [...new Set(cards.map((card) => { 
            return {
                subject: capitalizeFirstLetter(card.subject.toLowerCase()),
                topic: capitalizeFirstLetter(card.topic.toLowerCase())
            }
        })
    )];
};


const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
