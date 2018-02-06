import * as ReadableAPI from '../utils/api.js'

export const GET_ALL_POSTS = 'GET_ALL_POSTS'
export const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES'
export const FETCH_POSTS_BY_CATEGORY = 'FETCH_POSTS_BY_CATEGORY'
export const CHANGE_SORT_METHOD = 'CHANGE_SORT_METHOD'

export const fetchAllPosts = () => dispatch => {
	ReadableAPI.getAllPosts()
	.then(posts => dispatch(receivePosts(posts)))
};	

export const receivePosts = posts => ({
	type: GET_ALL_POSTS,
	posts
});

export const fetchAllCategories = () => dispatch => {
	ReadableAPI.getAllCategories()
	.then(categories => dispatch(receiveCategories(categories)))
};	

export const receiveCategories = categories => ({
	type: GET_ALL_CATEGORIES,
	categories
});

export const fetchPostsByCategory = (category) => dispatch =>{
	console.log("selectedCatogory",category)
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