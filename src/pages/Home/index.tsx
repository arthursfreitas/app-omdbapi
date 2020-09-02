import React, { useState, useEffect } from 'react';
import { ScrollView, TouchableOpacity, AsyncStorage, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import Card from '../../components/Card';
import CardList from '../../components/CardList';
import { Container, Title, MovieSearch, ContainerInput, HomeHeader } from './styles'
import api from '../../services/api';
import { CardImage } from '../../components/CardItem/styles';
import { useNavigation } from '@react-navigation/native';


const Home: React.FC = () => {
  const [searchInput, setSearchInput] = useState('');
  const [foundMovies, setFoundMovies] = useState([]);
  const { navigate } = useNavigation();

  const handleChangeText = (e: string) => {
    setSearchInput(e);
  }

  const _storeId = async (id: string) => {
    try {
      await AsyncStorage.setItem('MovieId', id)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    api.get('', {
      params: {
        s: searchInput
      }
    }).then((response) => {
      const moviesData = response.data;
      setFoundMovies(moviesData.Search);
    })

  }, [searchInput])

  return (
    <>
      <HomeHeader>
        <Title textColor={'#fff'} marginBottom={5} fontSize={'16'}>Mestres da Web</Title>
      </HomeHeader>
      <ScrollView>
        <Container>
          <Title textColor={'#333'} marginBottom={10} fontSize={'24'}>escolha seu filme</Title>
          <ContainerInput>
            <Ionicons name="ios-search" size={24} color="gray" style=
              {{
                flexDirection: "row",
                alignItems: "center",
                marginLeft: 10
              }} />
            <MovieSearch placeholder="Buscar..." onChangeText={handleChangeText} />
          </ContainerInput>
          {foundMovies ? <>
            <Title textColor={'#333'} marginBottom={10} fontSize={'14'}>Titulos encontrados</Title>
            {foundMovies.map((movie) => {
              return (
                <>
                  <Title textColor={'#333'} marginBottom={5} fontSize={'14'}>{movie.Title}</Title>
                  <TouchableOpacity style={{ flexDirection: "row" }} onPress={() => { navigate("Details"); _storeId(movie.imdbID); }} >
                    <CardImage key={movie.imdbID} source={{ uri: movie.Poster }} />
                  </TouchableOpacity >
                </>
              )
            })}</> : <>
              <Card />
              <CardList title={"series mais acessadas"} param={'face'} type={'series'} />
              <CardList title={"saga harry potter"} param={'harry potter'} />
            </>}
        </Container>
      </ScrollView>
    </>
  );
}

export default Home;