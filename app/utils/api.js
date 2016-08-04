import axios from 'axios';

function getPosts(username){
  return axios.get(`api/posts`);
}

const api = {
  getPosts
}

export default api;