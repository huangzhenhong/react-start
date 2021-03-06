// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
// import CommentList from './components/comments/comment-list';
// import Seasons from './demos/seasons/seasons';
// import Pics from './demos/pics/pics';
import Videos from './demos/videos/videos';

// Create a function react component
const App = () => {
    return (
        <div>
            <Videos />
        </div>
    );
};

// Take the react component and show it on the screen;
// ReactDOM.render(<App />, document.querySelector('#root'));
ReactDOM.render(<App />, document.getElementById('root'));