import React from 'react'
import {connect} from 'react-redux'
import {changeSortMethod} from '../actions';

class SortMethod extends React.Component{
	render(){
		return(
			<div>
				<select className='select-sort-method' onChange={this.props.changeSortMethod}>
				<option className="select-sort-method-option" value="timestamp_asc">Date : Ascending</option>
				<option className="select-sort-method-option" value="timestamp_desc">Date : Descending</option>
				<option className="select-sort-method-option" value="votescore_asc">Votescore : Ascending</option>
				<option className="select-sort-method-option" value="votescore_desc">Votescore : Descending</option>
				<option className="select-sort-method-option" value="comments_asc">Comments Count: Ascending</option>
				<option className="select-sort-method-option" value="comments_desc">Comments Count : Descending</option>
				</select>
				<span className='sortMethodPlaceholder'>Order By</span>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
  return {
    sortMethod: state.sortMethod
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeSortMethod : (event) => {
      dispatch(changeSortMethod(event.target.value));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SortMethod);
