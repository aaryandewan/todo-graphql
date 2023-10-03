import { gql } from "@apollo/client";

const GET_TODOS = gql`
  query GetTodos {
    todos {
      id
      title
      description
      completed
    }
  }
`;

export default GET_TODOS;
