import React, { Component } from 'react';
import logo from '../assets/images/logo.ico';
import '../assets/App.css';
import Post from './Post.js'
import {connect} from 'react-redux'
import {fetchCommentsByPost, addComment} from '../actions'
import upvoteIcon from '../assets/images/upvote.png'
import downvoteIcon from '../assets/images/downvote.png'
import {timeConverter} from '../utils/helpers.js' 
import CloseIcon from 'react-icons/lib/fa/close'
const uuidv1 = require('uuid/v1')

class PostDetails extends Component {

  state={
    comments:[],
    commentAuthor:'',
    commentMessage:'',
  }

  componentWillMount()
  {
     this.props.fetchCommentsByPost(this.props.post.id);
  }

  updateCommentAuthor = (event) => {
    this.setState({
      commentAuthor: event.target.value
      });
  }

  updateCommentMessage = (event) => {
    this.setState({
      commentMessage: event.target.value
      });
  }

  submitComment=(event)=>{
    const{commentAuthor,commentMessage} = this.state

    if (event.key === 'Enter' && commentAuthor.length>0 && commentMessage.length>0) {
      const data = {
      id: uuidv1(),
      timestamp: Date.now(),
      body: commentMessage,
      author: commentAuthor,
      parentId: this.props.post.id,
      voteScore: 0,
      deleted: false,
      parentDeleted: false
    }
    this.props.addComment(data)
    }
  }
  render() {
    const {post,comments} = this.props

    return (
      <div id="postDetails">
       <div className="closeIcon">
        <CloseIcon size={30} onClick={this.props.closePostDetailsModal}/>
       </div>
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
            <p className="timestamp">{timeConverter(post.timestamp)}</p>
            <p/>
            <p className="commentTitle">{post.commentCount} Comments</p>
            {comments && console.log('COMMENTS',comments)}
            {comments && comments.length>0 && comments.map((comment)=>(
              <div className="comments" key={comment.id}>
                <p className="commentAuthor">{comment.author}</p>
                <p className="commentBody">{comment.body}</p>
                <p className="commentVote">{comment.voteScore} votes</p>
                <img className="vote" src={upvoteIcon} alt="logo" />
                <img className="vote" src={downvoteIcon} alt="logo" />
              </div>
            ))}
            <p className="addCommentTitle">Add your comment here</p>
            <input type='text' className = "commentInput" placeholder="Author" onChange={this.updateCommentAuthor}/>
            <input type='text' className = "commentInput" placeholder="Message" onChange={this.updateCommentMessage} onKeyPress={this.submitComment}/>
            <button className='button'>Submit</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { 
    comments: state.comments
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCommentsByPost : (postID) => {
      dispatch(fetchCommentsByPost(postID));
    },
    addComment : (comment) => {
      dispatch(addComment(comment));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);