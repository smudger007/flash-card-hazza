import React from 'react';
import {connect} from 'react-redux';
import {setSubjectFilter, setTopicFilter, setPaperFilter, setTitleFilter, setDetailsFilter } from '../actions/filters';

class CardsListFilters extends React.Component {
    
    render() {
        return (
            <div className="content-container">

                

                <div className="input-group show-for-desktop">

                    <div className="input-group__item">
                        <input 
                            className="text-inputs" 
                            placeholder="Search Subject"
                            type="text"                             
                            value={this.props.filters.subject} 
                            onChange={ (e) => {
                                this.props.dispatch(setSubjectFilter(e.target.value))
                            }} 
                        />
                    </div>

                    <div className="input-group__item">
                        <input 
                            className="text-inputs" 
                            placeholder="Search Topic"
                            type="text" 
                            value={this.props.filters.topic} 
                            onChange={ (e) => {
                                this.props.dispatch(setTopicFilter(e.target.value))
                            }} 
                        />
                    </div>

                    <div className="input-group__item">
                        <input 
                            className="text-inputs" 
                            placeholder="Search Paper"
                            type="text" 
                            value={this.props.filters.paper} 
                            onChange={ (e) => {
                                this.props.dispatch(setPaperFilter(e.target.value))
                            }} 
                        />
                    </div>

                    <div className="input-group__item">
                        <input 
                            className="text-inputs" 
                            placeholder="Search Title"
                            type="text" 
                            value={this.props.filters.title} 
                            onChange={ (e) => {
                                this.props.dispatch(setTitleFilter(e.target.value))
                            }} 
                        />
                    </div>

                    <div className="input-group__item">
                        <input 
                            className="text-inputs" 
                            placeholder="Search Details"
                            type="text" 
                            value={this.props.filters.details} 
                            onChange={ (e) => {
                                this.props.dispatch(setDetailsFilter(e.target.value))
                            }} 
                        />
                    </div>

                    
                </div>    
                
                <div className="input-group show-for-mobile">

                    <div className="input-group__item">
                        <input 
                            className="text-inputs" 
                            placeholder="Search Subject"
                            type="text"                             
                            value={this.props.filters.subject} 
                            onChange={ (e) => {
                                this.props.dispatch(setSubjectFilter(e.target.value))
                            }} 
                        />
                    </div>

                    <div className="input-group__item">
                        <input 
                            className="text-inputs" 
                            placeholder="Search Topic"
                            type="text" 
                            value={this.props.filters.topic} 
                            onChange={ (e) => {
                                this.props.dispatch(setTopicFilter(e.target.value))
                            }} 
                        />
                    </div>

                    <div className="input-group__item">
                        <input 
                            className="text-inputs" 
                            placeholder="Search Title"
                            type="text" 
                            value={this.props.filters.title} 
                            onChange={ (e) => {
                                this.props.dispatch(setTitleFilter(e.target.value))
                            }} 
                        />
                    </div>

                    
                </div>                

            </div>                
        )
    };
};

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)(CardsListFilters);
