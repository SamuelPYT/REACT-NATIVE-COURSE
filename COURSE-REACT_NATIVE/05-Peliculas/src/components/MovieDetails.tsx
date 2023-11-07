import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { MovieFull } from '../interfaces/MovieTypesInterface';
import { Cast } from '../interfaces/CreditsInterface';
import currencyFormatter from 'currency-formatter';
import Icon from 'react-native-vector-icons/Ionicons';
import { COLORS_THEME } from '../theme/foundations/colors';
import { CastItem } from './CastItem';

interface Props {
  movieFull: MovieFull;
  cast: Cast[];
}

export const MovieDetails = ({ movieFull, cast }: Props) => {
  return (
    <>
      {/* Detalles */}
      <View style={{ marginHorizontal: 20 }}>
        <View style={{ flexDirection: 'row' }}>
          <Icon name='star-outline' size={16} />

          <Text style={{ color: COLORS_THEME.primary_grey }}> {movieFull.vote_average} </Text>
          <Text style={{ marginLeft: 5, color: COLORS_THEME.primary_grey }}>
            - {movieFull.genres.map(g => g.name).join(', ')}
          </Text>
        </View>

        {/* Historia */}
        <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold', color: COLORS_THEME.primary_black }}>
          Historia
        </Text>

        <Text style={{ fontSize: 17 }} >{movieFull.overview}</Text>

        {/* Presupuesto */}
        <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold', color: COLORS_THEME.primary_black }}>
          Presupuesto
        </Text>

        <View style={{ flexDirection: 'row' }}>
          <Text style={{ fontSize: 18, color: COLORS_THEME.primary_black }} >{currencyFormatter.format(movieFull.budget, { code: 'USD' })}</Text>
        </View>

      </View>

      {/* Casting */}
      <View style={{ marginTop: 10, marginBottom: 100 }} >
        <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold', color: COLORS_THEME.primary_black, marginHorizontal: 20 }}>
          Elenco
        </Text>

        <FlatList
          data={cast}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <CastItem actor={item} />}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{ marginTop: 10, height: 80 }}
        />
      </View>


    </>
  )
}