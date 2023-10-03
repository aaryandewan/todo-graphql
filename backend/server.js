const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const connectDB = require("./config/db");
const typeDefs = require("./graphql/typeDefs/index");
const resolvers = require("./graphql/resolvers/todoResolvers");

const app = express();
const PORT = 4000;

// Connect to the MongoDB database
connectDB();

// Initialize Apollo Server
async function startServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({ req }),
  });
  await server.start();
  server.applyMiddleware({ app, path: "/graphql" });
  console.log(
    `GraphQL Playground available at http://localhost:${PORT}${server.graphqlPath}`
  );
}
startServer();

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
  // console.log(
  //   `GraphQL Playground available at http://localhost:${PORT}${server.graphqlPath}`
  // );
});
