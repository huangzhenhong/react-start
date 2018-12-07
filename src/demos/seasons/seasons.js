import React from 'react';
import SeasonDisplay from './season-display';

class Seasons extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            latitude: null,
            longtitude: null,
            errorMessage: ''
        };
        this.getUserLocation();
    }

    getUserLocation = () => {
        // Get user's location
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                // console.log(position);
                this.setState({
                    latitude: position.coords.latitude,
                    longtitude: position.coords.longtitude
                });
            },
            err => {
                // console.log(err);
                this.setState({
                    errorMessage: err.message
                });
            }
        );
    }

    render() {
        let error;
        if(this.state.errorMessage) {
            error = 'Error: ' + this.state.errorMessage; 
        }else {
            error = '';
        }
        return (
            <div>
                <SeasonDisplay 
                    latitude={this.state.latitude} 
                    longtitude={this.state.longtitude} 
                />
                <br />
                {error}
            </div>
        );
    }
};

export default Seasons;