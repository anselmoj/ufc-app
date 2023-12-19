import React from 'react';

import Fighter from '@pages/Fighters/List';
import FighterCreate from '@pages/Fighters/List/Create';
import FighterEdit from '@pages/Fighters/List/Edit';
import Home from '@pages/Home';
import Player from '@pages/Player/List';
import Team from '@pages/Team/List';
import {RouteProp} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export type PublicStackParamList = {
  Home: undefined;
  Team: undefined;
  Player: undefined;
  Fighter: undefined;
  FighterCreate: undefined;
  FighterEdit: {
    id: number;
  };
};

export type FighterEditScreenRouteProp = RouteProp<
  PublicStackParamList,
  'FighterEdit'
>;

const PublicStack = createNativeStackNavigator<PublicStackParamList>();

const PublicRoutes: React.FC = () => {
  return (
    <PublicStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <PublicStack.Screen component={Home} name="Home" />
      <PublicStack.Screen component={Team} name="Team" />
      <PublicStack.Screen component={Player} name="Player" />
      <PublicStack.Screen component={Fighter} name="Fighter" />
      <PublicStack.Screen component={FighterCreate} name="FighterCreate" />
      <PublicStack.Screen component={FighterEdit} name="FighterEdit" />
    </PublicStack.Navigator>
  );
};

export default PublicRoutes;
