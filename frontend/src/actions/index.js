import * as ReadableAPI from '../utils/api.js'

export const GET_ALL_POSTS = 'GET_ALL_POSTS'
export const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES'
export const FETCH_POSTS_BY_CATEGORY = 'FETCH_POSTS_BY_CATEGORY'
export const CHANGE_SORT_METHOD = 'CHANGE_SORT_METHOD'
export const GET_COMMENTS = 'GET_COMMENTS'
export const ADD_COMMENT = 'ADD_COMMENT'

export const fetchAllPosts = () => dispatch => {
	ReadableAPI.getAllPosts()
	.then(posts => dispatch(receivePosts(posts)))
};	

export const receivePosts = posts => ({
	type: GET_ALL_POSTS,
	posts
});

export const fetchCommentsByPost = (postID) => dispatch => {
	ReadableAPI.getComments(postID)
		.then(comments => dispatch(receiveComments(postID,comments)))
};

export const receiveComments = (postID, comments) => ({
	type: GET_COMMENTS,
	postID,
	comments
})

export const fetchAllCategories = () => dispatch => {
	ReadableAPI.getAllCategories()
	.then(categories => dispatch(receiveCategories(categories)))
};	

export const receiveCategories = categories => ({
	type: GET_ALL_CATEGORIES,
	categories
});

export const fetchPostsByCategory = (category) => dispatch =>{
	if (!category || category === 'all') {
		dispatch(fetchAllPosts());
	}else{
		ReadableAPI.fetchPostsByCategory(category)
		.then(posts => dispatch(receivePostsByCategory(posts)))
	}
}

export const receivePostsByCategory = posts => ({
	type: FETCH_POSTS_BY_CATEGORY,
	posts
})


export const changeSortMethod = sortMethod => ({
	type: CHANGE_SORT_METHOD,
	sortMethod
})

export const addComment = data => dispatch =>
  ReadableAPI.addComment(data).then(comment =>
    dispatch(addCommentSuccess(comment)))

export const addCommentSuccess = comment => ({
	type: ADD_COMMENT,
	comment
})
  