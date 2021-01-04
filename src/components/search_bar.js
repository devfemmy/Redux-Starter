import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {term: ''}
    }
    render() {
        return (
        <div>           
             <input onChange= {e => this.setState({term: e.target.value}) } />
             <p>
            {this.state.term}
            </p>
        </div>
       
            )
    }

    onInputChange (e) {
        this.setState({term: e.target.value})
    }
}

export default SearchBar;