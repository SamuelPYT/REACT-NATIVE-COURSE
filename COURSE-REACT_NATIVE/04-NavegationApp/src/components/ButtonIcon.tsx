import React from 'react';
import { TouchableOpacity, ViewStyle, StyleProp } from 'react-native';
import { useContext } from 'react';
import { colors } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../context/AuthContext';

interface Props {
  iconName: string; 
  addStyle?: StyleProp<ViewStyle>; 
}

const ButtonIcon = ({ iconName, addStyle }: Props )  => {
  const { changeFavIcon } = useContext(AuthContext); 

  return (
    <TouchableOpacity 
      onPress={() => changeFavIcon(iconName)}
    >
      <Icon name={iconName} size={50} color={colors.primary_blue} />
    </TouchableOpacity>
  )
}

export { ButtonIcon }