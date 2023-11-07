import React from 'react'; 
import { View, Text } from 'react-native'; 
import { useState, useEffect } from 'react';
import movieDB from '../api/MovieDB';
import { MovieFull } from '../interfaces/MovieTypesInterface';
import { Cast, CredistResponse } from '../interfaces/CreditsInterface';

interface MovieDetails {
  isLoading: boolean;
  MovieFull?: MovieFull;  
  cast: Cast[]; 
}

export const useMoviesDetails = (movieId: number) => {
  const [state, setState] = useState<MovieDetails>({
    isLoading: true,
    MovieFull: undefined,
    cast: [] 
  }); 
  
  const getMovieDetails = async () => {
    const MovieDetailsPromise = movieDB.get<MovieFull>(`${movieId}`); 
    const CastPromise = movieDB.get<CredistResponse>(`${movieId}/credits`); 
    
    const [MovieDetailsResp, castDetailsResp] = await Promise.all([ MovieDetailsPromise, CastPromise ]); 
  
    setState({
      isLoading: false,
      MovieFull: MovieDetailsResp.data,
      cast: castDetailsResp.data.cast
    }); 
  }

  useEffect(() => {
    getMovieDetails(); 
  }, []); 
  
  return {
    ...state  
  }

}