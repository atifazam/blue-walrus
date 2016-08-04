import React from 'react';
import { observer } from 'mobx-react';

import store from '../utils/store';

const Home = observer(() => {

	const posts = store.posts.value;

	return (
	    <div>
	      {posts.map((post,index) => <span className="label label-primary" key={index}>{post.postTitle}</span>)}
		</div>
	)
})

export default Home;