import React from 'react';
import { Paper, List, Divider, ListItem, Typography, ListItemText, Checkbox, ListItemSecondaryAction, IconButton } from "@material-ui/core/";
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
const Todo = ({ task, completed }) => {
    return (
        <ListItem>
            <Checkbox checked={completed} />
            <ListItemText style={{ textDecoration: completed ? "line-through" : "none" }}>
                {task}
            </ListItemText>
            <ListItemSecondaryAction>
                <IconButton>
                    <EditIcon aria-label="Edit" />
                </IconButton>
                <IconButton>
                    <DeleteIcon aria-label="Delete" />
                </IconButton>

            </ListItemSecondaryAction>
        </ListItem>
    );
}

export default Todo;