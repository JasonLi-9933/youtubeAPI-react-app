import React from 'react';
import axios from 'axios';

class SearchBar extends React.Component {
    state = { 
        term: ''
     };

    onInputChange = e => {
        this.setState( { term: e.target.value});
    }
    
    onFormSubmit = (e) => {
        e.preventDefault();
        // Then call the callback function from parent component
        this.props.searchVideos(this.state.term);
    }

    render() { 
        return ( 
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Video Search</label>
                        <input type="text" value={this.state.term} onChange={this.onInputChange}></input>
                    </div>
                </form>
            </div>
         );
    }
}
 
export default SearchBar;