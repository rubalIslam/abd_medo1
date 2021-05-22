import React, { Component, useState, useEffect } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import * as SecureStore from "expo-secure-store";
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

import AsyncStorage from "@react-native-async-storage/async-storage";

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Main = () => {
  const isUser = false;

  return (
    <NavigationContainer>
      <Stack.Navigator
         initialRouteName="SignIn"
      >
        <Stack.Screen
          name="Main"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Main;
