import React from 'react';
import {
  CardListImage,
  CardList
} from './styles';
import { TouchableOpacity, AsyncStorage } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export interface cardList {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

export interface cardListItem {
  card: cardList;
}

const _storeId = async (id: string) => {
  try {
    await AsyncStorage.setItem('MovieId', id)
  } catch (error) {
    console.log(error);
  }
}

const CardListItem: React.FC<cardListItem> = ({ card }) => {
  const { navigate } = useNavigation();

  return (
    <TouchableOpacity key={card.imdbID} onPress={() => { navigate("Details"); _storeId(card.imdbID); }}>
      <CardList>
        <CardListImage source={{ uri: card.Poster }} />
      </CardList>
    </TouchableOpacity>
  );
}

export default CardListItem;