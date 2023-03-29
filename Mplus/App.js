
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar } from 'react-native';
import React from 'react';
export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view1}>
        <Text style={styles.txt1}>hi bro!</Text>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,

  },

  view1: {
    height: 50,
    borderWidth: 1,
    justifyContent: "center",
  },

  txt1: {
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 20,
  }
})
