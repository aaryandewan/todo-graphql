import { gql } from "@apollo/client";

const GET_TODO = gql`
  query GetTodo($id: ID!) {
    todo(id: $id) {
      id
      title
      description
      completed
    }
  }
`;

export default GET_TODO;
