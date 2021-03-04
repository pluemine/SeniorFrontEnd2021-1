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
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleChange_email = (event) => {
    setEmail(event);
    setEmailError(false);
  };
  const handleChange_password = (event) => {
    setPassword(event);
    setPasswordError(false);
  };

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
    console.warn(isEmailValid(), emailError, passwordError);
    if (email === "") {
      setEmailError(true);
    }
    if (password === "") {
      setPasswordError(true);
    }
    if (!isEmailValid()) {
      console.warn("Invalid Email");
      setEmailError(true);
    }
    else if (password.length < 8) {
      console.warn("Please add at least 8 charachters.");
      setPasswordError(true);
    }
    else if (!emailError && !passwordError) {
      Actions.homeuser();
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
            containerStyles={emailError ? styles.textboxerror : styles.textbox}
            customLabelStyles={
              emailError
                ? { colorFocused: "#FF0000", colorBlurred: "#FF0000" }
                : { colorFocused: "#898989", colorBlurred: "#898989" }
            }
            inputStyles={{
              color: "#000000",
              paddingHorizontal: 5,
            }}
            value={email}
            hint="example@address.com"
            isPassword={false}
            onChangeText={handleChange_email}
          />
          {emailError ? (
            <Text style={styles.texterror}>* Please enter a valid email address.</Text>
          ) : (
            <Text style={styles.texterror}> </Text>
          )}
          <FloatingLabelInput
            label={"Password"}
            containerStyles={
              passwordError ? styles.textboxerror : styles.textbox
            }
            customLabelStyles={
              passwordError
                ? { colorFocused: "#FF0000", colorBlurred: "#FF0000" }
                : { colorFocused: "#898989", colorBlurred: "#898989" }
            }
            inputStyles={{
              color: "#000000",
              paddingHorizontal: 5,
            }}
            value={password}
            isPassword={false}
            autoCompleteType={"off"}
            onChangeText={handleChange_password}
          />
          {passwordError ? (
            <Text style={styles.texterror}>
              * Please enter a valid password. (At least 8 characters)
            </Text>
          ) : (
            <Text style={styles.texterror}> </Text>
          )}
          <Text style={styles.sectionDescription}></Text>
          <TouchableHighlight style={styles.button}>
            <Button color="#FFFFFF" title="Sign In" onPress={sent} />
          </TouchableHighlight>
          <Text style={styles.sectionOption}>Forgot Password</Text>
        </View>
      </View>
    </View>
  );
};

const styles1 = StyleSheet.create({});

export default Login;
