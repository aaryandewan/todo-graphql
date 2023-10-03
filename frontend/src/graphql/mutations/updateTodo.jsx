import { gql } from "@apollo/client";

const UPDATE_TODO = gql`
  mutation UpdateTodo(
    $id: ID!
    $title: String!
    $description: String!
    $completed: Boolean!
  ) {
    updateTodo(
      id: $id
      title: $title
      description: $description
      completed: $completed
    ) {
      id
      title
      description
      completed
    }
  }
`;

export default UPDATE_TODO;
