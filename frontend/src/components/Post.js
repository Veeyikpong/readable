import React, { Component } from 'react';
import upvoteIcon from '../assets/images/upvote.png'
import downvoteIcon from '../assets/images/downvote.png'
import '../assets/App.css';

class Post extends Component {
  render() {
    return (
        <div id="post" class="post">
	        <h3 class="title">Post Title</h3>
	        <span>By </span>
	        <span class="author">Author</span>
	        <p class="description">Post Description</p>

	        <img className="vote" src={upvoteIcon} alt="logo" />
			<img className="vote" src={downvoteIcon} alt="logo" />
	        <p class="votescore">1 Votes</p>
	        <p class="comments">1 comments</p>
	        <p class="timestamp">{new Date().toLocaleString()}</p>
      	</div>
    );
  }
}

export default Post;

