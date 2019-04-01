import React from 'react';
import {connect} from 'react-redux';
import {getSubjectWithTopics} from '../selectors/cards';


class CardForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            subject: props.card ? props.card.subject : '',
            topic: props.card ? props.card.topic : '',
            paper: props.card ? props.card.paper : '', 
            title: props.card ? props.card.title : '', 
            details: props.card ? props.card.details : '',              
            error: '',
            allSubjectsWithTopics: props.subjectsWithTopics,  
            allSubjects: [...new Set(props.subjectsWithTopics.map((item) => item.subject ))],
            topics: []
        };        
    }

    getTopicsForSubject = (subject) => {
        if (subject == '') {  
            return [];
        } else {
            const subjectTopics = this.state.allSubjectsWithTopics.filter((item) => item.subject.match(new RegExp(subject, "i")));            
            return [...new Set(subjectTopics.map((item) => item.topic))];
        }
    }

    onSubjectChange = (e) => {
        const subject = e.target.value;
        this.setState({subject});
        this.setState({topics: this.getTopicsForSubject(subject)});
    };

    onTopicChange = (e) => {
        
        const topic = e.target.value;
        this.setState({topic});
    };

    onPaperChange = (e) => {
        const paper = e.target.value;
        this.setState({paper});
    };

    onTitleChange = (e) => {
        const title = e.target.value;
        this.setState({title});
    };

    onDetailsChange = (e) => {
        const details = e.target.value;
        this.setState({details});
    };

    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.subject || !this.state.title || !this.state.details) {              
            this.setState(() => ( {error: 'Please enter a Subject, Title and some Details'}))
        } else {                       
            this.setState(() => ( {error: undefined}));
            this.props.onSubmit({
                subject: this.state.subject,
                topic: this.state.topic, 
                paper: this.state.paper, 
                title: this.state.title,
                details: this.state.details
            });
        }
    };

    render() {
        return (         
            <form className="form" onSubmit={this.onSubmit}>
                {this.state.error && <p className="form__error">{this.state.error}</p>}

                <label>Subject</label>
                <input                    
                    className="text-inputs"
                    type="text"
                    placeholder="e.g. History, Maths, etc"
                    autoFocus
                    value={this.state.subject}
                    onChange={this.onSubjectChange}
                    list="subjectlist"
                />

                <datalist id="subjectlist">
                    
                    { this.state.allSubjects.map((item) =>
                        <option value={item} key={item} />
                    )}

                </datalist>

                <label>Topic</label>
                <input                    
                    className="text-inputs"
                    type="text"
                    placeholder="e.g. Kings and Queens, Algebra, etc"
                    value={this.state.topic}
                    onChange={this.onTopicChange}
                    list="topiclist"
                />

                <datalist id="topiclist">
                    {this.state.topics.map((item) =>
                        <option value={item} key={item} />
                    )}
                </datalist>

                <label>Paper</label>
                <input                    
                    className="text-inputs"
                    type="text"
                    placeholder="Paper, e.g 1, 2, etc"
                    value={this.state.paper}
                    onChange={this.onPaperChange}
                    list="paperlist"
                />

                <datalist id="paperlist">                    
                    <option value="1" key="1" />
                    <option value="2" key="2" />
                    <option value="3" key="3" />
                    <option value="4" key="4" />
                    <option value="5" key="5" />
                </datalist>

                <label>Title</label>
                <input
                    className="text-inputs"
                    type="text"
                    placeholder="e.g. Elizabeth I, quadratics, etc"
                    value={this.state.title}
                    onChange={this.onTitleChange}
                />

                <label>Details</label>
                <textarea                    
                    placeholder="Full Details here"
                    className="text-area"
                    value={this.state.details}
                    onChange={this.onDetailsChange}
                />
                                
                <div className="form__center">
                    <button className="button">Save</button>
                </div>
                
            </form>
            
        )
    };
};

const mapStateToProps = (state) => {    
    return {
        subjectsWithTopics: getSubjectWithTopics(state.cards)        
    };
};

export default connect(mapStateToProps)(CardForm);