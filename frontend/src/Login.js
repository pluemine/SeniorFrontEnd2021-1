import React, { Component, useState } from "react";
import * as SecureStore from "expo-secure-store";
import { Actions } from "react-native-router-flux";
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
import TextField from "./components/TextField";

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

  const saveSecureStoreItem = async (key, value) => {
    await SecureStore.setItemAsync(key, value);
  };

  const getSecureStoreItem = async (key) => {
    return await SecureStore.getItemAsync(key);
  };

  const userLogin = async () => {
    axios
      .post(`http://localhost:4000/public/uapi/login`, {
        email: email,
        password: password,
      })
      .then(async (res) => {
        if (res.data.status === "OK") {
          saveSecureStoreItem("pms_token", res.data.data.token);
          Actions.tabbar();
        }
      })
      .catch((error) => {
        setFail(true);
        throw error;
      });
  };

  const sent = () => {
    if (email === "") {
      setEmailError(true);
    }
    if (password === "") {
      setPasswordError(true);
    }
    if (!isEmailValid()) {
      setEmailError(true);
    } else if (password.length < 8) {
      setPasswordError(true);
    } else if (!emailError && !passwordError) {
      userLogin();
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
    <View style={styles.container}>
      <StatusBar barStyle="default" />
      <View style={styles.sectionContainerHeader}>
        <Text style={styles.sectionTitlewoNav}>Sign In</Text>
        <TextField
          label="Email"
          error1={emailError}
          error2={fail}
          value={email}
          error={fail ? " " : "* Please enter a valid email address."}
          hint="example@address.com"
          onChangeText={handleChange_email}
          autoCapitalize="none"
        />
        <TextField
          label="Password"
          error1={passwordError}
          error2={fail}
          value={password}
          error={
            fail
              ? "* Incorrect email or password, please try again."
              : "* Please enter a valid password. (At least 8 characters)"
          }
          isPassword={true}
          secureText={true}
          onChangeText={handleChange_password}
          autoCapitalize="none"
        />
        <Text style={styles.sectionDescription}></Text>
        <TouchableHighlight
          style={styles.button}
          underlayColor="none"
          onPress={sent}
        >
          <View>
            <Text style={styles.buttonText}>Sign In</Text>
          </View>
        </TouchableHighlight>
        <Text style={styles.sectionOption}>Forgot Password</Text>
      </View>
    </View>
  );
};

export default Login;
