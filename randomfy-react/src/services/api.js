import axios from 'axios';
import authorization from "../env"

const config = {Authorization: authorization}

const api = axios.create({
  baseURL: 'https://api.spotify.com/v1', headers: config
});

export default api;
