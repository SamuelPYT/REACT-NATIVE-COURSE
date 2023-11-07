import { createDrawerNavigator } from '@react-navigation/drawer';
import { SettingsScreen } from '../screens/SettingsScreen';
import { StackNavigator } from './StackNavigator';
import { useWindowDimensions } from 'react-native';

const Drawer = createDrawerNavigator();

const DrawerMenuBasic = () => {
  const { width } = useWindowDimensions(); 
  
  return (
    <Drawer.Navigator
    >
      <Drawer.Screen name="StackNavigator" options={ { title: 'Home' } } component={StackNavigator} />
      <Drawer.Screen name="SettingsScreen" options={ { title: 'Settings' } } component={SettingsScreen} />
    </Drawer.Navigator>
  );
}


export { DrawerMenuBasic }