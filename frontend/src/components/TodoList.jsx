import React from "react";
import { useQuery } from "@apollo/client";
import GET_TODOS from "../graphql/queries/getTodos";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { loading, error, data } = useQuery(GET_TODOS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Your Todos:</h2>
      <ul>
        {data && data.getTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
