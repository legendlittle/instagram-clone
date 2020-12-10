import React from 'react';
import './App.css';
import Post from './components/Post'

function App() {
  return (
    <div className="app">


      <div className="app__header">
        <img className="app__headerImage"
          src="https://1000logos.net/wp-content/uploads/2017/02/Instagram-Logo-768x480.png"
          alt=""
        />
      </div>

      <h1> Daily</h1>

      <Post />
      
      {/* Posts */}
      {/* Posts */}
    </div>
  );
}

export default App;
