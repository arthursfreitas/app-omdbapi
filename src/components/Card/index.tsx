import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import CardItem, { MoviesItem } from '../CardItem'
import { Title, CardSize } from './styles';
import api from '../../services/api'

const Card: React.FC = () => {
  const [movies, setMovies] = useState([]);

  async function getFeatureMovies() {
    const response = await api.get('',
      {
        params: {
          s: 'game'
        }
      });
    const moviesData = response.data;
    setMovies(moviesData.Search);
  }

  useEffect(() => {
    getFeatureMovies();
  });

  return (
    <>
      <Title>filmes em destaque</Title>
      <CardSize>
        <ScrollView horizontal={true}>
          {
            movies.map((movie: MoviesItem) => {
              return (<CardItem key={movie.imdbID} movie={movie} />)
            })
          }
        </ScrollView>
      </CardSize>
    </>
  );
}

export default Card;
