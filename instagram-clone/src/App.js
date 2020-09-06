import React, { useState } from 'react';
import instagramText from './images/instagram.png';
import './App.css';
import Post from './Post';

function App() {
  const [posts, setPosts] = useState([
    {
      username: "Ade",
      caption: "WOW it works!",
      imageUrl: "https://reactjs.org/logo-og.png"
    },
    {
      username: "Doggy",
      caption: "Great image!",
      imageUrl: "https://firebase.google.com/images/social.png"
    }
  ]);


  return (
    <div className="app">

      <div className="app__header">
        <img 
          className="app__headerImage"
          src={instagramText}
          alt=""
        />
      </div>

      {
        posts.map(post => (
          <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
        ))
      }  

    </div>
  );
}

export default App;
