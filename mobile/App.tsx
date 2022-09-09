import { refreshAuth } from 'core/Auth';
import { RootNavigator } from 'navigation';
import React from 'react';
import 'react-native-gesture-handler';
import { ThemeProvider } from './src/ui';
import { Provider as PaperProvider } from 'react-native-paper';
refreshAuth();

const App = () => {
  return (

    <ThemeProvider>
      <PaperProvider>
        <RootNavigator />
      </PaperProvider>
    </ThemeProvider>

  );
};
export default App;
