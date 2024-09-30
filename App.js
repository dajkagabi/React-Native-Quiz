import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './components/screen/WelcomeScreen';
import QuizScreen from './components/screen/QuizScreen';


const Stack = createNativeStackNavigator();


const App=()=> {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen}/>
        <Stack.Screen name="Quiz" component={QuizScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
