import React from 'react';

import postStore from '../stores/PostStore';

class Home extends React.Component {

	constructor() {
		super();
		this.state = {
			posts: postStore.getPosts()
		}
		console.log(this.state.posts);
	}

	render() {
		return (
	  		<div className="welcome">
	    		{this.state.posts.map(function(post, index) {
	    			return (
	    				<PostItem post={post} key={"post " + index} />
	    			)
	    		})
	    		}
	  		</div>
		)
	}
}

class PostItem extends React.Component {
    render() {
        return <div>{this.props.post.postName}</div>;
    }
}

export default Home;