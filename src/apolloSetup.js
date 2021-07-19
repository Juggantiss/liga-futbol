// import {
//   ApolloClient,
//   HttpLink,
//   InMemoryCache,
//   split,
// } from 'apollo-client-preset';
import { ApolloClient, HttpLink, InMemoryCache, split } from 'apollo-boost'
// import { setContext } from 'apollo-link-context';

// Subscription dependencies
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';

const API_URL = "https://liga-che-gomez-api.herokuapp.com/graphql"
const WS_API_URL = "wss://liga-che-gomez-api.herokuapp.com/graphql"

// Subscriptions config
const wsLink = new WebSocketLink({
  uri: WS_API_URL,
  options: {
    reconnect: true,
  },
});

const httpLink = new HttpLink({
  uri: API_URL,
});

const link = split(
  // split based on operation type
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === 'OperationDefinition' && operation === 'subscription';
  },
  wsLink,
  httpLink
);

export default new ApolloClient({
  link,
  cache: new InMemoryCache(),
});
