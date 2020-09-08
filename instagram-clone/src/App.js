import React, { useState, useEffect } from 'react';
import instagramText from './images/instagram.png';
import './App.css';
import Post from './Post';
import { db, auth } from "./firebase";
import Modal from '@material-ui/core/Modal';
import { makeStyles, Button, Input } from '@material-ui/core';

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

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [user, setUser] = useState(null);

  const [open, setOpen] = useState(false);
  const [openSignIn, setOpenSignIn] = useState(false);

  useEffect(() => {
    // listens for any single time when any 
    // authentification change happens
    // PERSISTENT on refresh: onAuthStateChanged
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // user has logged in...
        console.log(authUser);
        setUser(authUser);  // persistent on refresh!!
      }
      else {
        // user has logged out...
        setUser(null);
      }
    })

    return () => {
      // perform some cleanup actions
      unsubscribe();
    }

  }, [user, username]); // any time user or username changes, it refires the code


  useEffect(() => {
    
    // every time a post is added,this code will fire
    db.collection("posts").onSnapshot(snapshot =>  {
      setPosts(snapshot.docs.map(doc => ({
        id: doc.id,
        post: doc.data()
      })))
    });

  }, [])  // runs when the app component loads

  const signUpModal = () => {
    setOpen(true);
  }

  const signInModal = () => {
    setOpenSignIn(true);
  }

  const signUp = (event) => {

    // so it doesnt refresh the page
    event.preventDefault();

    auth
    .createUserWithEmailAndPassword(email, password)
    .then((authUser) => {
      // return it because it is from a promise
      return authUser.user.updateProfile({
        displayName: username
      })
    })
    .catch((error) => alert(error.message));

    setOpen(false);
  }

  const SignIn = (event) => {
    event.preventDefault();

    auth
    .signInWithEmailAndPassword(email, password)
    .catch((error) => alert(error.message));

    setOpenSignIn(false);
  }

  return (
    <div className="app">

       <Modal
        open={open}
        onClose={() => setOpen(false)}
        >
        <div style={modalStyle} className={classes.paper}>
          <form className="app__signup">
            <center>
              <img 
                className="app__headerImage"
                src={instagramText}
                alt=""
              />
            </center>

            <Input 
              placeholder="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <Input 
              placeholder="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input 
              placeholder="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button type="submit" onClick={signUp}>Sign Up</Button>
          </form>
        
        </div>
      </Modal>

      <Modal
        open={openSignIn}
        onClose={() => setOpenSignIn(false)}
        >
        <div style={modalStyle} className={classes.paper}>
          <form className="app__signup">
            <center>
              <img 
                className="app__headerImage"
                src={instagramText}
                alt=""
              />
            </center>

            <Input 
              placeholder="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input 
              placeholder="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button type="submit" onClick={SignIn}>Sign Up</Button>
          </form>
        
        </div>
      </Modal>

      <div className="app__header">
        <img 
          className="app__headerImage"
          src={instagramText}
          alt=""
        />
      </div>

      {user ? 
      (  // we have user -> Logout
         <Button onClick={() => auth.signOut()}>Logout</Button>
      ): // we dont have user -> Sign up
      (
        <div className="app__loginContainer">
          <Button onClick={signInModal}>Sign in</Button>

          <Button onClick={signUpModal}>Sign up</Button>
        </div>
      )}
      

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
