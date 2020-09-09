import React, { useState } from 'react'
import { Button, withStyles } from '@material-ui/core';
import { storage, db } from "./firebase";
import firebase from "firebase";
import "./ImageUpload.css"

function ImageUpload({ username }) {

    const [caption, setCaption] = useState("");
    const [image, setImage] = useState(null);
    const [progress, setProgress] = useState(0);

    const handleChange = (e) => {
        // get the first file that you selected
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    }

    const handleUpload = () => {
        // get a reference to this photo (which means we are creating a 
        // new photo) and we are putting the image name that we grabbed into that image
        const uploadTask = storage.ref(`images/${image.name}`).put(image);

        // we listen to:
        // as its getting updated.. give me snapshots
        uploadTask.on(
            "state_changed",
            (snapshot) => { 
                // progress function...
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                setProgress(progress);
            },
            (error) => {    // error function
                console.log(error);
                alert(error.message);
            },
            () => {    // upload is completed
                // complete function...
                // once the image gets uploaded, it gives you a download URL
                storage
                .ref("images")
                .child(image.name)
                .getDownloadURL()   // get download link and we push it to DB
                .then(url => {
                    // post image inside db

                    db.collection("posts").add({
                        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                        caption: caption,
                        imageUrl: url,
                        username: username
                    });

                    setProgress(0);
                    setCaption("");
                    setImage(null);
                });
            }
        )
    }

    const UploadButton = withStyles({
        root: {
          backgroundColor: '#0089f7',
          "&:hover":{
            backgroundColor: '#0089f7'
          },
          borderRadius: 3,
          border: 0,
          color: 'white',
          height: 35,
          padding: '0 30px',
          marginTop: '5px',
          marginBottom: '10px'
        },
        label: {
          textTransform: 'capitalize',
        },
      })(Button);

    return (
        <div className="imageUpload">
            <progress className="imageUpload__progress" value={progress} max="100"/>
            <input tpye="text" placeholder="Enter a caption" value={caption} onChange={event => setCaption(event.target.value)}/>
            <input type="file" onChange={handleChange}/>
            <UploadButton onClick={handleUpload}> 
                Upload
            </UploadButton>
        </div>
    )
}

export default ImageUpload
