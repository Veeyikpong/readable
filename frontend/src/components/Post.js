import React, { Component } from 'react';
import Upvote from 'react-icons/lib/fa/thumbs-o-up'
import Downvote from 'react-icons/lib/fa/thumbs-o-down'
import '../assets/App.css';
import {timeConverter} from '../utils/helpers.js'
import PostDetails from './PostDetails.js'
import {Link} from 'react-router-dom'
import {votePost} from '../actions'
import {connect} from 'react-redux'

class Post extends Component {
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

  render() {
  	const {post,redirect} = this.props
    return (
    	<div id="post">
	        <div id="post">
	        	<div className="header">
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
	      	</div>
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);

