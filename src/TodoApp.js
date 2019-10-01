import React, { useState, useEffect } from 'react';
import { Paper, AppBar, Toolbar, Grid, Typography } from "@material-ui/core/";
import TodoList from './TodoList';
import TodoForm from './TodoForm';
const TodoApp = () => {
    const initalTodos = [
        { id: 1, task: "Clean Fishtank", completed: false },
        { id: 2, task: "Wash Car", completed: true },
        { id: 3, task: "Call wife", completed: false },
    ];
    const [todos, setTodos] = useState(initalTodos);
    const addTodo = (newTodoText) => {
        setTodos([...todos, { id: 4, task: newTodoText, completed: false }]);
    }
    return (
        <div>
            <Paper
                style={{
                    padding: 0,
                    margin: 0,
                    height: "100vh",
                    backgroundColor: "fafafa"
                }}
                elevation={0}
            >
                <AppBar color='primary' position='static' style={{ height: "64px" }}>
                    <Toolbar>
                        <Typography color='inherit'>TODOs with Hooks</Typography>
                    </Toolbar>
                </AppBar>
                <Grid container justify="center" style={{ marginTop: "1rem" }}>
                    <Grid item xs={11} md={8} lg={4}>
                        <TodoForm addTodo={addTodo} />
                        <TodoList todos={todos} />
                    </Grid>

                </Grid>

            </Paper>
        </div>
    );
}

export default TodoApp;