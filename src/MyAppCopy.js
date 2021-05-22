//import 'react-native-gesture-handler';
import React, { Component, useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import * as SecureStore from 'expo-secure-store';
//import AuthScreen from './components/auth';
import Welcome from "./screens/Welcome";
import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from "./screens/RegisterScreen";
import MainScreen from "./screens/MainScreen";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import ProfileScreen from "./screens/ProfileScreen";
//import ProfileScreen from './components/user/profile/profile';
//import { Stack, HomeStack, VideosStack, screenOptions } from './routes/stacks';
import { DrawerNavigator } from './StoneNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';
//import AsyncStorage from "@react-native-community/async-storage"
import { Host } from 'react-native-portalize';
import { navigationRef } from './RootNavigation';

//import { urlRedirect } from './utils/Tools';
//import * as Linking from 'expo-linking';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


const MyAppCopy = () => {
 {/* useEffect(() => {
    // listen for new url events coming from Expo
    Linking.addEventListener(
      'url',
      (event) => {
        urlRedirect(event.url);
      },
      [urlRedirect],
    );
    Linking.getInitialURL().then(urlRedirect);
    Linking.removeEventListener(
      'url',
      (event) => {
        urlRedirect(event.url);
      },
      [urlRedirect],
    );
  }, [urlRedirect]);
*/}

    const [ isLoading, setIsLoading ] = useState(true);
    const [userInfo, setUserInfo] = useState(null);
    console.log(userInfo)
    //const setUserInfo =
    return (
      <NavigationContainer ref={navigationRef}>
        <Host>
          <DrawerNavigator/>
          {/*<Text style={{color:"red"}}>Stone</Text>*/}
        </Host>
      </NavigationContainer>
    )
}
export default MyAppCopy;

