import React, { Component } from 'react';
import upvoteIcon from '../assets/images/upvote.png'
import downvoteIcon from '../assets/images/downvote.png'
import '../assets/App.css';

class Post extends Component {
  render() {
    return (
        <div id="post" className="post">
	        <h3 className="title">Post Title</h3>
	        <span>By </span>
	        <span className="author">Author</span>
	        <p className="description">Post Description</p>

	        <img className="vote" src={upvoteIcon} alt="logo" />
			<img className="vote" src={downvoteIcon} alt="logo" />
	        <p className="votescore">1 Votes</p>
	        <p className="comments">1 comments</p>
	        <p className="timestamp">{new Date().toLocaleString()}</p>
      	</div>
    );
  }
}

export default Post;

