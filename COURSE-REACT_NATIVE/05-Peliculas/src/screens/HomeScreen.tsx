import React from 'react';
import { View, ActivityIndicator, StyleSheet, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Carousel from 'react-native-snap-carousel';
import { RootStackParams } from '../navigation/CustomNavigation';
import { useMovies } from '../hooks/useMovies';
import { COLORS_THEME } from '../theme/foundations/colors';
import { MoviePoster } from '../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { GradientBackround } from '../components/GradientBackround';

interface Props extends NativeStackScreenProps<RootStackParams, 'HomeScreen'> { };

const { width: windowWidth } = Dimensions.get('window');

export const HomeScreen = () => {
  const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();

  const { top } = useSafeAreaInsets();

  if (isLoading) {
    return (
      <View style={styles.activityIndicator} >
        <ActivityIndicator color={COLORS_THEME.primary_blue} size={90} />
      </View>
    )
  }

  return (
    <GradientBackround>
      <ScrollView>
        <View style={{ marginTop: top + 20 }}>

          {/* Carousel principal */}
          <View style={{ height: 440 }}>
            <Carousel
              data={nowPlaying}
              renderItem={({ item }) => <MoviePoster movie={item} />}
              sliderWidth={windowWidth}
              itemWidth={300}
              inactiveSlideOpacity={0.9}
            />
          </View>

          {/* peliculas populares */}
          <HorizontalSlider title='Popular' movies={popular} />
          <HorizontalSlider title='Top Rated' movies={topRated} />
          <HorizontalSlider title='Upcoming' movies={upcoming} />

        </View>
      </ScrollView>
    </GradientBackround>
  )
}

const styles = StyleSheet.create({
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});