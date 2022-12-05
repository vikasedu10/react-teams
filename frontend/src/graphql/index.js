import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: "http://localhost:9090/goengine",
    cache: new InMemoryCache(),
});
