import React from "react";

import { Paper, AppBar, Toolbar, Grid, Typography } from "@material-ui/core/";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import useTodoState from "./hooks/useTodoState";

//const uuidv4 = require("uuid/v4");
const TodoApp = () => {
  const initialTodos = [{ id: 1, task: "Example todo", completed: false }];

  const { todos, addTodo, removeTodo, toggleTodo, editTodo } = useTodoState(
    initialTodos
  );

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
        <AppBar color="primary" position="static" style={{ height: "64px" }}>
          <Toolbar>
            <Typography color="inherit">TODOs with Hooks</Typography>
          </Toolbar>
        </AppBar>
        <Grid container justify="center" style={{ marginTop: "1rem" }}>
          <Grid item xs={11} md={8} lg={4}>
            <TodoForm addTodo={addTodo} />
            <TodoList
              todos={todos}
              removeTodo={removeTodo}
              toggleTodo={toggleTodo}
              editTodo={editTodo}
            />
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default TodoApp;
