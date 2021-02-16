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
} from "react-native";

const Login = () => {
  return (
    <View style={styles.body}>
      <View style={styles.sectionContainer}>
        <View style={styles.maincard}>
          <Text style={styles.sectionSubtitle}>WELCOME</Text>
          <Text style={styles.sectionTitle}>Sign In</Text>
          <TextInput style={styles.textbox} placeholder={"Email"} />
          <TextInput style={styles.textbox} placeholder={"Password"} />
          <TouchableHighlight style={styles.button}>
            <Button color="#FFFFFF" title="Sign In" onPress={() => Actions.register()}/>
          </TouchableHighlight>
          <Text style={styles.sectionDescription}></Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: "absolute",
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
    color: Colors.black,
  },
  sectionSubtitle: {
    marginTop: 8,
    fontSize: 10,
    fontWeight: "800",
    color: "#f49608",
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
    color: Colors.dark,
  },
  highlight: {
    fontWeight: "700",
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: "600",
    padding: 4,
    paddingRight: 12,
    textAlign: "right",
  },
  maincard: {
    maxWidth: 500,
    width: "100%",
    margin: "auto",
    marginTop: 15,
    /*marginTop: -160,*/
    marginBottom: 15,
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textbox: {
    backgroundColor: "#F1F1F1",
    color: "#000000",
    borderRadius: 6,
    width: "100%",
    marginTop: 15,
    marginBottom: 0,
    height: 40,
    paddingLeft: 20,
  },
  button: {
    backgroundColor: "#444444",
    color: "#FFFFFF",
    borderRadius: 6,
    width: "100%",
    marginTop: 40,
    marginBottom: 0,
    height: 40,
  },
});

export default Login;
