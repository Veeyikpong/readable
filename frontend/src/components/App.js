import React, { Component } from 'react';
import logo from '../assets/images/logo.ico';
import '../assets/App.css';
import Post from './Post.js'
import {fetchAllPosts} from '../actions'
import {connect} from 'react-redux'

class App extends Component {

  state = {
    posts: []
  }

  componentWillMount()
  { 
     this.props.fetchAllPosts();
  }

  render() {
    const {posts} = this.props

    return (
      <div className="App">

        <div id="header" className="container">
          <div id="logo">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Readable</h1>
          </div>

          <button className='button'>Create</button>
          <button className="button-sorticon"/>

      
          {posts && posts.length>0 && posts.map((post)=>(
             <Post key={post.id} post={post}/>
          ))}
         
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllPosts(){
      dispatch(fetchAllPosts());
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
