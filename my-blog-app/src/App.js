import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Comment from './Comment.js'

class Post extends Component {
  render() {
    return (
      <div className="App">
        <p>Title: {this.props.title}</p>
        <p>Author: {this.props.author}</p>
        <p>Body: {this.props.body}</p>
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
