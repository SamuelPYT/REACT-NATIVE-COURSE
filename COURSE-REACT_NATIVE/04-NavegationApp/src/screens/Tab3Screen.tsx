import React, { useEffect } from 'react'; 
import { Text, View } from 'react-native'; 

export const Tab3Screen = () => {
  useEffect(() => {
    console.log('llamado del efect ');
  }, []); 
  
  return (
    <View>
      <Text>Tab3Sreen</Text>
    </View>
  )
}