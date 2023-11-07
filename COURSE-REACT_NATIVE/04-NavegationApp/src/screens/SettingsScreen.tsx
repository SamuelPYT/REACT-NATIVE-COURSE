import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles, colors } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';
import Icon from 'react-native-vector-icons/Ionicons';
import { ButtonIcon } from '../components/ButtonIcon';


export const SettingsScreen = () => {

  const insets = useSafeAreaInsets();

  const { authState } = useContext(AuthContext);

  let isLoggedIn: string = '';
  if (authState.isLoggedIn === true) {
    isLoggedIn = 'true';
  } else {
    isLoggedIn = 'false';
  }

  return (
    <View style={{ ...styles.globalmargin, marginTop: insets.top + 20, alignItems: 'flex-start' }} >
      <Text style={styles.title}> Settings Screen</Text>

      <Text style={{ color: 'black', fontSize: 20, marginBottom: 30  }}> Nombre: {authState.userName}</Text>
      <Text style={{ color: 'black', fontSize: 20, marginBottom: 30  }}> Estado de logueo: {isLoggedIn}</Text>
      <Text style={{ color: 'black', fontSize: 20, marginBottom: 30 }}> Icono favorito: {authState.favoriteIcon}</Text>

      {
        (authState.favoriteIcon) &&
        <View style={{...localStyles.container, alignSelf: 'center'}}>
          <ButtonIcon iconName={authState.favoriteIcon}></ButtonIcon>
        </View>
      }
    </View>
  )  
}

const localStyles = StyleSheet.create({
  container: {
    width: 170,
    height: 150,
    borderRadius: 10,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.primary_blue
  }
});