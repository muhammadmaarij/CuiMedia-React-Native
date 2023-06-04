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
import AsyncStorage from '@react-native-async-storage/async-storage';
import {auth} from '../config/firebase';
import {useState, useEffect} from 'react';
import TabNavigation from './TabNavigation';
import ProfileScreen from '../screens/ProfileScreen';
import EditProfile from '../screens/EditProfile';
import EventScreen from '../screens/EventScreen';
import CreateEvent from '../screens/CreateEvent';

// import EventScreen from '../screens/EventScreen';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  const [completedOnboarding, setCompletedOnboarding] = useState(false);

  useEffect(() => {
    // Read from AsyncStorage to determine if onboarding is completed
    console.log(completedOnboarding);
    AsyncStorage.getItem('completedOnboarding').then(value => {
      if (value === 'true') {
        setCompletedOnboarding(true);
      }
    });
  }, []);

  handleOnboardingComplete = () => {
    // Update local state and store in AsyncStorage
    setCompletedOnboarding(true);
    AsyncStorage.setItem('completedOnboarding', 'true');
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {!completedOnboarding ? (
          <>
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
            <Stack.Screen name="SignIn" component={SignInScreen} />
            <Stack.Screen name="root" component={TabNavigation} />
            <Stack.Screen name="profile" component={ProfileScreen} />
            <Stack.Screen name="editprofile" component={EditProfile} />
            <Stack.Screen name="event" component={EventScreen} />
            <Stack.Screen name="createevent" component={CreateEvent} />
          </>
        ) : (
          <>
            <Stack.Screen name="root" component={TabNavigation} />
            <Stack.Screen name="profile" component={ProfileScreen} />
            <Stack.Screen name="editprofile" component={EditProfile} />
            <Stack.Screen name="event" component={EventScreen} />
            <Stack.Screen name="createevent" component={CreateEvent} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
