import React, { Component } from 'react';
import logo from '../assets/images/logo.ico';
import '../assets/App.css';
import Post from './Post.js'
import {connect} from 'react-redux'

class PostList extends Component {

  componentWillMount(){
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
      console.log('SORTMETHOD',sortMethod)
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

    return (
      <div className="App">
       {posts && posts.length>0 && posts.map((post)=>(
           <Post key={post.id} post={post}/>
        ))}
      </div>
    );
  }
}

export default PostList