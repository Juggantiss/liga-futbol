import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/index.css";
import App from "./pages/App";

// import ApolloClient from "apollo-boost";
// import { ApolloProvider } from "@apollo/react-hooks";

import { ApolloProvider } from "@apollo/react-hooks";
import client from "./apolloSetup";

// const client = new ApolloClient({
//   uri: "https://liga-che-gomez-api.herokuapp.com/graphql",
// });

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
