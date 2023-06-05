import {View, Text} from 'react-native';
import React from 'react';
import StackNavigator from './src/navigation/StackNavigator';
import TabNavigation from './src/navigation/TabNavigation';
import EventScreen from './src/screens/EventScreen';
import PostScreen from './src/screens/PostScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import New from './src/screens/New';
import CreateEvent from './src/screens/CreateEvent';
import EditProfile from './src/screens/EditProfile';
import CustomButton2 from './src/components/CustomButton2';
import MenuScreen from './src/screens/MenuScreen';
import FaqsScreen from './src/screens/FaqsScreen';

export default function App() {
  // return <TabNavigation />;
  return <StackNavigator />;
  // return <FaqsScreen />;
}
