import React from 'react'
import { View, Text, Button } from 'react-native';
import { colors, styles } from '../theme/appTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ButtonNav } from '../components/ButtonNav';

interface Props extends NativeStackScreenProps<any, any> { };

export const Pagina3Screen = ({ navigation }: Props) => {
  return (
    <View style={styles.globalmargin}>
      <Text style={styles.title}> Pagina #3 </Text>

      <ButtonNav addStyle={{ backgroundColor: colors.primary_blue }} text='Home' action={() => navigation.popToTop() } /> 
    </View>
  )
}