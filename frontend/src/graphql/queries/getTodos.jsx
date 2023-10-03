import { gql } from "@apollo/client";

const GET_TODOS = gql`
  query GetTodos {
    getTodos {
      id
      title
      description
      completed
    }
  }
`;

export default GET_TODOS;
