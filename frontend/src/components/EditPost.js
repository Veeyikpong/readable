import React from 'react';
import {editComment} from '../actions'
import {connect} from 'react-redux'
import DeleteIcon from 'react-icons/lib/fa/close'
import {editPost} from '../actions'

class EditPost extends React.Component{

	state={
		postTitle:'',
		postBody:'',
	}

	componentWillMount(){
		this.setState({
			postTitle: this.props.post.title,
			postBody: this.props.post.body
		});
	}

	updateTitle = (event) => {
		this.setState({
			postTitle: event.target.value
		});
	}

	updateBody = (event) => {
		this.setState({
			postBody: event.target.value
		});
	}

	savePost=(post)=>{
		const {postTitle, postBody} = this.state
		const {closeEditPostModal} = this.props

		const data = {
			title: postTitle,
			body: postBody,
		}

		this.props.editPost(post.id, data)

		window.alert("Post updated successfully!")

		closeEditPostModal();
	}

	render(){
		const {categories, post, closeEditPostModal} = this.props
		return(
	        <div id="editPost">
				<DeleteIcon size={25} className="deleteIcon" onClick={()=>{closeEditPostModal()}}/>
				<br/>
		    	<span className="title">
	        		Title
		    	</span>
		    	<input type="text" placeholder="Title" onChange={this.updateTitle} defaultValue={post.title}/>
		    	<span className="title">
	        		Message
		    	</span>
		    	<input type="text" placeholder="Message" onChange={this.updateBody} defaultValue={post.body}/>
		    	
		        <button className="button" onClick={()=>{this.savePost(post)}}>Save</button>
	      	</div>
		);
	}
}
 
const mapStateToProps = (state) => {
  return { 
    categories:state.categories,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  	editPost : (postID, data) => {
  		dispatch(editPost(postID,data))
  	}    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPost);