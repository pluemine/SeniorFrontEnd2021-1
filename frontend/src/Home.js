import React, { Component } from "react";
import { Actions } from "react-native-router-flux";
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from "react-native/Libraries/NewAppScreen";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
  Button,
  TouchableHighlight,
  Image,
} from "react-native";
import styles from "./Styles";

const Home = () => {
  return (
    <View style={styles.body}>
      <View style={styles.sectionContainer}>
        <View style={styles.mainarea}>
          <Text style={styles.sectionSubtitle}>BRAND NAME</Text>
          <Text style={styles.sectionTitle}>Welcome</Text>
          <View style={styles1.content}>
            <Image
              style={styles1.logo}
              source={require("../assets/logo.png")}
            />
          </View>
          <Text style={styles1.texthead}>
              Getting Started
          </Text>
          <Text style={styles1.textdes}>
              To continue, please sign in to the system or if you don't have any account, you can create your own account.
          </Text>
          <TouchableHighlight style={styles.buttonhome}>
            <Button
              color="#FFFFFF"
              title="Sign In"
              onPress={() => Actions.login()}
            />
          </TouchableHighlight>
          <TouchableHighlight style={styles.buttonhomebdr}>
            <Button
              color="#444444"
              title="Register"
              onPress={() => Actions.register()}
            />
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

const styles1 = StyleSheet.create({
  logo: {
    width: 300,
    height: 300,
    resizeMode: "stretch",
    margin: 50,
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
  },
  texthead: {
    color: "#444444",
    fontWeight: "800",
    textAlign: "center",
    marginBottom: 10,
  },
  textdes: {
      color: "#444444",
      textAlign: "center",
      fontSize: 12,
      marginBottom: 40,
  }
});

export default Home;
