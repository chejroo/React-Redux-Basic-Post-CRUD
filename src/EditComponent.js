
import React, { Component } from 'react';
import { connect } from 'react-redux';

class EditComponent extends Component {
    handleEdit = (e) => {
        e.preventDefault();
        const newTitle = this.getTitle.value;
        const newMessage = this.getMessage.value;
        const data = {
            newTitle,
            newMessage
        }
        this.props.dispatch({type : 'UPDATE', id : this.props.post.id, data: data});
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleEdit}>
                    <input required type="text" ref = {(input) => this.getTitle = input} defaultValue = {this.props.post.title} placeholder = "Post title" /> <br /><br />
                    <textarea required rows="5" cols="30" ref={(input) => this.getMessage = input} defaultValue={this.props.post.message} placeholder="Post message"/> <br /><br />
                    <button> Update </button>
                </form>
            </div>
        );
    }
}

export default connect()(EditComponent)