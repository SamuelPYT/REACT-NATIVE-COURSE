import React from 'react'; 
import { Text, TouchableOpacity, ViewStyle, StyleProp } from 'react-native'; 
import { styles } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons'; 

export interface PropsWithParamsNav {
  text: string; 
  action: () => void; 
  addStyle?: StyleProp<ViewStyle>; 
  iconName?: string; 
}

const ButtonNavInfo = ( { text, action, addStyle, iconName = 'add-outline' }: PropsWithParamsNav ) => {
  return (
    <TouchableOpacity style={[styles.bigButton, addStyle ]}
      onPress={() => action()}
    >
      <Text style={styles.bigButtonText}> { text } </Text>
      <Icon style={{ marginTop: 10 }} size={40} name={iconName}></Icon>
    </TouchableOpacity>
  )
}

export { ButtonNavInfo }