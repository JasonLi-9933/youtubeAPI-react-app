import axios from 'axios';


const KEY = 'AIzaSyDRRHtDNx-dArfuUVHlNGKvNhQ94N6z23c';

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        type: 'video'
    }
});