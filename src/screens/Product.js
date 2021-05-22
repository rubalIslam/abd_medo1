import React, { useEffect, useState } from "react";
import { Text,TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Product = ({ product }) => {
    const navigation = useNavigation();
  
    return (
    <>
      <TouchableOpacity
        style={{color:"green"}}
        onPress={() => {
          navigation.navigate("ProductScreen", { productId: product._id });
          console.log(product._id)
        }}
      >
        <Text style={{color:"white"}}>
          {product.name}
        </Text>
        <Text style={{color:"white"}}>
            {product.price}
        </Text>
        <Text style={{color:"white"}}>
            {product.rating}
        </Text>
      </TouchableOpacity>
      {console.log(product)}
    </>
  );
};

export default Product;
