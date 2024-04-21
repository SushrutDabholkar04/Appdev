import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const Navigation = () => {
   return (
    <View style={styles.container}>
     <TouchableOpacity>
       <FontAwesome5 name="home"/>
       <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity>
       <Text>Bookmark</Text>
      </TouchableOpacity>
      <TouchableOpacity>
       <Text>Profile</Text>
      </TouchableOpacity>
    </View>   
  );
};
const styles =StyleSheet.create({
  container:{
    flexDirection: "row",
    margin:10,
    justifyContent: "space-between"
  }
})


export default Navigation;