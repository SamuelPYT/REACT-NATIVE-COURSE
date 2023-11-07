import React, { useEffect } from 'react'; 
import { Text, View } from 'react-native'; 

export const Tab2Screen = () => {
  useEffect(() => {
    console.log('llamado del efect ');
  }, []); 
  
  return (
    <View>
      <Text>Tab2Sreen</Text>
    </View>
  )
}