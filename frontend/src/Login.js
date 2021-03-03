import React, { Component, useState } from "react";
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
import axios from "axios";
import { FloatingLabelInput } from "react-native-floating-label-input";
import BlackScreen from "../app/BlackScreen";

const Login = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const userLogin = async () => {
    axios
      .post(`http://localhost:4000/v1/uapi/login`, {
        email: email,
        password: password,
      })
      .then((res) => {
        //console.log(res);
        console.log(res.data);
      });
  };

  const sent = () => {
    console.warn(
      isEmailValid(),
      email,
      password,
    );
    if (
      email === "" ||
      password === ""
    ) {
      console.warn("No data");
    } else {
      if (!isEmailValid()) {
        console.warn("Invalid Email");
      }
      else {
        Actions.homeuser()
      }
    }
  };

  const isEmailValid = () => {
    let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(String(email).toLowerCase());
  };

  return (
    <View style={styles.body}>
      <View style={styles.sectionContainer}>
        <View style={styles.mainarea}>
          <Text style={styles.sectionSubtitle}>WELCOME</Text>
          <Text style={styles.sectionTitle}>Sign In</Text>
          <FloatingLabelInput
            label={"Email"}
            containerStyles={styles.textbox}
            customLabelStyles={{
              colorFocused: "#898989",
              colorBlurred: "#898989",
            }}
            inputStyles={{
              color: "#000000",
              paddingHorizontal: 5,
            }}
            value={email}
            isPassword={false}
            onChangeText={(text) => setEmail(text)}
          />
          <FloatingLabelInput
            label={"Password"}
            containerStyles={styles.textbox}
            customLabelStyles={{
              colorFocused: "#898989",
              colorBlurred: "#898989",
            }}
            inputStyles={{
              color: "#000000",
              paddingHorizontal: 5,
            }}
            value={password}
            isPassword={true}
            onChangeText={(text) => setPassword(text)}
          />
          <Text style={styles.sectionDescription}></Text>
          <TouchableHighlight style={styles.button}>
            <Button
              color="#FFFFFF"
              title="Sign In"
              onPress={sent}
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
