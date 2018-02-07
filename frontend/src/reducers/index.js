import {combineReducers} from 'redux'

function posts(state=[],action){
  switch(action.type){
    case 'GET_ALL_POSTS':
      return action.posts;
    case 'FETCH_POSTS_BY_CATEGORY':
       return action.posts;
    default:
      return state;
  }
}

function categories(state=[],action){
  switch(action.type){
    case 'GET_ALL_CATEGORIES':
      return action.categories.categories;
    default:
      return state; 
  }
}

function sortMethod(state='timestamp_asc',action){
  switch(action.type){
    case 'CHANGE_SORT_METHOD':
      return action.sortMethod
    default:
      return state; 
  }
}

function comments(state=[],action){  
  switch(action.type){
    case 'GET_COMMENTS':
       return action.comments;
    case 'ADD_COMMENT':
      return [...state,action.comment]
    default:
      return state;
  }
}

export default combineReducers({
  posts,  
  categories,
  sortMethod,
  comments
});
