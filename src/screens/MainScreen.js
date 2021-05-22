import React, { useEffect, useState, useCallback } from "react";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import {
    Text,
    View,
    TouchableOpacity,
    Image,
    ActivityIndicator,
    SafeAreaView,
    StyleSheet,
    ScrollView,
    TextInput,
    Button
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import Product from "./Product";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function MainScreen({ match }) {
    const navigation = useNavigation();

    //const keyword = match.params.keyword
    const keyword = ""

    //const pageNumber = match.params.pageNumber || 1
    const pageNumber = 1

    const dispatch = useDispatch()

    const productList = useSelector((state) => state.productList)
  const { loading, error, products, page, pages } = productList

  useEffect(() => {
    
    dispatch(listProducts(keyword, pageNumber))
  }, [dispatch, keyword, pageNumber])

  
    return (
        <ScrollView style={{backgroundColor:"black",paddingTop:40,  paddingHorizontal:10}}>
            <SafeAreaView 
            //style={{ alignItems: "center" }}
            >
                {/*<Button title="sign out" onPress={handleSubmit}
        />*/}
            <Text style={{fontSize:20, color:"white"}}
            >Latest Products</Text>
            {console.log(products)}
            {
                products?
                products.map((product,i) => (
                    <Product product={product}/>
                )):<Text>No products available</Text>
            }
            
            </SafeAreaView>
            
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        alignItems: "center"
        // flex: 1
    },
    button:{
        backgroundColor:"red",
        width:"100%",
        height:30
    },
    pageImage: {
        //flex: 1,
        textAlign:"left",
        width: 400,
        height: 500,
        resizeMode: 'contain',
        paddingRight: 20,
        margin: 0
    },
    button: {
        width: 390,
        height: 45,
        margin: 0,
        padding: 0,
        borderRadius: 5,
        backgroundColor: "tomato",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50
    },
    image: {
        height: 140,
        width: 140,
        borderRadius: 70,
        borderWidth: 2,
        borderColor: "#F35960"
    },
    textInput: {
        borderBottomColor: "#F35960",
        borderBottomWidth: 1,
        height: 45,
        width: "80%",
        paddingLeft: 15,
        marginVertical: 20,
        marginHorizontal: "10%"
    },
    textArea: {
        borderWidth: 1,
        borderColor: "#F35960",
        width: "80%",
        height: 80,
        paddingHorizontal: 15,
        paddingTop: 15,
        textAlignVertical: "top",
        marginBottom: 20,
        marginHorizontal: "10%",
        borderRadius: 5
    },
    updateButton: {
        width: 150,
        height: 55,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: "#F35960",
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30
    },
    logoutButton: {
        width: 150,
        height: 55,
        borderRadius: 50,
        backgroundColor: "#F35960",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30
    },
    logoutButtonText: {
        color: "white"
    },
    updateButtonText: {
        color: "#F35960"
    }
});
