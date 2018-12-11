import React from 'react';
import SeasonDisplay from './season-display';
import Spinner from '../../components/spinner';

class Seasons extends React.Component {

    state = {
        latitude: null,
        longtitude: null,
        errorMessage: ''
    };

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         latitude: null,
    //         longtitude: null,
    //         errorMessage: ''
    //     };
    // }

    componentDidMount() {
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

    renderContent() {
        if(this.state.errorMessage && !this.state.latitude) {
            return <div>Error: {this.state.errorMessage}</div>;
        }
        if(!this.state.errorMessage && this.state.latitude) {
            return (
                    <SeasonDisplay 
                        latitude={this.state.latitude} 
                        longtitude={this.state.longtitude} 
                    />
            );
        }
        return <Spinner message="Please accept location request"/>;
    }

    render() {
     return (
        <div>
            {this.renderContent()}
        </div>
        );   
    }
};

export default Seasons;