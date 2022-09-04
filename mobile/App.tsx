import { ApolloProvider } from '@apollo/client';
import { apollotClient } from 'core/Apollo/apolloClient';
import { refreshAuth } from 'core/Auth';
import { RootNavigator } from 'navigation';
import React from 'react';
import FlashMessage from 'react-native-flash-message';
import 'react-native-gesture-handler';
import { ThemeProvider } from './src/ui';
// setI18nConfig();
refreshAuth();

const App = () => {
  return (
    <ApolloProvider client={apollotClient}>
      <ThemeProvider>
        <RootNavigator />
        <FlashMessage position="top" />
      </ThemeProvider>
    </ApolloProvider>
  );
};
export default App;
