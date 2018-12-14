import React from "react";
import { StyleSheet, Text, View, Dimensions, ScrollView } from "react-native";

// Import the screens
import Chat from "./components/Chat";
import Main from "./components/Main";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      fullHeight: Dimensions.get("window").height,
      fullWidth: Dimensions.get("window").width
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          horizontal={true}
          // pagingEnabled={true}
          decelerationRate={0}
          snapToInterval={this.state.fullWidth} //your element width
          snapToAlignment={"center"}
        >
          <Main />
          <Chat />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: Dimensions.get("window").width
  }
});

export default App;
