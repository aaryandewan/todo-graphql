import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import ADD_TODO from "../graphql/mutations/addTodo";

const AddTodo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [addTodo] = useMutation(ADD_TODO, {
    refetchQueries: ["GetTodos"], // Refresh the list after adding
  }); //?

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addTodo({ variables: { title, description } });
      setTitle("");
      setDescription("");
    } catch (error) {
      console.error("Error adding todo:", error.message);
    }
  };

  return (
    <div>
      <h2>Add New Todo:</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default AddTodo;
