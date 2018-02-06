import React, { Component } from 'react';
import logo from '../assets/images/logo.ico';
import '../assets/App.css';
import PostList from './PostList.js'
import {fetchAllPosts,fetchAllCategories,fetchPostsByCategory,changeSortMethod} from '../actions'
import {connect} from 'react-redux'

class App extends Component {

  state = {
    posts: [],
    categories: [],
    sortMethod: ''
  }

  componentWillMount()
  { 
     this.props.fetchAllPosts();
     this.props.fetchAllCategories();
  }

  render() {
    const {posts, categories, sortMethod} = this.props

    return (
      <div className="App">

        <div id="header" className="container">
          <div id="logo">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Readable</h1>
          </div>

          <button className='createPost'>Create</button>

          <span className="categoryPlaceholder">Categories</span>
          <select className='selectCategory' onChange={this.props.fetchPostsByCategory}>
            <option className="selectCategoryOption" value="all">ALL</option>
          {categories && categories.length>0 && categories.map((category)=>(
            <option className="selectCategoryOption" key={category.path} value={category.path}>{category.name}</option>
          ))}
          </select>
      
          <select className='selectSortMethod' onChange={this.props.changeSortMethod}>
            <option className="selectSortMethodOption" value="timestamp_asc">Time : Ascending</option>
            <option className="selectSortMethodOption" value="timestamp_desc">Time : Descending</option>
            <option className="selectSortMethodOption" value="votescore_asc">Votescore : Ascending</option>
            <option className="selectSortMethodOption" value="votescore_desc">Votescore : Descending</option>
          </select>
          <span className='sortMethodPlaceholder'>Order By</span>

          <PostList posts={posts} sortMethod={sortMethod}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { 
    posts: state.posts,
    categories:state.categories,
    sortMethod: state.sortMethod
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllPosts : () => {
      dispatch(fetchAllPosts());
    },
    fetchAllCategories : () => {
      dispatch(fetchAllCategories());
    }, 
    fetchPostsByCategory : (event) => {
      dispatch(fetchPostsByCategory(event.target.value));
    },
    changeSortMethod : (event) => {
      dispatch(changeSortMethod(event.target.value));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
