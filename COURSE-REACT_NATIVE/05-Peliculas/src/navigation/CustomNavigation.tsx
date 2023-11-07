import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/HomeScreen';
import { DetailScreen } from '../screens/DetailScreen';
import { COLORS_THEME } from '../theme/foundations/colors';
import { Movie } from '../interfaces/MovieTypesInterface';

export type RootStackParams = {
  HomeScreen: undefined,
  DetailScreen: Movie,
}

//stack base que va a ser de tipo RootStackParams
const Stack = createNativeStackNavigator<RootStackParams>();

export const CustomNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />      
    </Stack.Navigator>
  );
}