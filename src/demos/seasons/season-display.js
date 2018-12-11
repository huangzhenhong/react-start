import React from 'react';
import './season-display.css';

const seasonConfig = {
    summer: {
        text: 'Lets hit the beach!',
        iconName: 'massive sun icon'
    },
    winter: {
        text: 'Burr it is cold',
        iconName: 'massive snowflake icon'
    }
};

const getSeason = (lat, month) => {
    if(month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.latitude, new Date().getMonth());
    const {text, iconName} = seasonConfig[season];
    
    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left ${iconName}`}></i>
            <h1>{text}</h1>
            <i className={`icon-right ${iconName}`}></i>
        </div>
    );
};

export default SeasonDisplay;