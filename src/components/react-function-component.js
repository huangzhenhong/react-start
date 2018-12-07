import React from 'react';

// Create a function react component
const ReactFunctionComponent = () => {
    const buttonText = 'Click Me';
    return (
        <div>
            <label className="label" htmlFor="name">Enter name:</label>
            <input id="name" type="text" />
            <button style={{backgroundColor: "blue", color: "white" }}>{buttonText}</button>
        </div>
    );
};

export default ReactFunctionComponent;