import React, { Component } from 'react';
import '../assets/App.css';
import EditComment from './EditComment.js'
import {connect} from 'react-redux'
import {fetchPostByID, fetchCommentsByPost, addComment, deleteComment} from '../actions'
import Upvote from 'react-icons/lib/fa/thumbs-o-up'
import Downvote from 'react-icons/lib/fa/thumbs-o-down'
import {timeConverter} from '../utils/helpers.js' 
import HomeIcon from 'react-icons/lib/fa/home'
import DeleteIcon from 'react-icons/lib/fa/close'
import EditIcon from 'react-icons/lib/fa/edit'
import {Link} from 'react-router-dom'
import {votePost, voteComment} from '../actions'
import Modal from 'react-modal'

const uuidv1 = require('uuid/v1')
var Scroll = require('react-scroll');
var scroll = Scroll.animateScroll;

class PostDetails extends Component {

  state={
    comments:[],
    commentAuthor:'',
    commentMessage:'',
    editCommandModalOpen: false,
    activeComment:[],
  }

  componentWillMount()
  {

    Modal.setAppElement('body');

    //if can get the post from state
    if(this.props.post){
      this.props.fetchCommentsByPost(this.props.post.id);   
    }else{
      this.props.fetchPostByID(this.props.params.postID)
      this.props.fetchCommentsByPost(this.props.params.postID)
    }
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

  submitComment=(event, postID)=>{
    const{commentAuthor,commentMessage} = this.state

    if (event.key === 'Enter' || event.type==='click'){
      if(commentAuthor.length<=0 || commentMessage.length<=0){
        window.alert('Comment author/message cannot be empty.')
      }else{
        const data = {
          id: uuidv1(),
          timestamp: Date.now(),
          body: commentMessage,
          author: commentAuthor,
          parentId: postID,
          voteScore: 0,
          deleted: false,
          parentDeleted: false
        }

        this.props.addComment(data)

        document.getElementById('commentAuthor').value= "" ;
        document.getElementById('commentMessage').value= "" ;
        document.getElementById('commentAuthor').focus();

        scroll.scrollToBottom();
        this.setState({
          commentMessage: '',
          commentAuthor:''
        });
      }
    }
  }

  upvotePost = (postID) => {
    const data = {
      option: 'upVote'
    }
    this.props.votePost(postID,data)
  } 

  downvotePost = (postID) => {
    const data = {
      option: 'downVote'
    }
    this.props.votePost(postID,data)
  } 

  upvoteComment = (commentID) => {
    const data = {
      option: 'upVote'
    }
    this.props.voteComment(commentID,data)
  } 

  downvoteComment = (commentID) => {
    const data = {
      option: 'downVote'
    }
    this.props.voteComment(commentID,data)
  }

  deleteComment = (commentID) => {
    var x = window.confirm('Confirm to delete comment?')

    if(x === true){
      this.props.deleteComment(commentID)
    }
  }

  openEditCommentModal = (comment) => {
    this.setState(() => ({
      editCommandModalOpen: true,
      activeComment: comment,
    }))
  }

  closeEditCommentModal = () =>{
    this.setState(() => ({
      editCommandModalOpen: false,
    }))
  }

  render() {

    const {editCommandModalOpen, activeComment} = this.state
    let {comments, posts} = this.props

    //if can get post from state
    if(this.props.post){
      posts = this.props.post
    }

    if(posts){
        return (
          <div id="postDetails">
             <div className="homeIcon">
              <span className="home"><Link to={"/"}><HomeIcon size={30}/>HOME</Link></span>
             </div>
             <div className="header">
                <span className="author">{posts.author}</span>
                <span className="content"> posted in </span>
                <span className="category"> {posts.category} </span>
              </div>
              <div className="body">
                  <h3 className="title">{posts.title}</h3>
                  <p className="description">{posts.body}</p>
                  <Upvote size="30" className="vote" onClick={()=>{this.upvotePost(posts.id)}}/>
                  <Downvote size="30" className="vote" onClick={()=>{this.downvotePost(posts.id)}}/>
                  <p className="votescore">{posts.voteScore} Votes</p>
                  <p className="timestamp">{timeConverter(posts.timestamp)}</p>
                  <p/>
                  <p className="commentTitle">{comments.length} Comments</p>
                  {comments && comments.length>0 && comments.map((comment)=>(
                    <div className="comments" key={comment.id}>
                      <DeleteIcon size={30} className="deleteIcon" onClick={()=>{this.deleteComment(comment.id)}}/>
                      <EditIcon size={30} className="editIcon" onClick={()=>{this.openEditCommentModal(comment)}}/>
                      <p className="commentAuthor">{comment.author}</p>
                      <p className="commentBody">{comment.body}</p>
                      <p className="commentVote">{comment.voteScore} votes</p>
                      <Upvote size="30" className="vote" onClick={()=>{this.upvoteComment(comment.id)}}/>
                      <Downvote size="30" className="vote" onClick={()=>{this.downvoteComment(comment.id)}}/>
                    </div>
                  ))}
                  <p className="addCommentTitle">Add your comment here</p>
                  <input type='text' className = "commentInput" placeholder="Author" id="commentAuthor" onChange={this.updateCommentAuthor}/>
                  <input type='text' className = "commentInput" placeholder="Message" id="commentMessage" onChange={this.updateCommentMessage} onKeyPress={(event)=>this.submitComment(event,posts.id)}/>
                  <button className='button' onClick={(event)=>this.submitComment(event,posts.id)}>Submit</button>
              </div>

              <Modal
                className='editCommentModal'
                overlayClassName='editCommentOverlay'
                isOpen={editCommandModalOpen}
                onRequestClose={this.closeEditCommentModal}
                contentLabel='Modal'>

                <EditComment key={activeComment.id} comment={activeComment} closeEditCommentModal={this.closeEditCommentModal}/>
              </Modal>
            </div>
        );}
    else{
      return(<h1>empty</h1>)
    }
  }
}

const mapStateToProps = (state) => {
  return { 
    comments: state.comments,
    posts: state.posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPostByID : (postID) => {
      dispatch(fetchPostByID(postID));
    },
    fetchCommentsByPost : (postID) => {
      dispatch(fetchCommentsByPost(postID));
    },
    addComment : (comment) => {
      dispatch(addComment(comment));
    },
    votePost : (postID, data) => {
      dispatch(votePost(postID,data));
    },
    voteComment : (commentID, data) => {
      dispatch(voteComment(commentID,data));
    },
    deleteComment : (commentID) => {
      dispatch(deleteComment(commentID));
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);