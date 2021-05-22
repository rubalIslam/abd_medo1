import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, SafeAreaView, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useDispatch } from "react-redux";

const UserListScreen = ({}) => {
  return (
    <ScrollView style={{ backgroundColor: "black", paddingTop: 40, paddingHorizontal:10 }}>
      <SafeAreaView>
        <Text style={{ color: "white" }}>UserList Screen</Text>
        {/*console.log(route.params.productId)*/}
      </SafeAreaView>
    </ScrollView>
  );
};

export default UserListScreen;
