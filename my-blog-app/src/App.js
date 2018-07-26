import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Post extends Component {
  render() {
    return (
      <div className="App">
        <p>Title: {this.props.title}</p>
        <p>Author: {this.props.author}</p>
        <p>Body: {this.props.body}</p>
        <p>Comments: {this.props.comments}</p>
      </div>
    );
  }
}

export default Post;
