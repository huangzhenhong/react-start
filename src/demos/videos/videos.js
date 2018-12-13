import React from 'react';
import SearchBar from './search-bar';
import youtube from '../../api/youtube';
import VideoList from './video-list';
import VideoDetail from './video-detail';

class Videos extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };
    }

    componentDidMount() {
        this.onSearch('lego');
    }

    onSearch = async (term) => {
        // console.log(term);
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        // console.log(response);
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
    }

    onVideoSelect = (video) => {
        // console.log(video);
        this.setState({
            selectedVideo: video
        });
    };

    render() {
        return (
            <div className="ui container">
                <SearchBar onSearch={this.onSearch} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                            {this.state.videos.length} videos found!
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Videos;