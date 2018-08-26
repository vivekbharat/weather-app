import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component{

    constructor(props){
        super(props);

        this.state = { term: '' };
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(e){
        //console.log(e.target.value);
        this.setState({ term: e.target.value });
    }

    onFormSubmit(e){
        e.preventDefault();

        //GO and fetch Weather Data
        this.props.fetchWeather(this.state.term);
        this.setState({ term: '' });
    }

    render(){
        return(
          <div>
                <form onSubmit={this.onFormSubmit} className="input-group" >
                    <input 
                        placeholder="Get a 5 day forecast in yor favorite city"
                        className="form-control"
                        value={this.state.term}
                        onChange={this.onInputChange} />  {/* Whenever a callback function has this attached to it, bind this to the function */}
                    <span className="input-group-btn">
                        <button type="submit" className="btn btn-secondary">Submit</button>
                    </span>
                </form>
            </div>

        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchWeather}, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar);