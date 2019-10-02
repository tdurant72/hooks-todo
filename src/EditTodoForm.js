import React from "react";
import { TextField } from "@material-ui/core/";
import useInputState from "./hooks/useInputState";

const EditTodoForm = ({ id, task, toggleEditForm, editTodo }) => {
  const [value, handleChange, reset] = useInputState(task);

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        editTodo(id, value);
        reset();
        toggleEditForm();
      }}
      style={{ marginLeft: "1rem", width: "50%" }}
    >
      <TextField
        value={value}
        onChange={handleChange}
        reset={reset}
        fullWidth
        autoFocus
      />
    </form>
  );
};

export default EditTodoForm;
