import React, { Component, useState, useEffect } from "react";
import * as SecureStore from 'expo-secure-store';
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
  Image,
} from "react-native";
import { Router, Scene } from "react-native-router-flux";
import { FloatingLabelInput } from "react-native-floating-label-input";

import Register from "./Register";
import Login from "./Login";
import Home from "./Home";
import AccessCard from "./components/AccessCard";

import styles from "./Styles";
import axios from "axios";
import { exp } from "react-native-reanimated";

const Addcard = (props) => {
  const { set } = props

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [expire, setExpire] = useState("");
  const [cvv, setCvv] = useState("");
  const [brand, setBrand] = useState("nobrand");

  const handleChange_name = (event) => {
    setName(event);
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
  };
  const handleChange_expire = (event) => {
    setExpire(event);
  };
  const handleChange_cvv = (event) => {
    setCvv(event);
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
    const token = await SecureStore.getItemAsync('pms_token');
    console.log(parseInt(expire.substring(0,2)));
    console.log(parseInt(expire.substring(3,7)));
    console.log(number.toString());
    console.log(cvv.toString());
    axios
      .post(`http://localhost:4000/auth/uapi/creditCard`, {
        credit_card_number: number.toString(),
        exp_month: parseInt(expire.substring(0,2)),
        exp_year: parseInt(expire.substring(3,7)),
        security_code: cvv.toString(),
      },
      { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((res) => {
        console.log(res);
        console.log(res.data);
        if (res.data.status === "OK") {
          set(prev => {return [...prev, res.data]})
          //Actions.popTo('homehome');
          //Actions.payment();
          console.log(res.data)
          Actions.pop();
        }
      });
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="default" />
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitlewoNav}>Add Card</Text>
        <FloatingLabelInput
          label={"Cardholder Name"}
          containerStyles={styles.textbox}
          customLabelStyles={{
            colorFocused: "#898989",
            colorBlurred: "#898989",
          }}
          inputStyles={{
            color: "#000000",
            paddingHorizontal: 5,
          }}
          value={name}
          hint="Firstname Lastname"
          isPassword={false}
          secureTextEntry={false}
          autoCompleteType={"off"}
          onChangeText={handleChange_name}
          autoCapitalize="none"
        />
        <Text> </Text>
        <FloatingLabelInput
          label={"Card Number"}
          containerStyles={styles.textbox}
          customLabelStyles={{
            colorFocused: "#898989",
            colorBlurred: "#898989",
          }}
          inputStyles={{
            color: "#000000",
            paddingHorizontal: 5,
          }}
          leftComponent={
            <Image style={{ height: 30, width: 30 }} source={namebrand()} />
          }
          value={number}
          hint="0000000000000000"
          mask="9999999999999999"
          isPassword={false}
          secureTextEntry={false}
          keyboardType="numeric"
          autoCompleteType={"off"}
          onChangeText={handleChange_number}
          autoCapitalize="none"
        />
        <Text> </Text>
        <View style={styles.licenseBlock}>
          <View style={styles.licenseColContainer}>
            <View style={styles.licenseCol30}>
              <FloatingLabelInput
                label={"Expire"}
                containerStyles={styles.textbox}
                customLabelStyles={{
                  colorFocused: "#898989",
                  colorBlurred: "#898989",
                }}
                inputStyles={{
                  color: "#000000",
                  paddingHorizontal: 5,
                }}
                value={expire}
                hint="12/2021"
                mask="99/9999"
                isPassword={false}
                keyboardType="numeric"
                onChangeText={handleChange_expire}
                autoCapitalize="none"
              />
              <Text style={styles.texterror}> </Text>
            </View>
            <View style={styles.licenseCol70}>
              <FloatingLabelInput
                label={"cvv"}
                containerStyles={styles.textbox}
                customLabelStyles={{
                  colorFocused: "#898989",
                  colorBlurred: "#898989",
                }}
                inputStyles={{
                  color: "#000000",
                  paddingHorizontal: 5,
                }}
                value={cvv}
                hint="123"
                mask="999"
                isPassword={false}
                secureTextEntry={false}
                keyboardType="numeric"
                autoCompleteType={"off"}
                onChangeText={handleChange_cvv}
                autoCapitalize="none"
              />
              <Text style={styles.texterror}> </Text>
            </View>
          </View>
        </View>
        <TouchableHighlight
          style={styles.button}
          underlayColor="none"
          onPress={addCard}
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
