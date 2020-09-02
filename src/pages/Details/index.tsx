import React, { useState, useEffect } from 'react';
import {
  Header,
  CardImage,
  Container,
  ContentDetails,
  Title,
  About,
  ShortInformations,
  AboutDetails,
} from './styles'
import { Rating } from 'react-native-ratings';
import { ScrollView, View, TouchableOpacity, AsyncStorage } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import api from '../../services/api'

export interface IMovie {
  Title: string;
  Runtime: string;
  Year: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  imdbRating: string;
  Production: string;
  DVD: string;
}

const Details: React.FC = () => {
  const [movieDetails, setMovieDetails] = useState<IMovie>();
  const { goBack } = useNavigation();

  const _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('MovieId');
      if (value !== null) {
        await api.get('', {
          params: {
            i: value
          }
        }).then((response) => {
          const movieData = response.data;
          setMovieDetails(movieData);
        })
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    _retrieveData();
  }, []);


  return (
    <>
      <Header>
        <View style={{ flexDirection: "row", width: '100%' }}>
          <TouchableOpacity onPress={() => { goBack() }}>
            <Ionicons name="ios-arrow-round-back" size={32} color="white" style={{ marginLeft: 20 }} />
          </TouchableOpacity>
          <Title style={{ alignSelf: "center", marginLeft: 85, color: "#FFF" }} fontSize={16} >Detalhes da obra</Title>
        </View>
      </Header>
      <ScrollView>
        <Container >
          <CardImage source={{ uri: movieDetails?.Poster }} />
          <ContentDetails >
            <Title fontSize={14} >{movieDetails?.Title}</Title>
            <Rating
              type='star'
              readonly={true}
              startingValue={movieDetails?.imdbRating}
              ratingCount={10}
              imageSize={20}
            />
            <ShortInformations>{`${movieDetails?.Year} | ${movieDetails?.Runtime} | ${movieDetails?.Country}`}</ShortInformations>
            <About >
              <Title fontSize={24}>Sobre a obra</Title>
              <AboutDetails>{movieDetails?.Plot}</AboutDetails>
              <Title fontSize={14}>Idiomas disponíveis</Title>
              <AboutDetails>{movieDetails?.Language}</AboutDetails>
              <Title fontSize={14}>Escritores</Title>
              <AboutDetails>{movieDetails?.Writer}</AboutDetails>
              <Title fontSize={14} >Gênero</Title>
              <AboutDetails>{movieDetails?.Genre}</AboutDetails>
              <Title fontSize={14} >Atores</Title>
              <AboutDetails>{movieDetails?.Actors}</AboutDetails>
              <Title fontSize={14} >Prêmios</Title>
              <AboutDetails>{movieDetails?.Awards}</AboutDetails>
              <Title fontSize={14} >Diretor</Title>
              <AboutDetails>{movieDetails?.Director}</AboutDetails>
              {movieDetails?.Production ? <>
                <Title fontSize={14}>Produção</Title>
                <AboutDetails>{movieDetails?.Production}</AboutDetails>
              </> :
                <></>}
              {movieDetails?.DVD ? <>
                <Title fontSize={14}>DVD</Title>
                <AboutDetails>{movieDetails?.DVD}</AboutDetails>
              </> :
                <></>}
            </About>
          </ContentDetails>
        </Container>
      </ScrollView>
    </>
  );
}

export default Details;