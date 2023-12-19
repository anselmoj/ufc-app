import React from 'react';

import {PersistGate} from 'redux-persist/integration/react';

import {Provider} from 'react-redux';

import {NavigationContainer} from '@react-navigation/native';
import {persistStore} from 'redux-persist';

import App from './App';
import {store} from './store';

const Root: React.FC = () => {
  const persistor = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <App />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default Root;
