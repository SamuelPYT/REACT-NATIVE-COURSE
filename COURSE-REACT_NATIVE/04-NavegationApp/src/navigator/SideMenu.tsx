import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { SettingsScreen } from '../screens/SettingsScreen';
import { DrawerContentComponentProps, DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import { Tabs } from './Tabs';
import { colors, styles } from '../theme/appTheme';
import IconNav from 'react-native-vector-icons/Ionicons';


const Drawer = createDrawerNavigator();

export const SideMenu = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <IntMenu {...props} />}
    >
      <Drawer.Screen name="Tabs" component={Tabs} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

const IntMenu = ({ navigation }: DrawerContentComponentProps) => {

  return (
    <DrawerContentScrollView>
      {/* Image avatar container */}
      <View style={styles.avatarContainer} >
        <Image
          source={{
            uri: 'https://www.researchgate.net/publication/315108532/figure/fig1/AS:472492935520261@1489662502634/Figura-2-Avatar-que-aparece-por-defecto-en-Facebook.png'
          }}
          style={styles.avatar}
        />
      </View>

      {/* Menu options */}
      <View style={styles.menuContainer} >

          <TouchableOpacity
            style={[styles.menuBtn, { flexDirection: 'row' }]}
            onPress={() => navigation.navigate('Tabs')}
          >
            <IconNav name='navigate-outline' size={30} color={colors.primary_blue} />
            <Text style={styles.menuText} > Navegación </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.menuBtn, { flexDirection: 'row' }]}
            onPress={() => navigation.navigate('SettingsScreen')}
          >
            <IconNav name='cog-outline' size={30} color={colors.primary_blue} />
            <Text style={styles.menuText} > Opciones </Text>
          </TouchableOpacity>
      </View>

    </DrawerContentScrollView>
  );
} 