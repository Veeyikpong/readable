import * as ReadableAPI from '../utils/api.js'

export const GET_ALL_POSTS = 'GET_ALL_POSTS'
export const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES'
export const FETCH_POSTS_BY_CATEGORY = 'FETCH_POSTS_BY_CATEGORY'
export const FETCH_POST_BY_ID = 'FETCH_POST_BY_ID'
export const CHANGE_SORT_METHOD = 'CHANGE_SORT_METHOD'
export const GET_COMMENTS = 'GET_COMMENTS'
export const ADD_COMMENT = 'ADD_COMMENT'
export const VOTE_POST = 'VOTE_POST'
export const VOTE_COMMENT = 'VOTE_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const EDIT_COMMENT = 'EDIT_COMMENT'
export const CREATE_POST = 'CREATE_POST'
export const DELETE_POST = 'DELETE_POST'
export const EDIT_POST = 'EDIT_POST'

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
  
export const fetchPostByID = (postID) => dispatch =>{
	ReadableAPI.fetchPostByID(postID).then(post=>
	dispatch(receivePostsByID(post)))
}

export const receivePostsByID = post => ({
	type: FETCH_POST_BY_ID,
	post
})

export const votePost = (postID, data) => dispatch =>{
	ReadableAPI.votePost(postID, data).then(post=>
	dispatch(votePostSuccess(post.id, data.option)))
}

export const votePostSuccess = (postID, voteType) => ({
	type: VOTE_POST,
	postID,
	voteType
})

export const voteComment = (commentID, data) => dispatch =>{
	ReadableAPI.voteComment(commentID, data).then(comment=>
	dispatch(voteCommentSuccess(comment.id, data.option)))
}

export const voteCommentSuccess = (commentID, voteType) => ({
	type: VOTE_COMMENT,
	commentID,
	voteType
})

export const deleteComment = (commentID) => dispatch =>{
	ReadableAPI.deleteComment(commentID)
	.then(comment=> dispatch(deleteCommentSuccess(comment)))
}

export const deleteCommentSuccess = (comment) => ({
	type: DELETE_COMMENT,
	comment
})

export const editComment = (commentID, data) => dispatch =>{
	ReadableAPI.editComment(commentID, data).then(comment=>
	dispatch(editCommentSuccess(comment.id, data.body)))
}

export const editCommentSuccess = (commentID, newMessage) => ({
	type: EDIT_COMMENT,
	commentID,
	newMessage
})

export const createPost = (data) => dispatch =>{
	ReadableAPI.createPost(data).then(post=>
	dispatch(createPostSuccess(post)))
}

export const createPostSuccess = (post) => ({
	type: CREATE_POST,
	post
})

export const deletePost = (postID) => dispatch =>{
	ReadableAPI.deletePost(postID).then(post=>
	dispatch(deletePostSuccess(post)))
}

export const deletePostSuccess = (post) => ({
	type: DELETE_POST,
	post
})

export const editPost = (postID, data) => dispatch =>{
	ReadableAPI.editPost(postID, data).then(post=>
	dispatch(editPostSuccess(post)))
}

export const editPostSuccess = (post) => ({
	type: EDIT_POST,
	post
})