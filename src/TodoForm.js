import React, { useState } from 'react'
import { Paper, Typography, TextField } from "@material-ui/core/";
import useInputState from './hooks/useInputState';
const TodoForm = ({ addTodo }) => { //grab addTodo from props
    const [value, handleChange, reset] = useInputState("");
    return (
        <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
            <form onSubmit={(e) => {
                e.preventDefault();
                addTodo(value);
                reset();
            }}
            >
                <TextField
                    value={value}
                    onChange={handleChange}
                    label="Add New Todo"
                    margin="normal"
                    fullWidth
                />
            </form>
        </Paper>
    );
}

export default TodoForm;