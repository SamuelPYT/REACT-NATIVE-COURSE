import React from 'react'
import { View, Text } from 'react-native';
import { colors, styles } from '../theme/appTheme';
import { RootStackParams } from '../navigator/StackNavigator';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ButtonNav } from '../components/ButtonNav';
import { ButtonNavInfo } from '../components/ButtonNavInfo';

interface Props extends NativeStackScreenProps<RootStackParams, 'Pagina2Screen'> { };

export const Pagina2Screen = ({ navigation }: Props) => {
  return (
    <View style={styles.globalmargin}>
      <Text style={styles.title}> Pagina #2 </Text>

      <ButtonNavInfo addStyle={{ backgroundColor: colors.second_blue }} text='Personas' action={() => navigation.navigate('PersonaScreen', { id: 0, nombre: 'info' })}/> 
      <ButtonNav addStyle={{ marginTop: 350 }} text='Ir a página 3' action={() => navigation.navigate('Pagina3Screen') } />

    </View>
  )
}


