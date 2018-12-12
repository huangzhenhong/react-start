import React from 'react';
import unsplash from '../../api/unsplash';
import SearchBar from './search-bar';
import ImageList from './image-list';

class Pics extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            images: []
        };
    }
    
    
     handleSearch = async (term) => {
        // console.log(term);
        // axios.get(`https://api.unsplash.com/search/photos`, {
        //     params: {
        //         query: term
        //     },
        //     headers: {
        //         Authorization: 'Client-ID 5a9348169659f9ee322d52cc9b8ffdf26bbfccce1a556424232c81617d430962'
        //     }
        // }).then(response => {
        //     console.log(response.data.results);
        // }).catch(err => {
        //     console.log(err);
        // })

       const response = await unsplash.get('/search/photos', {
            params: {
                query: term
            }
        });

        // console.log(response.data.results);
        
        this.setState({
            images: response.data.results
        });

    }

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar handleSearch={this.handleSearch}/>
                <ImageList images={this.state.images}/>
            </div>
        );
    }
}

export default Pics;