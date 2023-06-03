import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import GroupScreen from '../screens/GroupScreen';
import NotificationScreen from '../screens/NotificationScreen';
import PostScreen from '../screens/PostScreen';
import MenuScreen from '../screens/MenuScreen';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Tab = createMaterialBottomTabNavigator();

export default function TabNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#0C134F"
        inactiveColor="#8e8e93"
        barStyle={{
          backgroundColor: '#D1D2D9',
          height: height * 0.125,
          width: width,
        }}
        screenOptions={{headerShown: false}}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: () => <Icon name="home" size={24} color="#0C134F" />,
            tabBarShowLabel: false,
          }}
        />
        <Tab.Screen
          name="Groups"
          component={GroupScreen}
          options={{
            tabBarIcon: () => <Icon name="group" size={24} color="#0C134F" />,
            tabBarShowLabel: false,
          }}
        />
        <Tab.Screen
          name="Post"
          component={PostScreen}
          options={{
            tabBarIcon: () => <Icon name="plus" size={24} color="#0C134F" />,
            tabBarShowLabel: false,
          }}
        />
        <Tab.Screen
          name="Notification"
          component={NotificationScreen}
          options={{
            tabBarIcon: () => <Icon name="bell" size={24} color="#0C134F" />,
            tabBarShowLabel: false,
          }}
        />
        <Tab.Screen
          name="Menu"
          component={MenuScreen}
          options={{
            tabBarIcon: () => <Icon name="bars" size={24} color="#0C134F" />,
            tabBarShowLabel: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
