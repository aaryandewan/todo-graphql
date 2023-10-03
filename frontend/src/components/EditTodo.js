import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import UPDATE_TODO from "../graphql/mutations/updateTodo";
import GET_TODO from "../graphql/queries/getTodo";

const EditTodo = ({ todoId }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [updateTodo] = useMutation(UPDATE_TODO);

  // Fetch the todo using the GET_TODO query and populate the form.
  // Use Apollo's useQuery to fetch the todo by its ID and set the title and description in local state.

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateTodo({ variables: { id: todoId, title, description } });
      // Maybe navigate back to the list or show a success message
    } catch (error) {
      console.error("Error updating todo:", error.message);
    }
  };

  return (
    <div>
      <h2>Edit Todo:</h2>
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
        <button type="submit">Update Todo</button>
      </form>
    </div>
  );
};

export default EditTodo;
