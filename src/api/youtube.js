import axios from 'axios';

// how to access youtube api 
// https://developers.google.com/youtube/v3/docs/search/list

const KEY = 'AIzaSyC6pz6eFwkBmoZ99oYd7MhMy75KP14_jjc';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResult: 5,
        key: KEY
    }
});
