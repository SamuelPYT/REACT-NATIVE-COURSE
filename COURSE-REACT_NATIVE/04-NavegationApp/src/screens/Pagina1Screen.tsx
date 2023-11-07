import React from 'react'
import { Text, View } from 'react-native';
import { colors, styles } from '../theme/appTheme';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ButtonNav } from '../components/ButtonNav';
import { ButtonNavInfo } from '../components/ButtonNavInfo';

interface Props extends NativeStackScreenProps<any, any> { }

export const Pagina1Screen = ({ navigation }: Props) => {

  return (
    <View style={styles.globalmargin}>
      <Text style={styles.titleArguments}> Navegar con argumentos </Text>
      <View style={{ flexDirection: 'row', marginBottom: 100 }}>
        <ButtonNavInfo iconName='accessibility-outline' addStyle={{ backgroundColor: colors.second_blue }} text='Pedro' action={() => navigation.navigate('PersonaScreen', { id: 1, nombre: 'Pedro' })} />
        <ButtonNavInfo iconName='woman-outline' addStyle={{ backgroundColor: colors.pink }} text='María' action={() => navigation.navigate('PersonaScreen', { id: 2, nombre: 'María' })} />
      </View>
      <ButtonNav text='Ir a página 2' addStyle={{ marginTop: 250 }} action={() => navigation.navigate('Pagina2Screen')} />
    </View>
  )
}