import axios from 'axios';

const unsplash = axios.create({
    baseURL: 'https://api.unsplash.com',
    time: 1000,
    headers: {
        Authorization: 'Client-ID 5a9348169659f9ee322d52cc9b8ffdf26bbfccce1a556424232c81617d430962'
    }
});

export default unsplash;