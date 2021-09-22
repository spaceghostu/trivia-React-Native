import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabsNavigation from './screens/TabsNavigation';
import QuizScreen from './screens/QuizScreen';
import { Provider } from 'react-redux';
import store from './store';
import LobbyScreen from './screens/LobbyScreen';
import GameOverScreen from './screens/GameOverScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Tabs"
            component={TabsNavigation}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Lobby"
            component={LobbyScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Quiz"
            component={QuizScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="GameOver"
            component={GameOverScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
