import React, { Component } from 'react';
import { Paper, List, Divider, ListItem, Typography, ListItemText } from "@material-ui/core/";
import Todo from './Todo';
const TodoList = (props) => {
    return (
        <Paper>
            <List>
                {props.todos.map((todo) => (
                    <div key={todo.id}>
                        <Todo task={todo.task} completed={todo.completed}
                            key={todo.id} />
                        <Divider />
                    </div>
                ))}
            </List>
        </Paper>
    );
}

export default TodoList;