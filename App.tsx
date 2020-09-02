import { StatusBar } from 'expo-status-bar';
import { AppLoading } from 'expo'
import React from 'react';
import AppNavigation from './src/routes/AppNavigation';
import {
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_700Bold,
  useFonts

} from '@expo-google-fonts/montserrat';

console.disableYellowBox = true;

const App: React.FC = () => {
  let [fontsLoaded] = useFonts({
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_700Bold
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <AppNavigation />
        <StatusBar style="light" />
      </>
    );
  }
}

export default App;