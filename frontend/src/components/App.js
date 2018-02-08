import React, { Component } from 'react';
import logo from '../assets/images/logo.ico';
import '../assets/App.css';
import PostList from './PostList.js'
import {fetchAllPosts,fetchAllCategories,fetchPostsByCategory,changeSortMethod} from '../actions'
import {connect} from 'react-redux'
import { Router, Route, withRouter, Link } from 'react-router-dom';
import {Redirect} from 'react-router'

class App extends Component {

  state = {
    posts: [],
    categories: [],
    sortMethod: '',
    selectedCategory:'/', //all 
  }

  componentWillMount()
  { 
     this.props.fetchAllPosts();
     this.props.fetchAllCategories();
  }

  filterPostByCategory(category){
    const {posts} = this.props

    return posts.filter(post => post.category === category)
  }

  updateDropdownValue= (category) =>{
    this.setState(() => ({
      selectedCategory: category,
    }))
  } 

  redirect(history, event){
      history.push(event.target.value)
  }

  render() {
    const {posts, categories, sortMethod} = this.props
    const {selectedCategory} = this.state

    return (
    
      <div className="App">
        <div id="header" className="container">
          <div id="logo">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Readable</h1>
          </div>

          <button className='createPost'>Create</button>
          <span className="categoryPlaceholder">Categories</span>
          <select className='selectCategory' onChange={(e)=>this.redirect(this.props.history, e)} value={selectedCategory}>
            <option className="selectCategoryOption" value="/">ALL</option>
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

          <Route exact path = "/:category" render={({match})=>(
            <PostList posts={this.filterPostByCategory(match.params.category)} sortMethod={sortMethod} category={match.params.category} updateDropdownValue={this.updateDropdownValue}/>)}/>

          <Route exact path = "/" render={()=>(
            <PostList posts={posts} sortMethod={sortMethod} updateDropdownValue={this.updateDropdownValue}/>)}/>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
