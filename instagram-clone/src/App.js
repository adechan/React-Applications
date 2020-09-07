import React, { useState, useEffect } from 'react';
import instagramText from './images/instagram.png';
import './App.css';
import Post from './Post';
import { db } from "./firebase";
import Modal from '@material-ui/core/Modal';
import { makeStyles, Button } from '@material-ui/core';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function App() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);


  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);


  useEffect(() => {
    
    // every time a post is added,this code will fire
    db.collection("posts").onSnapshot(snapshot =>  {
      setPosts(snapshot.docs.map(doc => ({
        id: doc.id,
        post: doc.data()
      })))
    });

  }, [])  // runs when the app component loads

  const signUp = () => {
    setOpen(true);
  }

  return (
    <div className="app">
       <Modal
        open={open}
        onClose={() => setOpen(false)}
        >
        <div style={modalStyle} className={classes.paper}>
          <h2>Text in a modal</h2>
        </div>
      </Modal>

      <div className="app__header">
        <img 
          className="app__headerImage"
          src={instagramText}
          alt=""
        />
      </div>

      <Button onClick={signUp}>Sign up</Button>

      {
        posts.map(({id, post}) => (
          //  because we added key, it will only re-render the last post
          <Post key={id} username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
        ))
      }  

    </div>
  );
}

export default App;
