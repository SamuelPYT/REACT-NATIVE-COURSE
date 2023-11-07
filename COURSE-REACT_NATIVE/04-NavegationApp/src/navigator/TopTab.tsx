import React from 'react';
import { Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ChatScreen from '../screens/ChatScreen';
import ContactsScreen from '../screens/ContactsScreen';
import AlbumsScreen from '../screens/AlbumsScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../theme/appTheme';
import IconTopTab from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

const TopTab = () => {

  const { top: paddingTop } = useSafeAreaInsets();

  return (
    <Tab.Navigator
      style={{ paddingTop }}
      sceneContainerStyle={{
        backgroundColor: colors.white,
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
            case 'Chats':
              iconName = 'chatbubbles-outline';
              break;
            case 'Contacts':
              iconName = 'id-card-outline';
              break;
            case 'Albums':
              iconName = 'image-outline';
              break;
          }
          return <Text style={{ color }} >
                  <IconTopTab name={iconName} size={20} color={colors.primary_blue}></IconTopTab>
                 </Text>
        },
      })}>

      <Tab.Screen name="Chats" component={ChatScreen} />
      <Tab.Screen name="Contacts" component={ContactsScreen} />
      <Tab.Screen name="Albums" component={AlbumsScreen} />
    </Tab.Navigator>
  );
}


export { TopTab }