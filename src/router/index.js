import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome';
import HomeScreen from '../screens/HomeScreen'
import MusicListScreen from '../screens/MusicListScreen'

const Tab = createBottomTabNavigator();

const globalScreenOptions = {
  headerShown: false, 
  tabBarShowLabel: false,
  tabBarInactiveTintColor: '#aaa',
  tabBarActiveTintColor: "#fff",
  tabBarInactiveBackgroundColor: '#fff',
}

const Router = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={globalScreenOptions}>
        <Tab.Screen name="Home" component={HomeScreen} 
          options={{
            tabBarStyle: {backgroundColor: '#5690A5'},
            tabBarIcon: ({color}) => <FontAwesome5 color={color} name="home" size={25} />
        }}/>
        <Tab.Screen name="MusicList" component={MusicListScreen}
        options={{
          tabBarInactiveBackgroundColor: '#5690A5',
          tabBarActiveTintColor: "#5690A5",
          tabBarIcon: ({color}) => <FontAwesome5 color={color} name="list" size={25} />
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Router

