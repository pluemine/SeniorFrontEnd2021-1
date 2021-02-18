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

const Login = () => {
  return (
    <View style={styles.body}>
      <View style={styles.sectionContainer}>
        <View style={styles.mainarea}>
          <Text style={styles.sectionSubtitle}>WELCOME</Text>
          <Text style={styles.sectionTitle}>Sign In</Text>
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
          <TouchableHighlight style={styles.button}>
            <Button
              color="#FFFFFF"
              title="Sign In"
              onPress={() => Actions.home()}
            />
          </TouchableHighlight>
          <Text style={styles.sectionOption}>Forgot Password</Text>
        </View>
      </View>
    </View>
  );
};

const styles1 = StyleSheet.create({});

export default Login;
