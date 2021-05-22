import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity,SafeAreaView,ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useDispatch } from "react-redux";
//import { ScrollView } from "react-native-gesture-handler";

const ProductScreen = ({ productId }) => {
  const [qty, setQty] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const dispatch = useDispatch();

  const route = useRoute();

  return (
    <ScrollView style={{ backgroundColor: "black", paddingTop: 40 }}>
      <SafeAreaView>
        <Text style={{color:"white"}}>Product Details</Text>
        {console.log(route.params.productId)}
      </SafeAreaView>
    </ScrollView>
  );
};

export default ProductScreen;
