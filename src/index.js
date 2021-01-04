// create a new component to produce html;
import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = "AIzaSyBd_S562-x0eRMHbRkXNakOL7YC1TH84xw"

const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('.container'))

export default App;

// Put it in the dom