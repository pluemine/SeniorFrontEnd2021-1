import React, { useState, Component } from 'react';
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
  TouchableOpacity,
  Pressable,
  Image,
} from 'react-native';
import styles from './Styles';
import axios from 'axios';
import styled from 'styled-components';
import DateModal from './components/DateModal';
import TextField from './components/TextField';
import * as Helper from './components/Helper';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [date, setDate] = useState(new Date());
  const [phone, setPhone] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmError, setConfirmError] = useState(false);
  const [firstnameError, setFirstnameError] = useState(false);
  const [lastnameError, setLastnameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [dupEmail, setDupEmail] = useState(false);

  const [dateSelector, setDateSelector] = useState(date);

  const toggleDatePicker = () => {
    setDatePickerVisibility(!isDatePickerVisible);
  };
  function confirmDate() {
    toggleDatePicker();
    setDate(dateSelector);
  }
  function cancelDate() {
    toggleDatePicker();
    setDateSelector(date);
  }

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

  const sent = () => {
    if (email === '') {
      setEmailError(true);
    }
    if (password === '') {
      setPasswordError(true);
    }
    if (confirm === '') {
      setConfirmError(true);
    }
    if (firstname === '') {
      setFirstnameError(true);
    }
    if (lastname === '') {
      setLastnameError(true);
    }
    if (phone === '') {
      setPhoneError(true);
    }
    if (!isEmailValid()) {
      setEmailError(true);
    } else if (password.length < 8) {
      setPasswordError(true);
    } else if (password != confirm) {
      setConfirmError(true);
    } else if (phone.length < 10 || phone[0] != 0) {
      setPhoneError(true);
    } else if (
      !emailError &&
      !passwordError &&
      !confirmError &&
      !firstnameError &&
      !lastnameError &&
      !phoneError
    ) {
      console.warn('Complete');
      createUser();
    }
  };

  function emailStatus() {
    if (emailError) {
      return '* Please enter a valid email address.';
    } else if (dupEmail) {
      return '* This email is already in-use, please try again.';
    }
  }

  const createUser = async () => {
    axios
      .post(`http://localhost:4000/public/uapi`, {
        email: email,
        firstname: firstname,
        lastname: lastname,
        birthdate: Helper.dateHyphen(date),
        tel_no: phone,
        password: password,
      })
      .then((res) => {
        //console.log(res);
        console.log(res.data.data);
        if (res.data.status === 'OK') {
          Actions.login();
        } else {
          if (res.data.data === 'DUPLICATED EMAIL') {
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
      <StatusBar barStyle='default' />
      <View style={styles.sectionContainerHeader}>
        <Text style={styles.sectionTitlewoNav}>Create Account</Text>
        <TextField
          label='Email'
          error1={emailError}
          error2={dupEmail}
          value={email}
          error={emailStatus()}
          hint='example@address.com'
          onChangeText={handleChange_email}
          autoCapitalize='none'
        />
        <TextField
          label='Password'
          error1={passwordError}
          value={password}
          error='* Please enter a valid password. (At least 8 characters)'
          isPassword={false}
          secureText={false}
          onChangeText={handleChange_password}
          autoCapitalize='none'
        />
        <TextField
          label='Confirm Password'
          error1={confirmError}
          value={confirm}
          error='* Please enter the same password.'
          isPassword={false}
          secureText={false}
          onChangeText={handleChange_confirm}
          autoCapitalize='none'
        />
        <TextField
          label='Firstname'
          error1={firstnameError}
          value={firstname}
          error='* Please enter your firstname.'
          onChangeText={handleChange_firstname}
        />
        <TextField
          label='Lastname'
          error1={lastnameError}
          value={lastname}
          error='* Please enter your lastname.'
          onChangeText={handleChange_lastname}
        />
        <TouchableOpacity onPress={toggleDatePicker}>
          <View pointerEvents='none'>
            <TextField label='Date of birth' value={Helper.dateHyphen(date)} />
          </View>
        </TouchableOpacity>
        <DateModal
          mode='time'
          title='Date of Birth'
          visible={isDatePickerVisible}
          selector={dateSelector}
          handleChange={setDateSelector}
          confirm={confirmDate}
          cancel={cancelDate}
        />
        <TextField
          label='Phone Number'
          error1={phoneError}
          value={phone}
          error='* Please enter a valid phone number.'
          hint='0999999999'
          mask='0999999999'
          onChangeText={handleChange_phone}
          keyboardType='numeric'
        />
        <Text style={styles.sectionDescription}></Text>
        <TouchableHighlight
          style={styles.button}
          underlayColor='none'
          onPress={sent}
        >
          <View>
            <Text style={styles.buttonText}>Register</Text>
          </View>
        </TouchableHighlight>
      </View>
      <Image
        style={styles.bgRegisterPic}
        source={require('../assets/Forms_pana.png')}
      />
    </View>
  );
};

export default Register;
