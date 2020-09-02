import React from 'react';
import { CardImage } from './styles'
import { TouchableOpacity, AsyncStorage } from 'react-native';
import { useNavigation } from "@react-navigation/native";

export interface MoviesItem {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

export interface MoviesProps {
  movie: MoviesItem;
}


const _storeId = async (id: string) => {
  try {
    await AsyncStorage.setItem('MovieId', id)
  } catch (error) {
    console.log(error);
  }
}

const CardItem: React.FC<MoviesProps> = ({ movie }) => {
  const { navigate } = useNavigation();
  return (
    <>
      <TouchableOpacity onPress={() => { navigate("Details"); _storeId(movie.imdbID); }} >
        <CardImage key={movie.imdbID} source={{ uri: movie.Poster }} />
      </TouchableOpacity >
    </>
  );
}

export default CardItem;