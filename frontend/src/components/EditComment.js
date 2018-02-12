import React from 'react';
import {editComment} from '../actions'
import {connect} from 'react-redux'
import DeleteIcon from 'react-icons/lib/fa/close'

class EditComment extends React.Component{

	state={
		commentMessage:'',
	}

	componentWillMount(){
		this.setState({
			commentMessage: this.props.comment.body,
		});
	}

	updateCommentMessage = (event) => {
		this.setState({
			commentMessage: event.target.value
		});
	}

	saveComment=()=>{
		const {commentMessage} = this.state
		const {comment,closeEditCommentModal} = this.props

  		if(commentMessage.length<=0){
        	window.alert('Comment message cannot be empty.')
      	}
      	else{
      		const data = {
				timestamp: Date.now(),
				body: commentMessage,
			}

			this.props.editComment(comment.id, data)

			window.alert("Comment updated successfully!")

			closeEditCommentModal();
      	}
	}

	render(){
		const {comment, closeEditCommentModal} = this.props

		return(
			<div id="editComment">
				<DeleteIcon size={25} className="deleteIcon" onClick={()=>{closeEditCommentModal()}}/>
				<br/>
				<p className="author">Author: {comment.author}</p>
				<input type='text' className = "commentInput" defaultValue={this.props.comment.body} id="commentMessage" onChange={this.updateCommentMessage}/>
				<br/>
				<button className="button" onClick={()=>{this.saveComment()}}>Save</button>			
			</div>
		);
	}
}
 

const mapDispatchToProps = (dispatch) => {
  return {
    editComment : (commentID, data) => {
      dispatch(editComment(commentID, data));
  	},
  }
}

export default connect(null, mapDispatchToProps)(EditComment);