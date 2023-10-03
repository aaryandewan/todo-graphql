import { gql } from "@apollo/client";

const ADD_TODO = gql`
  mutation AddTodo($title: String!, $description: String!) {
    addTodo(title: $title, description: $description) {
      id
      title
      description
      completed
    }
  }
`;

export default ADD_TODO;
