import {combineReducers} from 'redux'

function posts(state=[],action){
  switch(action.type){
    case 'GET_ALL_POSTS':
      return action.posts;
    case 'FETCH_POSTS_BY_CATEGORY':
      return action.posts;
    case 'FETCH_POST_BY_ID':
      return [...state,...state.filter(post=>post.id===action.post)]
    case 'VOTE_POST':
      return state.map(p => {
        if (p.id !== action.postID) {
          return p;
        }

        if(action.voteType === 'upVote'){
          return {
            ...p,
            voteScore: p.voteScore + 1
          }
        }else{
          return {
            ...p,
            voteScore: p.voteScore - 1
          }
        }
      });
    case 'ADD_COMMENT':
      return state.map(p => {
        if (p.id !== action.comment.parentId) {
          return p;
        }

        return {
            ...p,
            commentCount: p.commentCount + 1
          }
      });
    case 'DELETE_COMMENT':
      return state.map(p => {
        if (p.id !== action.comment.parentId) {
          return p;
        }

        return {
            ...p,
            commentCount: p.commentCount - 1
          }
      });
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
    case 'VOTE_COMMENT':
      return state.map(c => {
        if (c.id !== action.commentID) {
          return c;
        }

        if(action.voteType === 'upVote'){
          return {
            ...c,
            voteScore: c.voteScore + 1
          }
        }else{
          return {
            ...c,
            voteScore: c.voteScore - 1
          }
        }
      });
    case 'DELETE_COMMENT':
      return state.filter(c=>c.id!==action.comment.id)
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
