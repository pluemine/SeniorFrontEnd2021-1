import React, { Component, useState } from 'react';
import * as SecureStore from 'expo-secure-store';
import { Actions } from 'react-native-router-flux';
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
} from 'react-native';
import styles from './Styles';
import axios from 'axios';
import TextField from './components/TextField';

const ForgotPass = () => {
  const [email, setEmail] = useState('');

  const [emailError, setEmailError] = useState(false);

  const handleChange_email = (event) => {
    setEmail(event);
    setEmailError(false);
  };

  const sent = () => {
    if (email === '') {
      setEmailError(true);
    }
    if (!isEmailValid()) {
      setEmailError(true);
    } else if (!emailError) {
    }
    forgot();
  };

  const forgot = async () => {
    const token = await SecureStore.getItemAsync("pms_token");
    axios
      .post(
        `http://localhost:4000/public/uapi/forgetPassword`,
        {
          email: email,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((res) => {
        console.log(res);
        console.log(res.data);
        if (res.data.status === "OK") {
          alert("Sent");
        }
      })
      .catch((error) => {
        throw error;
      });
  };

  const isEmailValid = () => {
    let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(String(email).toLowerCase());
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle='default' />
      <View style={styles.sectionContainerHeader}>
        <Text style={styles.sectionTitlewoNav}>Forgot Password</Text>
        <TextField
          label='Email'
          error1={emailError}
          value={email}
          error='* Please enter a valid email address.'
          hint='example@address.com'
          onChangeText={handleChange_email}
          autoCapitalize='none'
        />
        <Text style={styles.sectionDescription}></Text>
        <TouchableHighlight
          style={styles.button}
          underlayColor='none'
          onPress={sent}
        >
          <View>
            <Text style={styles.buttonText}>Reset Password</Text>
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

export default ForgotPass;
