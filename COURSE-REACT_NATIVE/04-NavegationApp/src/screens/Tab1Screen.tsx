import React, { useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { styles, colors } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import { ButtonIcon } from '../components/ButtonIcon';

export const Tab1Screen = () => {
  useEffect(() => {
    console.log('llamado del efect ');
  }, []);

  return (
    <View style={styles.globalmargin}>
      <Text style={styles.title}> Iconos </Text>

      <View style={{...localStyles.customContainer, marginBottom: 30}}>

        <View style={localStyles.container}>
          <Text>
            <ButtonIcon iconName='accessibility-outline' />
          </Text>
        </View>

        <View style={localStyles.container} >
          <Text>
            <ButtonIcon iconName='airplane-outline'/>
          </Text>
        </View>

        <View style={localStyles.container} >
          <Text>
            <ButtonIcon iconName='battery-full-outline'/>
          </Text>
      </View>
        </View>

      <View style={localStyles.customContainer}>
        <View style={localStyles.container}>
          <Text>
            <ButtonIcon iconName='bar-chart-outline'/>
          </Text>
        </View>

        <View style={localStyles.container} >
          <Text>
            <ButtonIcon iconName='beer-outline'/>
          </Text>
        </View>

        <View style={localStyles.container} >
          <Text>
            <ButtonIcon iconName='american-football-outline'/>
          </Text>
        </View>
      </View>
    </View>
  )
}


const localStyles = StyleSheet.create({
  customContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  container: {
    width: 100,
    height: 90,
    borderRadius: 10,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.primary_blue
  }
});