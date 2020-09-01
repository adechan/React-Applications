import React, { useState } from 'react';
import './Todo.css';
import { List, ListItem, ListItemText, ListItemAvatar, Modal } from '@material-ui/core';
import db from './firebase';
import DeleteIcon from '@material-ui/icons/Delete';

// Created with rfce: react functional component with an export

// props: properties 
function Todo(props) {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    return (
        // Add <> and </> because you can't have siblings
        <>
            <Modal
                open={open}
                onClose={e => setOpen(false)}
            >
                <div>
                    <h1>open</h1>
                    <button onClick={e => setOpen(false)}></button>
                </div>
            </Modal>

            <List className="todo__list">
                <ListItem>
                    <ListItemAvatar>
                    </ListItemAvatar>
                    <ListItemText primary={props.todo} secondary="Dummy deadline"/>
                </ListItem>
                <button onClick={e => setOpen(true)}>Edit</button>
                <DeleteIcon className="icon" onClick={event => db.collections('todo').doc(props.todo.id).delete()} />
            </List>
        </>
    )
}

export default Todo
