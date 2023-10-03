import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

// URI for your GraphQL server
const URI = "http://localhost:4000/graphql";

const httpLink = new HttpLink({
  uri: URI,
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;
