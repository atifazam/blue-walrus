import { observable } from 'mobx';

let store = {
	posts: observable({ value:[] })
};

export default store;