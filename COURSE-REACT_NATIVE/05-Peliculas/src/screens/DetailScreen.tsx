import React from 'react';
import { View, Image, StyleSheet, Dimensions, ScrollView, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/CustomNavigation';
import { COLORS_THEME } from '../theme/foundations/colors';
import { useMoviesDetails } from '../hooks/useMoviesDetails';
import { MovieDetails } from '../components/MovieDetails';

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> { };

const screenHeight = Dimensions.get('window').height;

export const DetailScreen = ({ route, navigation }: Props) => {

  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/original${movie.poster_path}`;

  const { isLoading, cast, MovieFull } = useMoviesDetails(movie.id);

  console.log({ isLoading });

  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <View style={styles.imageBorder} >
          <Image
            source={{
              uri
            }}
            style={styles.posterImage}
          />
        </View>
      </View>

      <View style={styles.marginContainer}>
        <Text style={styles.subtitle}>{movie.original_title}</Text>
        <Text style={styles.title}>{movie.title}</Text>
      </View>

      {
        isLoading
          ?
          <ActivityIndicator size={35} color={COLORS_THEME.primary_blue} style={{ marginTop: 20 }} />
          :
          <MovieDetails movieFull={MovieFull!} cast={cast} />
      }

      {/* Boton para cerrar */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon
          color={COLORS_THEME.primary_blue}
          name='arrow-back-outline'
          size={60}
        />
      </TouchableOpacity>

    </ScrollView>

  )
}

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: screenHeight * 0.7,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.9,
    shadowRadius: 3.84,
    elevation: 10,
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30
  },
  imageBorder: {
    flex: 1,
    overflow: 'hidden',
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30
  },
  posterImage: {
    flex: 1,
  },
  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS_THEME.primary_black
  },
  subtitle: {
    fontSize: 16,
    opacity: 0.8
  },
  backButton: {
    width: '50%',
    position: 'absolute',
    display: 'flex',
    marginLeft: 20,
    marginTop: 20
  }

});