import helper from './../../helpers/RestHelpers.js';

var posts = [];

class PostStore {

	constructor() {
		helper.get('/api/posts')
			.then((data) => {
				posts = data;
				console.log(posts);
			}
		);
	}

	getPosts() {
		return posts;
	}

};

export default new PostStore();