import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import Routes from './routes';

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </>
  );
}

