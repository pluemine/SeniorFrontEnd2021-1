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

const ForgotOtp = (props) => {
  const { email } = props;
  const [otp, setOtp] = useState("");

  const [otpError, setOtpError] = useState(false);

  const handleChange_otp = (event) => {
    setOtp(event);
    setOtpError(false);
  };

  const sent = () => {
    if (otp === "" || otp.length < 6) {
      setOtpError(true);
    } else if (!otpError) {
      checkOtp();
    }
  };

  const checkOtp = async () => {
    const token = await SecureStore.getItemAsync("pms_token");
    axios
      .post(
        `http://localhost:4000/public/uapi/otp`,
        {
          email: email,
          reset_otp: otp,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((res) => {
        console.log(res);
        console.log(res.data);
        if (res.data.status === "OK") {
          alert("OTP confirmed");
          Actions.forgotnew({
            email: email,
            fid: res.data.data.reset_password_data.reset_password_id,
          });
        } else {
          setOtpError(true);
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
          label="OTP"
          error1={otpError}
          value={otp}
          error="* Please enter a valid OTP."
          hint="123456"
          onChangeText={handleChange_otp}
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

export default ForgotOtp;
