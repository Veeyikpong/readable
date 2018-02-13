import React, { Component } from 'react';
import '../assets/App.css';
import Post from './Post.js'
import {connect} from 'react-redux'
import emptyIcon from '../assets/images/empty.png'
import SortMethod from './SortMethod.js'
import CreatePost from './CreatePost.js'
import Modal from 'react-modal'

class PostList extends React.Component {

  state = {
      posts: [],
      sortMethod: '',
      createPostModalOpen: false,
  }

  componentWillMount(){
    Modal.setAppElement('body');

    //this is to handle if user go directly to the category link, should update the parent dropdown value correctly
    const {category, updateDropdownValue} = this.props
    if(category){
      updateDropdownValue(category)
    }else{
      updateDropdownValue('/')
    }
  }

  openCreatePostModal = () => {
    this.setState(() => ({
      createPostModalOpen: true,
    }))
  }

  closeCreatePostModal = () =>{
    this.setState(() => ({
      createPostModalOpen: false,
    }))
  }

  render() {
    const {posts, sortMethod} = this.props
    const {createPostModalOpen} = this.state

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
        case 'comments_asc':
          posts.sort((a, b) => (a.commentCount-b.commentCount))
        break;
        case 'comments_desc':
          posts.sort((a, b) => (b.commentCount-a.commentCount))
        break;
        default:{
          posts.sort((a, b) => (a.timestamp-b.timestamp))
        }
      }
    }

    return(
      <div>
        <button className='createPost' onClick={()=>{this.openCreatePostModal()}}>New Post</button>
        {posts && posts.length>0?
          (
            <div className="App">
              <SortMethod/>
              {
                posts.map((post)=>(
                <Post key={post.id} post={post}/>
                ))
              }
            </div>
          ):
          (
            <div id="error-Message">
              <img src={emptyIcon} className="emptyIcon" alt="empty"/>
              <p>
              Oops. There is currently no posts in this category.
              </p>
            </div>
          )
        }

        <Modal
          className='createPostModal'
          overlayClassName='createPostOverlay'
          isOpen={createPostModalOpen}
          onRequestClose={this.closeCreatePostModal}
          contentLabel='Modal'>

          <CreatePost closeCreatePostModal={this.closeCreatePostModal}/>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sortMethod: state.sortMethod
  }
}

export default connect(mapStateToProps, null)(PostList);