import React, { Component } from 'react';
import Upvote from 'react-icons/lib/fa/thumbs-o-up'
import Downvote from 'react-icons/lib/fa/thumbs-o-down'
import '../assets/App.css';
import {timeConverter} from '../utils/helpers.js'
import {Link} from 'react-router-dom'
import {votePost, deletePost} from '../actions'
import {connect} from 'react-redux'
import DeleteIcon from 'react-icons/lib/fa/close'
import EditIcon from 'react-icons/lib/fa/edit'
import EditPost from './EditPost.js'
import Modal from 'react-modal'

class Post extends Component {
	state={
		editPostModalOpen: false,
	}

  upvote = (postID) => {
  	const data = {
    	option: 'upVote'
    }
    this.props.votePost(postID,data)
  }	

  downvote = (postID) => {
  	const data = {
    	option: 'downVote'
    }
    this.props.votePost(postID,data)
  }	

  deletePost = (postID) => {
  	var x = window.confirm('Confirm to delete post?')

  	if(x === true){
  		this.props.deletePost(postID)
  	}
  }

openEditPostModal = () => {
    this.setState(() => ({
      editPostModalOpen: true,
    }))
  }

  closeEditPostModal = () =>{
    this.setState(() => ({
      editPostModalOpen: false,
    }))
  }

  render() {
  	const {post} = this.props
  	const {editPostModalOpen} = this.state

    return (
    	<div id="post">
        	<div className="header">
        		<DeleteIcon size={25} className="deleteIcon" onClick={()=>{this.deletePost(post.id)}}/>
        		<EditIcon size={23} className="editIcon" onClick={()=>{this.openEditPostModal()}}/>
		    	<span className="author">{post.author}</span>
		    	<span className="content"> posted in </span>
		    	<span className="category"> {post.category} </span>
	    	</div>
	    	<div className="body">
	    		<Link to={"/" + post.category + "/" + post.id} className="title">
                    <h3>{post.title}</h3>
                </Link>
		        <p className="description">{post.body}</p>
		        <Upvote size="30" className="vote" onClick={()=>{this.upvote(post.id)}}/>
		        <Downvote size="30" className="vote" onClick={()=>{this.downvote(post.id)}}/>
		        <p className="votescore">{post.voteScore} Votes</p>
		        <p className="comments">{post.commentCount} comments</p>
		        <p className="timestamp">{timeConverter(post.timestamp)}</p>
	        </div>
	        <p/>
	        <Modal
                className='createPostModal'
                overlayClassName='createPostOverlay'
                isOpen={editPostModalOpen}
                onRequestClose={this.closeEditPostModal}
                contentLabel='Modal'>

                <EditPost post={post} closeEditPostModal={this.closeEditPostModal}/>
          	</Modal>
      	</div>
    );
  }
}


const mapStateToProps = (state) => {
  return { 
    posts: state.posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    votePost : (postID, data) => {
      dispatch(votePost(postID,data));
    },
    deletePost : (postID) => {
    	dispatch(deletePost(postID));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);

