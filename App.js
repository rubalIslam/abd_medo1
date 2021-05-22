//import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
//import { LogBox } from "react-native";
import {Text, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Toast from "react-native-toast-message";

// Redux
import { Provider } from "react-redux";
//import store from "./Redux/store";
import store from "./store"

// Context API
//import MyApp from "./src/MyApp";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";

// Navigatiors
//import MainNav from "./src/MainNav";
//import Main from "./Navigators/Main";
import MyAppCopy from "./src/MyAppCopy";

// Screens
//import Header from "./Shared/Header";

//LogBox.ignoreAllLogs(true);
import Auth from "./Context/store/Auth";
//import Auth from "./src/context/createDataContext";


export default function App() {
 /* const [userInfo, setUserInfo] = useState(null);

  useEffect = () => {
    try{
      const userInfo = await AsyncStorage.getItem("userInfo");
      if (userInfo != null){
        console.log("previous value",userInfo)
        setUserInfo(userInfo)
      }
    }catch(e){
      console.log("error in getting async",e)
    }
  }
*/
/*
To use debugger
"debug":"open 'rndebugger://set-debugger-loc?host=localhost&port=19000'"
*/
  return (
    <Auth>
       <Provider store={store}>
        <ActionSheetProvider>
          <SafeAreaView style={{ flex:1}}>
            {/*<Main />*/}
            
             {/*<MainNav/>*/}
             <MyAppCopy/>
        
          </SafeAreaView >
            {/*<Header />
            <Text>Hello</Text>
            <Main />
            <Toast ref={(ref) => Toast.setRef(ref)} />*/}
          
        </ActionSheetProvider>
      </Provider>
    </Auth>
  );
}
