import styled from 'styled-components/native'

export interface TitleInterface {
  fontSize?: number;
  fontFamily?: string;
}


export const Header = styled.View`
  align-items:center;
  justify-content:flex-end;
  background-color:#111;
  height:64px;
  flex-direction:column;
`;

export const Title = styled.Text<TitleInterface>`
  font-family: 'Montserrat_700Bold';
  margin: 5px 0px 5px 0px;
  font-size:${props => props.fontSize};
`;

export const Container = styled.View`
  background-color:#111;
`;

export const CardImage = styled.Image`
  align-self:center;
  flex-direction:row;
  flex-wrap:nowrap;
  height:250px;
  width:125px;
  border-radius:10px;
  margin:10px;
  z-index:5;
`;

export const ContentDetails = styled.View`
  align-items:center;
  background-color:#fff;
  border-top-left-radius:20px;
  border-top-right-radius:20px;
  margin-top:-50px;
  padding-top:40px;
  padding-bottom:30px;
`;

export const MovieTitle = styled.Text`
  margin-top:10px;
  font-family:'Montserrat_400Regular';
  font-size: 16px;
  color:#222;
  margin-bottom:10px;
`;

export const ShortInformations = styled.Text`
  font-family:'Montserrat_300Light';
  font-size: 11px;
  color:#222;
  margin-top:10px;
`;
export const About = styled.View`
  padding:0px 20px 0px 20px;
  align-self:flex-start;
`;

export const AboutDetails = styled.Text`
  font-family:'Montserrat_400Regular';
  font-size: 12px;
  color:#222;
  margin-bottom:10px;
`;


