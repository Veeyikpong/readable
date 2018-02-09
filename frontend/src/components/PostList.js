import React, { Component } from 'react';
import logo from '../assets/images/logo.ico';
import '../assets/App.css';
import Post from './Post.js'
import {connect} from 'react-redux'
import emptyIcon from '../assets/images/empty.png'
import {changeSortMethod} from '../actions';

class PostList extends Component {

  state = {
      posts: [],
      sortMethod: ''
  }

  componentWillMount(){
    //this is to handle if user go directly to the category link, should update the parent dropdown value correctly
    const {category, updateDropdownValue} = this.props
    if(category){
      updateDropdownValue(category)
    }else{
      updateDropdownValue('/')
    }
  }

  render() {
    const {posts, sortMethod} = this.props

    if(posts && posts.length>0){
      switch(sortMethod){
        case 'timestamp_asc':
          posts.sort((a, b) => (a.timestamp-b.timestamp))
        break;
        case 'timestamp_desc':
          posts.sort((a, b) => (b.timestamp-a.timestamp))
        break;
        case 'votescore_asc':
          posts.sort((a, b) => (a.voteScore-b.voteScore))
        break;
        case 'votescore_desc':
          posts.sort((a, b) => (b.voteScore-a.voteScore))
        break;
        default:{
          posts.sort((a, b) => (a.timestamp-b.timestamp))
        }
      }
    }

    if(posts && posts.length>0){
      return(
        <div className="App">
        <button className='createPost'>Create</button>
        <select className='selectSortMethod' onChange={this.props.changeSortMethod}>
          <option className="selectSortMethodOption" value="timestamp_asc">Date : Ascending</option>
          <option className="selectSortMethodOption" value="timestamp_desc">Date : Descending</option>
          <option className="selectSortMethodOption" value="votescore_asc">Votescore : Ascending</option>
          <option className="selectSortMethodOption" value="votescore_desc">Votescore : Descending</option>
        </select>
        <span className='sortMethodPlaceholder'>Order By</span>
        {
          posts.map((post)=>(
             <Post key={post.id} post={post}/>
          ))
        }        
        </div>
      );
    }
    return (
      <div>
        <p className="errorMessage">
          <img src={emptyIcon} className="emptyIcon"/>
        </p>
        <p className="errorMessage">
        Oops. There is currently no posts in this category.
        </p>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return { 
    sortMethod: state.sortMethod
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeSortMethod : (event) => {
      dispatch(changeSortMethod(event.target.value));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList);