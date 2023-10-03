const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Todo {
    id: ID!
    title: String!
    description: String
    completed: Boolean!
    createdAt: String!
  }

  type Query {
    getTodos: [Todo]!
    getTodo(id: ID!): Todo
  }

  type Mutation {
    addTodo(title: String!, description: String): Todo!
    updateTodo(
      id: ID!
      title: String
      description: String
      completed: Boolean
    ): Todo!
    deleteTodo(id: ID!): String!
  }
`;

module.exports = typeDefs;
