import { View, Text } from 'react-native';
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { styles } from '../theme/appTheme';
import { ButtonNav } from '../components/ButtonNav';

export default function AlbumsScreen() {

  const { logout, authState: { isLoggedIn } } = useContext(AuthContext);

  return (
    <View style={styles.globalmargin}>
      <Text style={styles.title}>Albums Screen</Text>

      {
        (isLoggedIn) && <ButtonNav text='logout' action={logout} />
      }
    </View>
  )
}