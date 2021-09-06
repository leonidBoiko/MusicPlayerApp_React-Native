import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen'
import MusicListScreen from '../screens/MusicListScreen'

const Stack = createNativeStackNavigator();
const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{headerShown: false}} 
        />
        <Stack.Screen 
          name="MusicList" 
          component={MusicListScreen}
          options={{
            title: 'Your music',
            headerTitleAlign: 'center',
            headerTintColor: '#5690A5',
            headerStyle: {backgroundColor: '#FDE9FF'},  
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router

