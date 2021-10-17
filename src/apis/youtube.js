import axios from 'axios';

const KEY = 'AIzaSyD3ZNnGN47dwEriosJLrkhXAN0i-MRm_Ns';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})