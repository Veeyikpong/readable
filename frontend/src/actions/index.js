import * as ReadableAPI from '../utils/api.js'

export const GET_ALL_POSTS = 'GET_ALL_POSTS'

export const receivePosts = posts => ({
	type: GET_ALL_POSTS,
	posts
});

export const fetchAllPosts = () => dispatch => {
	
	ReadableAPI.getAllPosts()
	.then(posts => dispatch(receivePosts(posts)))
};	