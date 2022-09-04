import { ApolloClient, InMemoryCache } from '@apollo/client';


export const apollotClient = new ApolloClient({
    uri: 'https://api.spacex.land/graphql/',
    cache: new InMemoryCache(),
})