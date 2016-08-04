import { action, useStrict } from 'mobx';
import api from './api';
import store from '../utils/store';

useStrict(true);

const setPosts = action('set posts', (data) => {
  console.log('-- posts');
  store.posts.value = data;
})

const getPosts = () => {
  console.log('-- getPosts');
  api.getPosts().then((response) => { setPosts(response.data); });
};

const actions = {
  getPosts
}

export default actions;