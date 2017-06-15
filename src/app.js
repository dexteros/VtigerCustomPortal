import React from 'react';
import { StackNavigator } from 'react-navigation';
import HomeView from './HomeView';

export const app = StackNavigator({
  Home: { screen: HomeView },
});