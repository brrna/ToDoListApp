import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Header from "./src/component/Header/Header";
import Main from "./src/component/Main/Main";

function App() {

  return (
    <SafeAreaView
      style={styles.app}>

      <Header />
      <Main />

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  app: {
    backgroundColor: "#F9F4F1",
    flex: 1,
    justifyContent: "space-between"
  }
})

export default App;