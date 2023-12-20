import React from 'react'

import Fighter from '@pages/Fighters/List'
import FighterCreate from '@pages/Fighters/List/Create'
import FighterEdit from '@pages/Fighters/List/Edit'
import Home from '@pages/Home'
import Player from '@pages/Player/List'
import Team from '@pages/Team/List'
import Work from '@pages/Work/List'
import WorkCreate from '@pages/Work/List/Create'
import WorkEdit from '@pages/Work/List/Edit'

import { RouteProp } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

export type PublicStackParamList = {
  Home: undefined
  Team: undefined
  Player: undefined
  Fighter: undefined
  FighterCreate: undefined
  FighterEdit: {
    id: number
  }
  Work: undefined
  WorkCreate: undefined
  WorkEdit: {
    id: number
  }
}

export type FighterEditScreenRouteProp = RouteProp<
  PublicStackParamList,
  'FighterEdit'
>

export type WorkEditScreenRouteProp = RouteProp<
  PublicStackParamList,
  'WorkEdit'
>

const PublicStack = createNativeStackNavigator<PublicStackParamList>()

const PublicRoutes: React.FC = () => {
  return (
    <PublicStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <PublicStack.Screen component={Home} name="Home" />
      <PublicStack.Screen component={Team} name="Team" />
      <PublicStack.Screen component={Player} name="Player" />
      <PublicStack.Screen component={Fighter} name="Fighter" />
      <PublicStack.Screen component={FighterCreate} name="FighterCreate" />
      <PublicStack.Screen component={FighterEdit} name="FighterEdit" />
      <PublicStack.Screen component={Work} name="Work" />
      <PublicStack.Screen component={WorkCreate} name="WorkCreate" />
      <PublicStack.Screen component={WorkEdit} name="WorkEdit" />
    </PublicStack.Navigator>
  )
}

export default PublicRoutes
