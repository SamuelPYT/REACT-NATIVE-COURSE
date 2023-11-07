import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Cast } from '../interfaces/CreditsInterface';
import { COLORS_THEME } from '../theme/foundations/colors';

interface Props {
  actor: Cast;

}

export const CastItem = ({ actor }: Props) => {
  const uri = `https://image.tmdb.org/t/p/original${actor.profile_path}`;

  return (
    <View style={styles.container} >
      {
        (actor.profile_path) && (
          <Image
            source={{ uri }}
            style={{ width: 50, height: 50, borderRadius: 10 }}
          />
        ) 
      }

      <View style={styles.actorInfo}>
        <Text style={{ color: COLORS_THEME.primary_black, fontSize: 18, fontWeight: 'bold' }}>{actor.name}</Text>
        <Text style={{ color: COLORS_THEME.primary_grey, fontSize: 16, fontWeight: 'bold' }}>{actor.character}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS_THEME.primary_white,
    borderRadius: 10,
    height: 50,
    flexDirection: 'row',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.9,
    shadowRadius: 3.84,
    elevation: 10,
    marginHorizontal: 10,
    marginLeft: 20,
    paddingRight: 15,
  
  },
  actorInfo: {
    display: 'flex',
    justifyContent: 'center',
    marginLeft: 10

  }
});