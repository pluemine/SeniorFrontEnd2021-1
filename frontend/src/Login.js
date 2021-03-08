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
  const [fail, setFail] = useState(false);

  const handleChange_email = (event) => {
    setEmail(event);
    setEmailError(false);
    if (fail) {
      setFail(false);
      setPasswordError(false);
    }
  };
  const handleChange_password = (event) => {
    setPassword(event);
    setPasswordError(false);
    if (fail) {
      setFail(false);
      setEmailError(false);
    }
  };

  //Delete this test() after deployed
  const test = () => {
    console.warn(email,password);
    if (email === "pluem@gmail.com" && password === "12345678") {
      Actions.tabbar();
    }
    else {
      setFail(true);
    }
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
        if (res.data.status === "OK") {
          Actions.homeuser();
        }
        else {
          setFail(true);
        }
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
    } else if (password.length < 8) {
      console.warn("Please add at least 8 characters.");
      setPasswordError(true);
    } else if (!emailError && !passwordError) {
      //userLogin();
      test();
    }
  };

  const isEmailValid = () => {
    let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(String(email).toLowerCase());
  };

  function loginStatus() {
    if (passwordError) {
      return "* Please enter a valid password. (At least 8 characters)";
    } else if (fail) {
      return "* Incorrect email or password, please try again.";
    }
  }

  return (
    <View style={styles.body}>
      <View style={styles.sectionContainer}>
        <View style={styles.mainarea}>
          <Text style={styles.sectionSubtitle}></Text>
          <Text style={styles.sectionTitle}>Sign In</Text>
          <FloatingLabelInput
            label={"Email"}
            containerStyles={
              emailError || fail ? styles.textboxerror : styles.textbox
            }
            customLabelStyles={
              emailError || fail
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
            autoCapitalize="none"
          />
          {emailError ? (
            <Text style={styles.texterror}>
              * Please enter a valid email address.
            </Text>
          ) : (
            <Text style={styles.texterror}> </Text>
          )}
          <FloatingLabelInput
            label={"Password"}
            containerStyles={
              passwordError || fail ? styles.textboxerror : styles.textbox
            }
            customLabelStyles={
              passwordError || fail
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
            autoCapitalize="none"
          />
          {passwordError || fail ? (
            <Text style={styles.texterror}>{loginStatus()}</Text>
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
