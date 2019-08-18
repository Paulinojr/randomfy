import axios from 'axios';
import {authorization} from "../env";

const config = {Authorization: authorization};

export const api = axios.create({
  baseURL: 'https://api.spotify.com/v1', 
  headers: config
});

export const instanceForReloadAccessToken = axios.create({
  baseURL: 'https://accounts.spotify.com/api/',
  headers: {
    'Authorization' : 'Basic MjliMzc2MWMzYTcwNDA5MTliZTgyODRkN2JhNjM4ZTA6NmRkZjAwYWQyOTI5NDA3ZjliZDAxOGY3MjdjYzg0OWI=',
    'Content-Type': 'application/x-www-form-urlencoded'
  }
});
