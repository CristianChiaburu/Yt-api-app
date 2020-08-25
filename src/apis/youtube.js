import axios from 'axios';

const KEY = 'AIzaSyA-DYrq-PriIJQ3qEgvU9MqNQ9LDmtav8Y';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});
