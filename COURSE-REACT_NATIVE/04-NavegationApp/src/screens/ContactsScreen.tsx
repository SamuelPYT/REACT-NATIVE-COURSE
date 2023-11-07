import { View, Text } from 'react-native';
import React, { useContext } from 'react';
import { styles } from '../theme/appTheme';
import { ButtonNav } from '../components/ButtonNav';
import { AuthContext } from '../context/AuthContext';

export default function ContactsScreen() {

  const { signIn, authState: {isLoggedIn} } = useContext(AuthContext);

  return (
    <View style={styles.globalmargin}>
      <Text style={styles.title}>Contacts Screen</Text>

      {
        (!isLoggedIn) && <ButtonNav text='SignIn' action={signIn} />
      }
    </View>
  )
}