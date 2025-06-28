import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Login from './components/Login';
import Home from './components/Home';
import Chamada from './components/Chamada';
import Calendario from './components/Calendario';
import Alunos from './components/Alunos';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Alunos">
        <Stack.Screen
          name="Alunos"
          component={Alunos}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
