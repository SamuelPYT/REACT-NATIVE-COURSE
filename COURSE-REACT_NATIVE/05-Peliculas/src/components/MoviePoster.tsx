import { View, Image, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import React from 'react'
import { Movie } from '../interfaces/MovieTypesInterface'
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface Props {
  movie: Movie;
  height?: number; 
  width?: number;
}

export const MoviePoster = ({ movie, height = 420, width = 300 }: Props ) => {

  const uri = `https://image.tmdb.org/t/p/original${movie.poster_path}`;

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <TouchableOpacity style={{ width, height, marginHorizontal: 8 }} activeOpacity={0.8} onPress={() => navigation.navigate('DetailScreen', movie) }>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri }}/>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 18,
  },
  imageContainer: {
    flex: 1,
    borderRadius: 18,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.9,
    shadowRadius: 3.84,
    elevation: 10
  }
});