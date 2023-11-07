import React from 'react'; 
import { View, Text, FlatList } from 'react-native'; 
import { MoviePoster } from './MoviePoster';
import { Movie } from '../interfaces/MovieTypesInterface';
import { COLORS_THEME } from '../theme/foundations/colors';

interface Props {
  title?: string;
  movies: Movie[];
}

export const HorizontalSlider = ({ title, movies }: Props) => {

  return (
    <View style={{ height: (title) ? 270 : 220 }}>
      {
        (title) && <Text style={{ fontSize: 30, fontWeight: 'bold', marginLeft: 10, marginBottom: 8, color: COLORS_THEME.primary_black }}>{title}</Text>
      }
      <FlatList
        data={movies}
        renderItem={({ item }) => <MoviePoster movie={item} width={140} height={200} />}
        horizontal={true}
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
      />

    </View>
  )
}