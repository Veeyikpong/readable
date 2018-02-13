import React, { Component } from 'react';
import logo from '../assets/images/logo.ico';
import '../assets/App.css';
import PostList from './PostList.js'
import PostDetails from './PostDetails.js'
import {fetchAllPosts,fetchAllCategories,fetchPostsByCategory} from '../actions'
import {connect} from 'react-redux'
import {Route, withRouter } from 'react-router-dom';
import Footer from './Footer.js'

class App extends React.Component {

  state = {
    posts: [],
    categories: [],
    selectedCategory:'/', //all
  }

  componentWillMount(){
     this.props.fetchAllPosts();
     this.props.fetchAllCategories();
  }

  filterPostByCategory = (category) => {
    const {posts} = this.props
    return posts.filter(post => post.category === category)
  }

  findPostByID = (postID) => {
    const {posts} = this.props

    if(posts.length>0){
      return posts.find(post => post.id === postID)
    }

    return null;
  }

  updateDropdownValue = (category) => {
    this.setState(() => ({
      selectedCategory: category,
    }))
  }

  redirect = (history, event) => {
    this.updateDropdownValue(event.target.value)
    history.push(event.target.value)
  }

  render() {
    const {posts, categories} = this.props
    const {selectedCategory} = this.state

    return (
      <div className="App">

        <div id="header" className="container">
          <div id="logo">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Readable</h1>
          </div>
        </div>

        <div id="body" className="container">
          <Route exact path = "/:category" render={({match})=>
          (
            <div>
              <span className="categoryPlaceholder">Category</span>
                <select className='select-category' onChange={(e)=>this.redirect(this.props.history, e)} value={selectedCategory}>
                  <option className="select-category-option" value="/">ALL</option>
                  {categories && categories.length>0 && categories.map((category)=>(
                    <option className="select-category-option" key={category.path} value={category.path}>{category.name}</option>
                  ))}
                </select>
                <PostList posts={this.filterPostByCategory(match.params.category)} category={match.params.category} updateDropdownValue={this.updateDropdownValue}
              />
            </div>
          )}/>

          <Route exact path = "/" render={()=>
          (
            <div>
             <span className="categoryPlaceholder">Category</span>
              <select className='select-category' onChange={(e)=>this.redirect(this.props.history, e)} value={selectedCategory}>
                <option className="select-category-option" value="/">ALL</option>
                {categories && categories.length>0 && categories.map((category)=>(
                  <option className="select-category-option" key={category.path} value={category.path}>{category.name}</option>
                ))}
              </select>
              <PostList posts={posts} updateDropdownValue={this.updateDropdownValue}/>
            </div>
          )}/>

          <Route exact path = "/:category/:postID" render={({match})=>
          (
            <PostDetails {...match} post={this.findPostByID(match.params.postID)} updateDropdownValue={this.updateDropdownValue}/>
          )}/>
        </div>

        <Footer/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    categories:state.categories
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
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
