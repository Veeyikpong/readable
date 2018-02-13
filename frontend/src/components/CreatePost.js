import React from 'react';
import {connect} from 'react-redux'
import {createPost} from '../actions'
import DeleteIcon from 'react-icons/lib/fa/close'

const uuidv1 = require('uuid/v1')

class CreatePost extends React.Component{

	state={
		postAuthor:'',
		postTitle:'',
		postBody:'',
		postCategory:'',
	}

	updateAuthor = (event) => {
		console.log(event)
		this.setState({
			postAuthor: event.target.value
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

	updateCategory = (event) => {
		this.setState({
			postCategory: event.target.value
		});
	}

	createPost=()=>{
		const {postAuthor,postTitle,postBody,postCategory} = this.state
		const {closeCreatePostModal} = this.props

		let errorMessage = ''

		if(postAuthor.length<=0){
			errorMessage = errorMessage + 'Author cannot be empty.\n';
    }

  	if(postTitle.length<=0){
  		errorMessage = errorMessage + 'Post title cannot be empty.\n';
  	}

  	if(postBody.length<=0){
  		errorMessage = errorMessage + 'Post message cannot be empty.\n';
  	}

  	if(postCategory.length<=0){
  		errorMessage = errorMessage + 'Please select a category\n';
  	}

  	if(errorMessage === ''){
  		const data = {
				id: uuidv1(),
				timestamp: Date.now(),
				title: postTitle,
				body: postBody,
				author: postAuthor,
				category: postCategory,
			}

			this.props.createPost(data);

			window.alert("Post created successfully!");
			closeCreatePostModal();
    }else{
  		window.alert(errorMessage);
    }
	}

	render(){
		const {categories, closeCreatePostModal} = this.props

		return(
      <div id="createPost">
      	<DeleteIcon size={25} className="deleteIcon" onClick={()=>{closeCreatePostModal()}}/>
	    	<input type="text" placeholder="Author" onChange={this.updateAuthor}/>
	    	<input type="text" placeholder="Title" onChange={this.updateTitle}/>
	    	<input type="text" placeholder="Message" onChange={this.updateBody}/>
	    	<select onChange={(event)=>{this.updateCategory(event)}}>
					<option className="select-category-option" value="">Select a category</option>
					{categories && categories.length>0 && categories.map((category)=>(
						<option className="select-category-option" key={category.path} value={category.path}>{category.name}</option>
					))}
        </select>
	       <button className="button" onClick={()=>{this.createPost()}}>Create</button>
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
    createPost : (data) => {
    	dispatch(createPost(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost);
