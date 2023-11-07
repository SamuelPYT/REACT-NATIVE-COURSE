import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { RootStackParams } from '../navigator/StackNavigator';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';

interface Props extends NativeStackScreenProps<RootStackParams, 'PersonaScreen'> { };

export const PersonaScreen = ({ navigation, route }: Props) => {

  const { changueUsername } = useContext(AuthContext); 


  const params = route.params;

  useEffect(() => {
    if (params.nombre === 'info' && params.id === 0) {
      let titleParams = 'Persona Screen';
      navigation.setOptions({
        title: titleParams
      })
    } else {
      let titleParams = params.nombre;
      navigation.setOptions({
        title: titleParams
      })
    }
  }, [])
  
  useEffect(() => {
      changueUsername(params.nombre); 
  }, []); 
  
  return (
    <View style={styles.globalmargin}>
      {
        (route.params.id === 0 && route.params.nombre === 'info')
          ?
          <View>
            <Text> Estás en la página de personas </Text>
          </View>
          :
          <Text style={styles.bodyJson}>
            {
              JSON.stringify(params, null, 3)
            }
          </Text>
      }
    </View>
  )
}
