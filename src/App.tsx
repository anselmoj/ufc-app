import React from 'react';

import {StatusBar} from 'react-native';
import {RootSiblingParent} from 'react-native-root-siblings';

import colors from '@styles/colors';

import Routes from './routes';

export default function App() {
  return (
    <RootSiblingParent>
      <StatusBar
        backgroundColor={colors.blue500}
        barStyle="light-content"
        translucent
      />
      <Routes />
    </RootSiblingParent>
  );
}
