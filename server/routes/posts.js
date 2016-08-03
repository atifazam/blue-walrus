module.exports = function (router) {

	var Post = require('../models/post.js');

	// middleware for the api requests
	router.use(function (req, res, next) {
		// do logging
		console.log('Tapping into API...');
		next(); // make sure we go to our next route and don't stop here
	});

	// test route to make sure everything is working (accessed at GET http://localhost:8080/api)

	router.get('/', function (req, res) {
		res.json({ message: 'Hooray! Welcome to our API!' });
	});


	// all routes here

	// routes that end in /posts
	router.route('/posts')
		
		.post(function(req, res) {
			// create a Post (accessed at POST http://localhost:7777/api/posts)
			var post = req.body;
		    console.log("Adding item...", post);
		    
		    var postItem = new Post(post);
		    
		    postItem.save(function(err, data) {
		    	if (err)
		    		return res.status(300).send(err);

		      	res.status(201).send(data);
		    });
		})

		// get all Posts (accessed at GET http://localhost:7777/api/posts)
		.get(function(req, res) {
			console.log("Getting posts...");
			Post.find(function(err, posts) {
				if (err)
					return res.send(err);

				res.json(posts);
			});
		});

	// routes that end in /posts for specific id
	router.route('/posts/:post_id')

		// get the post with that id
		.get(function(req, res) {
			Post.findById(req.params.post_id, function(err, post) {
				if (err)
					return res.send(err);

				res.json(post);
			});
		})
		
		// update the post with that id
		.put(function(req, res) {
			Post.findById(req.params.post_id, function(err, post) {
				if (err)
					return res.send(err);

				post.postTitle = req.body.postTitle;

				// save the post
				post.save(function(err) {
					if (err)
						return res.send(err);

					res.json({ message: 'Post updated!' });
				});
			});
		})
		
		// deletes the post with that id
		.delete(function(req, res) {
			Post.findOne({
	        	_id:req.params.post_id
	        }).remove(function(x){
	            console.log("Removed: ", _id);
	        });
		})

		.patch(function(req, res) {
			Post.findOne({
				_id: req.body._id
			}, function(err, doc) {
				for (var key in req.body) {
					dock[key] = req.body[key];
				}
				doc.save();
				res.status(200).send();
			});
		});

};