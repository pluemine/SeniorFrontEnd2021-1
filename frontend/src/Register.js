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
import styles from "./Styles";

const Register = () => {
  return (
    <View style={styles.body}>
      <View style={styles.sectionContainer}>
        <View style={styles.mainarea}>
          <Text style={styles.sectionSubtitle}>WELCOME</Text>
          <Text style={styles.sectionTitle}>Create Account</Text>
          <TextInput
            style={styles.textbox}
            placeholder={"Email"}
            placeholderTextColor={"#898989"}
          />
          <TextInput
            style={styles.textbox}
            placeholder={"Password"}
            placeholderTextColor={"#898989"}
          />
          <TextInput
            style={styles.textbox}
            placeholder={"Confirm Password"}
            placeholderTextColor={"#898989"}
          />
          <TextInput
            style={styles.textbox}
            placeholder={"First Name"}
            placeholderTextColor={"#898989"}
          />
          <TextInput
            style={styles.textbox}
            placeholder={"Middle Name"}
            placeholderTextColor={"#898989"}
          />
          <TextInput
            style={styles.textbox}
            placeholder={"Last Name"}
            placeholderTextColor={"#898989"}
          />
          <TextInput
            style={styles.textbox}
            placeholder={"Year of birth (eg. 2020)"}
            placeholderTextColor={"#898989"}
          />
          <TextInput
            style={styles.textbox}
            placeholder={"Phone Number"}
            placeholderTextColor={"#898989"}
          />
          <Text style={styles.sectionDescription}></Text>
          <TouchableHighlight style={styles.button}>
            <Button
              color="#FFFFFF"
              title="Register"
              onPress={() => Actions.home()}
            />
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

export default Register;
