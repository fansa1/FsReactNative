import React from 'react';
import { TouchableWithoutFeedback, View, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import Constants from 'expo-constants';
import Text from './Text'
import { Link } from "react-router-native";

const styles = StyleSheet.create({
  flexItemA: {
    flexGrow: 0,
    flexShrink: 1,
    marginLeft:10,
    marginTop:30,
    marginBottom: 10,
    backgroundColor: '#24292e',
    paddingLeft: 10,
    paddingRight: 10,
  },
    flexItemRow: {
    flexGrow: 0,
    flexShrink: 1,
    flexDirection: "row",
  },
});



const AppBar = () => {
  return(
     <>
     <View style={styles.flexItemRow}>
     <ScrollView horizontal contentContainerStyle={{backgroundColor: '#24292e', flex:1}}>
     <View style={styles.flexItemA}>
     <Link to="/signin" component={TouchableOpacity} activeOpacity={0.8}>
     <Text fontWeight="bold"fontSize="subheading" color="white">Sign in</Text>
    </Link>
    </View>
    <View style={styles.flexItemA}>
     <Link to="/" component={TouchableOpacity} activeOpacity={0.8}>
     <Text fontWeight="bold"fontSize="subheading" color="white">Repositories</Text>
     </Link>
       </View>
    </ScrollView>
    </View>
    
   </>
  )};

export default AppBar;