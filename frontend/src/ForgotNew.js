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
  Image,
} from "react-native";
import styles from "./Styles";
import axios from "axios";
import TextField from "./components/TextField";

const ForgotNew = (props) => {
  const { email, fid } = props;
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const [passwordError, setPasswordError] = useState(false);
  const [confirmError, setConfirmError] = useState(false);

  const handleChange_password = (event) => {
    setPassword(event);
    setPasswordError(false);
  };
  const handleChange_confirm = (event) => {
    setConfirm(event);
    setConfirmError(false);
  };

  const sent = () => {
    if (password === "") {
      setPasswordError(true);
    }
    if (confirm === "") {
      setConfirmError(true);
    } else if (password.length < 8) {
      setPasswordError(true);
    } else if (password != confirm) {
      setConfirmError(true);
    } else if (!passwordError && !confirmError) {
      console.warn("Complete");
      newPass();
    }
  };

  const newPass = async () => {
    const token = await SecureStore.getItemAsync("pms_token");
    axios
      .post(
        `http://localhost:4000/public/uapi/password`,
        {
          email: email,
          password: password,
          reset_password_id: fid,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((res) => {
        console.log(res);
        console.log(res.data);
        if (res.data.status === "OK") {
          alert("Complete");
          Actions.popTo('home');
        }
      })
      .catch((error) => {
        throw error;
      });
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="default" />
      <View style={styles.sectionContainerHeader}>
        <Text style={styles.sectionTitlewoNav}>Confirmation</Text>
        <Text style={styles.textMenuTitle}>Email : {email}</Text>
        <TextField
          label="Password"
          error1={passwordError}
          value={password}
          error="* Please enter a valid password."
          onChangeText={handleChange_password}
          autoCapitalize="none"
        />
        <TextField
          label="Confirm Password"
          error1={confirmError}
          value={confirm}
          error="* Please enter the same password."
          onChangeText={handleChange_confirm}
          autoCapitalize="none"
        />
        <Text style={styles.sectionDescription}></Text>
        <TouchableHighlight
          style={styles.button}
          underlayColor="none"
          onPress={sent}
        >
          <View>
            <Text style={styles.buttonText}>Confirm</Text>
          </View>
        </TouchableHighlight>
      </View>
      {/*<Image
        style={styles.bgCardPic}
        source={require('../assets/Secure_login_pana.png')}
      />*/}
    </View>
  );
};

export default ForgotNew;
