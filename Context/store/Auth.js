import React, { useEffect, useReducer, userEffect, useState } from "react";
import jwt_decode from "jwt-decode";
//import AsyncStorage from "@react-native-community/async-storage"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux'

import authReducer from "../reducers/Auth.reducer";
//import { setCurrentUser } from "../actions/Auth.actions";
import { setCurrentUser } from "../../src/actions/userActions";
import AuthGlobal from './AuthGlobal'

const Auth = props => {
    const [stateUser, dispatch] = useReducer(
        authReducer, {
        isAuthenticated: null,
        user: {}
    });
    const [showChild, setShowChild] = useState(false);

    //const userLogin = useSelector((state) => state.userLogin)

    useEffect(() => {
        setShowChild(true);
        /*if (AsyncStorage.jwt) {
            const decoded = AsyncStorage.jwt ? AsyncStorage.jwt : "";
            if (setShowChild) {
                dispatch(setCurrentUserUser(jwt_decode(decoded)))
            }
        }*/
        const userInfo = AsyncStorage.getItem("userInfo")
        console.log("authd",userInfo)
        dispatch(setCurrentUser(userInfo,userInfo.name))
        return () => setShowChild(false);
    }, [])


    if (!showChild) {
        return null;
    } else {
        return (
            <AuthGlobal.Provider
                value={{
                    stateUser,
                    dispatch
                }}
            >
                {props.children}
            </AuthGlobal.Provider>
        )
    }
};

export default Auth;