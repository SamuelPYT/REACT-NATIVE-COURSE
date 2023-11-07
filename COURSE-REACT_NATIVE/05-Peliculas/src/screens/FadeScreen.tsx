import React from 'react';
import { View, Animated, Button } from 'react-native';
import { COLORS_THEME } from '../theme/foundations/colors';
import { useFades } from '../hooks/useFades';

export const FadeScreen = () => {
 
  const { opacity, fadeIn, fadeOut } = useFades(); 

  return (
    <View style={{ flex: 1, backgroundColor: 'grey', justifyContent: 'center', alignItems: 'center' }}>
      <Animated.View style={{
        backgroundColor: '#084F6A',
        width: 150,
        height: 150,
        borderColor: COLORS_THEME.primary_white,
        borderWidth: 10,
           opacity,
        marginBottom: 20
      }} />

      <Button title='FADE IN ' onPress={fadeIn} />
      <Button title='FADE OUT ' onPress={fadeOut} />
    </View>
  )
}