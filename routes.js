import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/screens/Home/index'

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Home"
        component={Home}
        options={{
          title: '',
          headerShown: false 
        }}
      />
    </Stack.Navigator>
  );
}

export default Routes;