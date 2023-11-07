import React from 'react'; 
import { Text, View } from 'react-native';

interface Props {
  children: JSX.Element | JSX.Element[]; 
}

export const GradientBackround = ({ children }: Props) => {
  return (
    <View style={{ flex: 1, backgroundColor: 'blue' }}>
      {children}
    </View>
  )
}