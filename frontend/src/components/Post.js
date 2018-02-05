import React, { Component } from 'react';
import upvoteIcon from '../assets/images/upvote.png'
import downvoteIcon from '../assets/images/downvote.png'
import '../assets/App.css';
import {timeConverter} from '../utils/helpers.js'

class Post extends Component {
  render() {
  	const {post} = this.props
    return (
        <div id="post">
        	<div className="header">
		    	<span className="author">{post.author}</span>
		    	<span className="content"> posted in </span>
		    	<span className="category"> {post.category} </span>
	    	</div>
	    	<div className="body">
		        <h3 className="title">{post.title}</h3>
		        <p className="description">{post.body}</p>
		        <img className="vote" src={upvoteIcon} alt="logo" />
				<img className="vote" src={downvoteIcon} alt="logo" />
		        <p className="votescore">{post.voteScore} Votes</p>
		        <p className="comments">{post.commentCount} comments</p>
		        <p className="timestamp">{timeConverter(post.timestamp)}</p>
	        </div>
	        <p/>
      	</div>
    );
  }
}

export default Post;

