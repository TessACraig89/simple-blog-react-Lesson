import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Post from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Post title={"Dark Engine"} author={"IDK"} body={"booooooooooooody"} comments={["comment1, comment2, comment3"]}/>,
  document.getElementById('root')
);
