import styled from 'styled-components/native';

export interface TitleInterface {
  textColor: string;
  fontSize: string;
  marginBottom: number;
}

export const HomeHeader = styled.View`
  align-items:center;
  justify-content:flex-end;
  background-color:#111;
  height:64px;
  flex-direction:column;
`;

export const Container = styled.View`
  padding:10px 20px;
  display:flex;
  justify-content:space-evenly;
  background-color:#fff;
`;

export const Title = styled.Text<TitleInterface>`
  font-family: 'Montserrat_700Bold';
  font-size:${props => props.fontSize};
  margin-bottom:${props => props.marginBottom};
  color:${props => props.textColor};
`;

export const MovieSearch = styled.TextInput`
  flex-grow: 1;
  flex-shrink:1;
  flex-basis: 0%;
  padding:10px;
  border-radius:10px;
  height:50px;
  background-color:#F0F0F0;
  font-family: 'Montserrat_400Regular';
`;

export const ContainerInput = styled.View`
  flex-grow: 1;
  flex-shrink:1;
  flex-basis: 0%;
  margin-bottom:15px;
  flex-direction:row;
  align-items:center;
  border-radius:15px;
  background-color:#F0F0F0;
`;