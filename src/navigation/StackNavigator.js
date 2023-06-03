import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import HomeScreen from '../screens/HomeScreen';
import GroupScreen from '../screens/GroupScreen';
import PostScreen from '../screens/PostScreen';
import NotificationScreen from '../screens/NotificationScreen';
import MenuScreen from '../screens/MenuScreen';
import SignUpScreen from '../screens/SignUpScreen';
import SignInScreen from '../screens/SignInScreen';
import {auth} from '../config/firebase';
// import EventScreen from '../screens/EventScreen';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SignIn"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Groups" component={GroupScreen} />
        <Stack.Screen name="Post" component={PostScreen} />
        <Stack.Screen name="Notification" component={NotificationScreen} />
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        {/* <Stack.Screen name="Event" component={EventScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
