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

import AsyncStorage from '@react-native-async-storage/async-storage';


const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
/*
const MainDrawer = () => (
    <Drawer.Navigator
    >
        <Drawer.Screen name="Home" component={HomeStack}/>
        <Drawer.Screen name="Videos" component={VideosStack}/>
   
    </Drawer.Navigator>
)
*/
import AuthGlobal from "../Context/store/AuthGlobal";
const MyApp = () => {
  const context = useContext(AuthGlobal)
    const [ isLoading, setIsLoading ] = useState(true);
    const [userInfo, setUserInfo] = useState(null);
    console.log("context",context.stateUser)
    //const setUserInfo =

    const setuserInfo = async uinfo => {
      if(uinfo){
        console.log(uinfo)
        AsyncStorage.setItem("userInfo",uinfo)
      }else{
        AsyncStorage.removeItem("userInfo",uinfo)
      }
    }
    useEffect(() => {
        // Fetch the token from storage then navigate to our appropriate place
        const bootstrapAsync = async () => {
          // We should also handle error for production apps
          const userInfo = await AsyncStorage.getItem("userInfo");
          //const userInfo = await SecureStore.getItemAsync("userInfo");
          console.log(userInfo);
          //const userToken = await SecureStore.getItemAsync("userToken");
          //const adminToken = await SecureStore.getItemAsync("adminToken");
    
          // This will switch to the App screen or Auth screen and this loading
          // screen will be unmounted and thrown away.
          //userInfo ? setUserInfo(userInfo):setUserInfo(null)
          setUserInfo(userInfo)
          //setuserInfo(userInfo)
          setIsLoading(false);
        };
    
        bootstrapAsync();
      }, []);
   
    //const [auth, setAuth ] = useState("true")

        return (
            <NavigationContainer>
            { isLoading ? null :  userInfo ? (
            <Stack.Navigator
              name="userstack"
            >
              {console.log(userInfo)}
              <Stack.Screen
                name="Tab"
                options={{ header: () => null, animationEnabled: false }}
              >
                {() => (
                  <Tab.Navigator
                    name="Main"
                    tabBarOptions={{
                      activeTintColor: "black",
                      inactiveTintColor: "white",
                      style: {
                        backgroundColor: "#F1485C"
                      }
                    }}
                  >
                    <Tab.Screen
                      name="MainScreen"
                      options={{
                        tabBarLabel: "MainScreen",
                        tabBarIcon: ({ color, size }) => (
                          <Ionicons name={"home"} size={size} color={color} />
                        )
                      }}
                    >
                      {() => (
                        <Stack.Navigator>
                          <Stack.Screen
                                name="MainScreen"
                                options={{ header: () => null, animationEnabled: false }}
                              >
                                {() => <MainScreen userInfo={userInfo}/>}
                          </Stack.Screen>


                          <Stack.Screen
                                name="ProductScreen"
                                options={{ header: () => null, animationEnabled: false }}
                              >
                                {() => <ProductScreen userInfo={userInfo}/>}
                          </Stack.Screen>
{/*                          <Stack.Screen
                            name="Home"
                            options={{
                              title: "List",
                              tabBarLabel: "Home",
                              headerStyle: { backgroundColor: "#F1485C" },
                              headerTitleStyle: { color: "white" },
                              headerTitleAlign: "center"
                            }}
                          >
                            {() => <HomeScreen userId={userId} userToken={userToken} name={name}/>}
                          </Stack.Screen>
*/}
                        </Stack.Navigator>
                      )}
                    </Tab.Screen>
                    

                    <Tab.Screen
                      name="HomeScreen"
                      options={{
                        tabBarLabel: "HomeScreen",
                        tabBarIcon: ({ color, size }) => (
                          <Ionicons
                            name={"HomeScreen"}
                            size={size}
                            color={color}
                          />
                        )
                      }}
                    >
                      {() => (
                        <Stack.Navigator>
                          <Stack.Screen
                            name="HomeScreen"
                            options={{ header: () => null, animationEnabled: false }}
                          >
                            {() => (
                              <HomeScreen userInfo={userInfo}/>
                            )}
                          </Stack.Screen>
                        </Stack.Navigator>
                      )}
                    </Tab.Screen>

                    <Tab.Screen
                      name="Profile"
                      options={{
                        tabBarLabel: "Profile",
                        tabBarIcon: ({ color, size }) => (
                          <Ionicons
                            name={"profile"}
                            size={size}
                            color={color}
                          />
                        )
                      }}
                    >
                      {() => (
                        <Stack.Navigator>
                          <Stack.Screen
                            name="Profile"
                            options={{ header: () => null, animationEnabled: false }}
                          >
                            {() => (
                              <ProfileScreen userInfo={userInfo}/>
                            )}
                          </Stack.Screen>
                        </Stack.Navigator>
                      )}
                    </Tab.Screen>
                  </Tab.Navigator>
                )}
              </Stack.Screen>
            </Stack.Navigator>
            ): ( // We haven't finished checking for the token yet
          // No token found, user isn't signed in
          <Stack.Navigator
            name="authstack"
          initialRouteName="Welcome">
            <Stack.Screen
              name="Welcome"
              options={{ header: () => null, animationEnabled: false }}
            >
              {() => <Welcome userInfo={userInfo}/>}
            </Stack.Screen>
            <Stack.Screen
              name="SignUp"
              options={{ header: () => null, animationEnabled: false }}
            >
              {() => <SignUpScreen userInfo={userInfo}/>}
            </Stack.Screen>
            <Stack.Screen
              name="SignIn"
              options={{ header: () => null, animationEnabled: false }}
            >
              {() => <SignInScreen setuserInfo={setuserInfo} userInfo={userInfo}/>}
            </Stack.Screen>
{/*
            <Stack.Screen
              name="AdminLogin"
              options={{ header: () => null, animationEnabled: false }}
            >
              {() => <AdminLogin setAdminId={setAdminId} setAdminToken={setAdminToken} />}
            </Stack.Screen>
            */}
            {/*
              adminToken !== null ? (
                <Stack.Screen
                  name="Tab"
                  options={{ header: () => null, animationEnabled: false }}
                >
                  {
                    () => (
                      <Tab.Navigator
                      >
                        <Tab.Screen
                          name="Dashboard"
                          options={{ header: () => null, animationEnabled: false }}
                        >
                          {() => (
                            <Stack.Navigator>
                              <Stack.Screen
                                name="Dashboard"
                                options={{ header: () => null, animationEnabled: false }}
                              >
                                {() => <Dashboard />}
                              </Stack.Screen>
                              <Stack.Screen
                                name="YoutubeDownloader"
                                options={{ header: () => null, animationEnabled: false }}
                              >
                                {() => <YoutubeDownloader />}
                              </Stack.Screen>
                              <Stack.Screen
                                name="Engineers"
                                options={{ header: () => null, animationEnabled: false }}
                              >
                                {() => <Engineers />}
                              </Stack.Screen>
                              <Stack.Screen
                                name="EditEngineers"
                                options={{ header: () => null, animationEnabled: false }}
                              >
                                {() => <EditEngineers />}
                              </Stack.Screen>
                            </Stack.Navigator>
                          )}
                        </Tab.Screen>
                        <Tab.Screen
                          name="AdminProfile"
                          options={{ header: () => null, animationEnabled: false }}
                        >
                          {() => (
                            <Stack.Navigator>
                              <Stack.Screen
                                name="AdminProfile"
                                options={{ header: () => null, animationEnabled: false }}
                              >
                                {() => <AdminProfile setAdminId={setadminId} setadminToken={setadminToken}/>}
                              </Stack.Screen>
                              <Stack.Screen
                                name="Room"
                                options={{ header: () => null, animationEnabled: false }}
                              >
                                {() => <Room />}
                              </Stack.Screen>
                            </Stack.Navigator>
                          )}
                        </Tab.Screen>
                      </Tab.Navigator>
                    )
                  }
                </Stack.Screen>
              ) : null
                */}
          </Stack.Navigator>
        ) }
          </NavigationContainer>
        )
}

//const mapStateToProps = state => ({ auth: state.auth })
//export default connect(mapStateToProps)(MyApp);
export default MyApp;

