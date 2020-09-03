import React, { useState } from 'react';
import './Todo.css';
import { List, ListItem, ListItemText, ListItemAvatar, Modal, makeStyles, Button } from '@material-ui/core';
import db from './firebase';
import DeleteIcon from '@material-ui/icons/Delete';

// Created with rfce: react functional component with an export

// That's how you stylize Material UI
const useStyles = makeStyles((theme) => ({
    paper: {
        position: "absolute",
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: "2px solid #000",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

// props: properties 
function Todo(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState();

    const handleOpen = () => {
        setOpen(true);
    };

    const updateTodo = () => {
        // Update the todo with the new input text

        db.collection('todos').doc(props.todo.id).set({
            todo: input
        }, {merge: true}); // prevents you from overwriting what is already in there
        
        setOpen(false);
    }

    const deleteTodo = (event) => {
        console.log(props.todo.id);

        db.collection('todos').doc(props.todo.id).delete()
    }

    return (
        // Add <> and </> because you can't have siblings
        <>
            <Modal
                open={open}
                onClose={e => setOpen(false)}
            >
                <div className={classes.paper}>
                    <h1>open</h1>
                    <input placeholder={props.todo.todo} value={input} onChange={event => setInput(event.target.value)}/>
                    <Button onClick={updateTodo}>Update Todo</Button>
                </div>
            </Modal>

            <List className="todo__list">
                <ListItem>
                    <ListItemAvatar>
                    </ListItemAvatar>
                    <ListItemText primary={props.todo.todo} secondary="Dummy deadline"/>
                </ListItem>
                <Button onClick={e => setOpen(true)}>Edit</Button>
                <DeleteIcon className="icon" onClick={deleteTodo} />
            </List>
        </>
    )
}

export default Todo
