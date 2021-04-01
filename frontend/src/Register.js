import React, { useState, Component } from "react";
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
  TouchableOpacity,
  Pressable,
  Image,
} from "react-native";
import styles from "./Styles";
import axios from "axios";
import DatePicker from "react-native-date-picker";
import styled from "styled-components";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { FloatingLabelInput } from "react-native-floating-label-input";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [dateofbirth, setDateofbirth] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmError, setConfirmError] = useState(false);
  const [firstnameError, setFirstnameError] = useState(false);
  const [lastnameError, setLastnameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [dupEmail, setDupEmail] = useState(false);

  const handleChange_email = (event) => {
    setEmail(event);
    setEmailError(false);
    setDupEmail(false);
  };
  const handleChange_password = (event) => {
    setPassword(event);
    setPasswordError(false);
  };
  const handleChange_confirm = (event) => {
    setConfirm(event);
    setConfirmError(false);
  };
  const handleChange_firstname = (event) => {
    setFirstname(event);
    setFirstnameError(false);
  };
  const handleChange_lastname = (event) => {
    setLastname(event);
    setLastnameError(false);
  };
  const handleChange_phone = (event) => {
    setPhone(event);
    setPhoneError(false);
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    setDate(date);
    hideDatePicker();
  };
  const sent = () => {
    console.warn(
      emailError,
      phone[0],
      isEmailValid(),
      email,
      password,
      confirm,
      firstname,
      lastname,
      date,
      phone
    );
    if (email === "") {
      setEmailError(true);
    }
    if (password === "") {
      setPasswordError(true);
    }
    if (confirm === "") {
      setConfirmError(true);
    }
    if (firstname === "") {
      setFirstnameError(true);
    }
    if (lastname === "") {
      setLastnameError(true);
    }
    if (phone === "") {
      setPhoneError(true);
    }
    if (!isEmailValid()) {
      console.warn("Invalid Email");
      setEmailError(true);
    } else if (password.length < 8) {
      console.warn("Please add at least 8 characters.");
      setPasswordError(true);
    } else if (password != confirm) {
      console.warn("Password is not same");
      setConfirmError(true);
    } else if (phone.length < 10 || phone[0] != 0) {
      console.warn("Telephone Number incorrect");
      setPhoneError(true);
    } else if (
      !emailError &&
      !passwordError &&
      !confirmError &&
      !firstnameError &&
      !lastnameError &&
      !phoneError
    ) {
      console.warn("Complete");
      createUser();
    }
  };

  function dateTime() {
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    if (parseInt(day) - 10 >= 0) {
      if (parseInt(month) - 10 >= 0) {
        return "" + year + "-" + month + "-" + day;
      } else {
        return "" + year + "-0" + month + "-" + day;
      }
    } else {
      if (parseInt(month) - 10 >= 0) {
        return "" + year + "-" + month + "-0" + day;
      } else {
        return "" + year + "-0" + month + "-0" + day;
      }
    }
  }

  function emailStatus() {
    if (emailError) {
      return "* Please enter a valid email address.";
    } else if (dupEmail) {
      return "* This email is already in-use, please try again.";
    }
  }

  const createUser = async () => {
    axios
      .post(`http://localhost:4000/public/uapi`, {
        email: email,
        firstname: firstname,
        lastname: lastname,
        birthdate: dateTime(),
        tel_no: phone,
        password: password,
      })
      .then((res) => {
        //console.log(res);
        console.log(res.data.data);
        if (res.data.status === "OK") {
          Actions.login();
        }
        else {
          if (res.data.data === "DUPLICATED EMAIL") {
            setDupEmail(true);
          }
        }
      });
  };

  const isEmailValid = () => {
    let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(String(email).toLowerCase());
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="default" />
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionSubtitle}></Text>
        <Text style={styles.sectionTitlewoNav}>Create Account</Text>
        <FloatingLabelInput
          label={"Email"}
          containerStyles={
            emailError || dupEmail ? styles.textboxerror : styles.textbox
          }
          customLabelStyles={
            emailError || dupEmail
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
        {emailError || dupEmail ? (
          <Text style={styles.texterror}>{emailStatus()}</Text>
        ) : (
          <Text style={styles.texterror}> </Text>
        )}
        <FloatingLabelInput
          label={"Password"}
          containerStyles={passwordError ? styles.textboxerror : styles.textbox}
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
          secureTextEntry={false}
          autoCompleteType={"off"}
          onChangeText={handleChange_password}
          autoCapitalize="none"
        />
        {passwordError ? (
          <Text style={styles.texterror}>
            * Please enter a valid password. (At least 8 characters)
          </Text>
        ) : (
          <Text style={styles.texterror}> </Text>
        )}
        <FloatingLabelInput
          label={"Confirm Password"}
          containerStyles={confirmError ? styles.textboxerror : styles.textbox}
          customLabelStyles={
            confirmError
              ? { colorFocused: "#FF0000", colorBlurred: "#FF0000" }
              : { colorFocused: "#898989", colorBlurred: "#898989" }
          }
          inputStyles={{
            color: "#000000",
            paddingHorizontal: 5,
          }}
          value={confirm}
          isPassword={false}
          secureTextEntry={false}
          autoCompleteType={"off"}
          onChangeText={handleChange_confirm}
          autoCapitalize="none"
        />
        {confirmError ? (
          <Text style={styles.texterror}>
            * Please enter the same password.
          </Text>
        ) : (
          <Text style={styles.texterror}> </Text>
        )}
        <FloatingLabelInput
          label={"First Name"}
          containerStyles={
            firstnameError ? styles.textboxerror : styles.textbox
          }
          customLabelStyles={
            firstnameError
              ? { colorFocused: "#FF0000", colorBlurred: "#FF0000" }
              : { colorFocused: "#898989", colorBlurred: "#898989" }
          }
          inputStyles={{
            color: "#000000",
            paddingHorizontal: 5,
          }}
          value={firstname}
          isPassword={false}
          onChangeText={handleChange_firstname}
          autoCapitalize="none"
        />
        {firstnameError ? (
          <Text style={styles.texterror}>* Please enter your firstname.</Text>
        ) : (
          <Text style={styles.texterror}> </Text>
        )}
        <FloatingLabelInput
          label={"Last Name"}
          containerStyles={lastnameError ? styles.textboxerror : styles.textbox}
          customLabelStyles={
            lastnameError
              ? { colorFocused: "#FF0000", colorBlurred: "#FF0000" }
              : { colorFocused: "#898989", colorBlurred: "#898989" }
          }
          inputStyles={{
            color: "#000000",
            paddingHorizontal: 5,
          }}
          value={lastname}
          isPassword={false}
          onChangeText={handleChange_lastname}
          autoCapitalize="none"
        />
        {lastnameError ? (
          <Text style={styles.texterror}>* Please enter your lastname.</Text>
        ) : (
          <Text style={styles.texterror}> </Text>
        )}
        <TouchableOpacity onPress={showDatePicker}>
          <View pointerEvents="none">
            <FloatingLabelInput
              label={"Date of birth"}
              containerStyles={styles.textbox}
              customLabelStyles={{
                colorFocused: "#898989",
                colorBlurred: "#898989",
              }}
              inputStyles={{
                color: "#000000",
                paddingHorizontal: 5,
              }}
              value={dateTime()}
              isPassword={false}
              editable={false}
            />
          </View>
        </TouchableOpacity>
        <Text style={styles.texterror}> </Text>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          date={date}
          mode="date"
          placeholder="select date"
          format="DD-MM-YYYY"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
          onDateChange={(date) => {
            setDate(date);
          }}
        />
        <FloatingLabelInput
          label={"Phone Number"}
          containerStyles={phoneError ? styles.textboxerror : styles.textbox}
          customLabelStyles={
            phoneError
              ? { colorFocused: "#FF0000", colorBlurred: "#FF0000" }
              : { colorFocused: "#898989", colorBlurred: "#898989" }
          }
          inputStyles={{
            color: "#000000",
            paddingHorizontal: 5,
          }}
          value={phone}
          hint="099-999-9999"
          mask="0999999999"
          isPassword={false}
          keyboardType="numeric"
          onChangeText={handleChange_phone}
          autoCapitalize="none"
        />
        {phoneError ? (
          <Text style={styles.texterror}>
            * Please enter a valid phone number.
          </Text>
        ) : (
          <Text style={styles.texterror}> </Text>
        )}
        <Text style={styles.sectionDescription}></Text>
        <TouchableHighlight
          style={styles.button}
          underlayColor="none"
          onPress={sent}
        >
          <View>
            <Text style={styles.buttonText}>Register</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default Register;
