import React from 'react';
import { Text, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
import { StackNavigator } from './StackNavigator';
import { colors } from '../theme/appTheme';
import { TopTab } from './TopTab';
import IconTab from 'react-native-vector-icons/Ionicons';

export const Tabs = () => {
  return Platform.OS === 'ios' ? <TabsIOS /> : <TabsAndroid />
}

//Buttom tab for android 
const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
      sceneAnimationEnabled={true}
      barStyle={{
        backgroundColor: colors.yellow
      }}
      screenOptions={({ route }) => ({
        tabBarPressColor: colors.yellow,
        tabBarShowIcon: true,
        tabBarIndicatorStyle: {
          backgroundColor: colors.yellow
        },
        tabBarStyle: {
          shadowColor: 'transparent',
          elevation: 0,
        },
        tabBarIcon: ({ color }) => {

          let iconName: string = '';
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'bandage-outline';
              break;
            case 'TopTab':
              iconName = 'basketball-outline';
              break;
            case 'StackNavigator':
              iconName = 'bookmarks-outline';
              break;
          }
          return <Text style={{ color }} >
            <IconTab name={iconName} size={20} color={colors.primary_blue} ></IconTab>
          </Text>
        },
      })}
    >
      <BottomTabAndroid.Screen name="Tab1Screen" options={{ title: 'Tab 1' }} component={Tab1Screen} />
      <BottomTabAndroid.Screen name="TopTab" options={{ title: 'Tab 2' }} component={TopTab} />
      <BottomTabAndroid.Screen name="StackNavigator" options={{ title: 'Stack' }} component={StackNavigator} />
    </BottomTabAndroid.Navigator>
  );
}

//Buttom tab for ios
const BottomTabIOS = createBottomTabNavigator();

const TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator
      sceneContainerStyle={{
        backgroundColor: colors.white
      }}

      screenOptions={({ route }) => ({
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0
        },
        tabBarLabelStyle: {
          fontSize: 15
        },
        tabBarIcon: ({ color }) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'T1'
              break;
            case 'TopTab':
              iconName = 'T2'
              break;
            case 'StackNavigator':
              iconName = 'S1'
              break;
          }
          return <Text style={{ color }} > {iconName} </Text>
        },

      })}
    >
      <BottomTabIOS.Screen name="Tab1Screen" options={{ headerShown: false, title: 'Tab 1' }} component={Tab1Screen} />
      <BottomTabIOS.Screen name="TopTab" options={{ headerShown: false, title: 'Tab 2' }} component={TopTab} />
      <BottomTabIOS.Screen name="StackNavigator" options={{ headerShown: false, title: 'Stack' }} component={StackNavigator} />
    </BottomTabIOS.Navigator>
  );
} 