import React, { Component, useState, useEffect } from "react";
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
import MyCheckBox from "./components/MyCheckBox";
import TextField from "./components/TextField";

import styles from "./Styles";
import axios from "axios";

const Addcard = (props) => {
  const { isFirst } = props;

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [expire, setExpire] = useState("");
  const [cvv, setCvv] = useState("");
  const [brand, setBrand] = useState("nobrand");

  const [nameError, setNameError] = useState(false);
  const [numberError, setNumberError] = useState(false);
  const [expireError, setExpireError] = useState(false);
  const [cvvError, setCvvError] = useState(false);

  const [toggleCheckBox, setToggleCheckBox] = useState(true);

  const handleChange_name = (event) => {
    setName(event);
    setNameError(false);
  };
  const handleChange_number = (event) => {
    if (number[0] == "3") {
      setBrand("jcb");
    } else if (number[0] == "4") {
      setBrand("visa");
    } else if (number[0] == "5") {
      setBrand("mastercard");
    } else {
      setBrand("nobrand");
    }
    setNumber(event);
    setNumberError(false);
  };
  const handleChange_expire = (event) => {
    setExpire(event);
    setExpireError(false);
  };
  const handleChange_cvv = (event) => {
    setCvv(event);
    setCvvError(false);
  };

  function namebrand() {
    if (brand == "jcb") {
      return require("../assets/icon-jcb.png");
    } else if (brand == "visa") {
      return require("../assets/icon-visa.png");
    } else if (brand == "mastercard") {
      return require("../assets/icon-mastercard.png");
    } else {
      return require("../assets/icon-nocard.png");
    }
  }

  const addCard = async () => {
    const token = await SecureStore.getItemAsync("pms_token");
    console.log(parseInt(expire.substring(0, 2)));
    console.log(parseInt(expire.substring(3, 7)));
    console.log(number.toString());
    console.log(cvv.toString());
    axios
      .post(
        `http://localhost:4000/auth/capi/card`,
        {
          credit_card_number: number.toString(),
          exp_month: parseInt(expire.substring(0, 2)),
          exp_year: parseInt(expire.substring(3, 7)),
          security_code: cvv.toString(),
          is_primary: toggleCheckBox,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((res) => {
        console.log(res);
        console.log(res.data);
        if (res.data.status === "OK") {
          Actions.pop();
          setTimeout(() => {
            Actions.refresh({ key: Math.random() });
          }, 500);
        }
      });
  };

  const sent = () => {
    if (name === "") {
      setNameError(true);
    }
    if (number === "") {
      setNumberError(true);
    }
    if (expire === "") {
      setExpireError(true);
    }
    if (cvv === "") {
      setCvvError(true);
    }
    if (name === "") {
      setNameError(true);
    } else if (number.length < 16) {
      setNumberError(true);
    } else if (expire.length < 7) {
      setExpireError(true);
    } else if (cvv.length < 3) {
      setCvvError(true);
    } else if (!nameError && !numberError && !expireError && !cvvError) {
      addCard();
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="default" />
      <View style={styles.sectionContainerHeader}>
        <Text style={styles.sectionTitlewoNav}>Add Card</Text>
        <TextField
          label="Cardholder Name"
          error1={nameError}
          value={name}
          error="* Please enter a valid cardholder name."
          hint="Firstname Lastname"
          onChangeText={handleChange_name}
          autoCapitalize="none"
        />
        <TextField
          label="Card Number"
          error1={numberError}
          value={number}
          error="* Please enter a valid card number."
          hint="0000000000000000"
          mask="9999999999999999"
          onChangeText={handleChange_number}
          autoCapitalize="none"
          keyboardType="numeric"
          leftComponent={
            <Image style={{ height: 30, width: 30 }} source={namebrand()} />
          }
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{width: "38%"}}>
            <TextField
              label="Expire"
              error1={expireError}
              value={expire}
              error="* Incorrect"
              hint="12/2021"
              mask="99/9999"
              onChangeText={handleChange_expire}
              autoCapitalize="none"
              keyboardType="numeric"
            />
          </View>
          <View style={{width: "64%"}}>
            <TextField
              label="cvv"
              error1={cvvError}
              value={cvv}
              error="* Incorrect"
              hint="123"
              mask="999"
              onChangeText={handleChange_cvv}
              autoCapitalize="none"
              keyboardType="numeric"
            />
          </View>
        </View>
        <MyCheckBox
          title="Set as primary card"
          value={toggleCheckBox}
          disabled={isFirst}
          onValueChange={setToggleCheckBox}
        />
        <TouchableHighlight
          style={styles.button}
          underlayColor="none"
          onPress={sent}
        >
          <View>
            <Text style={styles.buttonText}>Add card</Text>
          </View>
        </TouchableHighlight>
      </View>
      <Image
        style={styles.bgCardPic}
        source={require("../assets/pic-addcard.png")}
      />
    </View>
  );
};

const styles1 = StyleSheet.create({});

export default Addcard;
