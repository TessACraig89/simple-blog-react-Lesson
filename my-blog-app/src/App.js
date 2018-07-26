import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Comment from './Comment.js'

// Using what you've just learned, amend your Post's render method to include reference to a variable, comments, that is equal to the return value of generating multiple <Comment /> elements. Make sure to pass in the comment body as an argument to each Comment component. Then render the comments some where inside the UI for a Post.


class Post extends Component {
  constructor(props) {
    super()
    this.state = {
      body: "Initial Comment"
    }
  }
  handleClick (e) {
      this.setState({
        body: this.state.body
      })
  }
  render() {
    /*map through(loop through) this components comment property's data array, for each i return a <Comment/> component element, passing in the comment body as an argument to each Comment component*/
    return (
      <div className="App">
        <p>Title: {this.props.title}</p>
        <p>Author: {this.props.author}</p>
        <p>Body: {this.state.body}</p>
        <p>Comments:</p>
        <ul>
          {this.props.comments.map(function(comment) {
             return <Comment body={comment}></Comment>
          })}
        </ul>
      </div>
    );
  }
}

export default Post;
