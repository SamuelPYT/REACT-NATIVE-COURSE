import React from 'react'; 
import { Text, TouchableOpacity, StyleProp, ViewStyle, StyleSheet } from 'react-native'; 
import { colors } from '../theme/appTheme';

export interface Props {
  text: string;
  addStyle?: StyleProp<ViewStyle>; 
  action: () => void;
}

const ButtonNav = ( { text, addStyle, action }: Props ) => {
  return (
      <TouchableOpacity
        style={[styles.buttonsNavigation, addStyle]}
        onPress={() => action()}
      >
        <Text style={{ color: colors.white }} >{ text }</Text>
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonsNavigation: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 140,
    height: 50,
    backgroundColor: colors.primary_blue,
    borderRadius: 40,
  }, 
});

export { ButtonNav }