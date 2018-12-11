import React from 'react';
import SearchBar from './search-bar';

class Pics extends React.Component {

    constructor(props){
        super(props);
    }

    handleSearch(term) {
        console.log(term)
    }

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar handleSearch={this.handleSearch}/>
            </div>
        );
    }
}

export default Pics;