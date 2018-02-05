import {GET_ALL_POSTS} from '../actions'
import {combineReducers} from 'redux'

function posts(state={},action){
  
  switch(action.type){
    case 'GET_ALL_POSTS':
      return action.posts
    default:
      return state; 
  }
}

export default combineReducers({
  posts
});
