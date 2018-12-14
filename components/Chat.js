import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

class Chat extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Chat Screen</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width
  }
});

export default Chat;
