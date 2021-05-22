import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, SafeAreaView, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useDispatch } from "react-redux";

const CartScreen = ({}) => {
  return (
    <ScrollView style={{ backgroundColor: "black", paddingTop: 40, paddingHorizontal:10 }}>
      <SafeAreaView>
        <Text style={{ color: "white" }}>Cart Screen</Text>
        {/*console.log(route.params.productId)*/}
      </SafeAreaView>
    </ScrollView>
  );
};

export default CartScreen;
