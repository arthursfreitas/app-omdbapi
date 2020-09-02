import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import { Title } from './styles'
import CardListItem, { cardList } from '../CardListItem';
import api from '../../services/api';

export interface cardlistInterface {
  title?: string;
  param?: string;
  type?: string;
}

const CardList: React.FC<cardlistInterface> = ({ param, title, type }) => {
  const [cardList, setCardList] = useState([]);

  useEffect(() => {
    api.get('', {
      params: {
        s: param,
        type
      }
    }).then((response) => {
      const data = response.data;
      setCardList(data.Search);
    })
  }, [])
  return (
    <>
      <Title>{title}</Title>
      <ScrollView horizontal={true}>
        {cardList.map((card: cardList) => {
          return <CardListItem card={card} />
        })
        }
      </ScrollView>
    </>
  );
}

export default CardList;