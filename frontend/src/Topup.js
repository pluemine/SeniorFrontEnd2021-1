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
  TouchableOpacity,
  Image,
} from "react-native";
import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
} from "react-native-indicators";

import TextField from "./components/TextField";
import CardModal from "./components/CardModal";

import styles from "./Styles";
import axios from "axios";

const Topup = (props) => {
  const { credit } = props;

  const [balance, setBalance] = useState(
    parseFloat(credit.substring(1, credit.length))
  );
  const [amount, setAmount] = useState(0);
  const [des, setDes] = useState("Loading");

  const [value, setValue] = useState("");
  const [customvalue, setCustomValue] = useState("");
  const [card, setCard] = useState("เลือกบัตร");
  const [cardSelector, setCardSelector] = useState("");

  const [valueError, setValueError] = useState(false);
  const [cardError, setCardError] = useState(false);

  const [isModalVisible, setModalVisible] = useState(false);

  const [data, setData] = useState([]);
  const [buttonDis, setButtonDis] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const token = await SecureStore.getItemAsync("pms_token");
      axios
        .get(`http://localhost:4000/auth/capi/cards`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          setData(res.data.data.creditCards);
          console.log(res.data.data.creditCards);
          setDes("No Card Found");
        });
    };
    getData();
  }, []);

  const topUp = async () => {
    const token = await SecureStore.getItemAsync("pms_token");
    await axios
      .post(
        `http://localhost:4000/auth/pmapi`,
        {
          cid: card,
          amount: amount,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
        console.log(card, amount);
        if (res.data.status === "OK") {
          setTimeout(() => {
            Actions.pop();
            Actions.refresh({ key: Math.random() });
          }, 500);
        }
      })
      .catch((error) => console.log(error));
  };

  const setPrice = (event) => {
    if (event === "none" || event === "custom") {
      setAmount(0);
    } else {
      setAmount(parseInt(event));
    }
    setValue(event);
    setValueError(false);
    if (card != "เลือกบัตร" && event != "custom") {
      setButtonDis(false);
    } else if (event === "custom") {
      setButtonDis(true);
    }
  };

  const setCustom = (event) => {
    if (!event.includes(".")) {
      setCustomValue(event);
    }
    if (parseFloat(event) >= 20 && parseFloat(event) <= 5000) {
      setAmount(parseFloat(event));
      setValueError(false);
      if (card != "เลือกบัตร") {
        setButtonDis(false);
      }
    } else {
      setAmount(0);
      setValueError(true);
      setButtonDis(true);
    }
    console.log(parseFloat(event));
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleChange_cardSelector = (event) => {
    setCardSelector(event);
  };

  function confirmCard() {
    toggleModal();
    setCard(cardSelector);
    setCardError(false);
    if (amount > 0) {
      setButtonDis(false);
    }
  }

  function cancelCard() {
    toggleModal();
    if (card === "เลือกบัตร") {
      setCardSelector("");
    } else {
      setCardSelector(card);
    }
  }

  let screen;
  if (des === "Loading") {
    screen = <View style={styles.cardMenuBlockSpace}></View>;
  } else if (data.length < 1) {
    screen = (
      <View style={styles.cardMenuBlockSpace}>
        <Text style={styles.textSubtitle}>No card found</Text>
        <Text style={styles.textMenuDes}>Please add a new card first.</Text>
      </View>
    );
  } else {
    screen = (
      <View>
        <View style={styles.cardMenuBlockSpace}>
          <Text style={styles.textSubtitle}>Select your card</Text>
        </View>
        <TouchableOpacity onPress={toggleModal}>
          <View pointerEvents="none">
            <TextField
              label="Select Card"
              error1={cardError}
              value={card}
              error="* Please select your card."
              autoCapitalize="none"
            />
          </View>
        </TouchableOpacity>
        <CardModal
          data={data}
          visible={isModalVisible}
          selector={cardSelector}
          handleChange={handleChange_cardSelector}
          confirm={confirmCard}
          cancel={cancelCard}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="default" />
      <View style={styles.sectionContainerHeader}>
        <Text style={styles.sectionTitlewoNav}>Topup</Text>
        <View style={styles.cardShow}>
          <View style={styles.cardContainer}>
            <Text style={styles.textHeaderBlue}>Your Balance</Text>
            <Text style={styles.textTitle}>
              ฿{balance} → ฿{balance + amount}
            </Text>
          </View>
        </View>
        <View style={styles.cardMenuBlockSpace}>
          <Text style={styles.textSubtitle}>Select the amount</Text>
        </View>

        <View
          style={{
            marginBottom: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <TouchableHighlight
            underlayColor="none"
            style={
              value === "20" ? styles.buttonPickerSelect : styles.buttonPicker
            }
            onPress={() => setPrice("20")}
          >
            <Text
              style={
                value === "20"
                  ? styles.textButtonPickerSelect
                  : styles.textButtonPicker
              }
            >
              20
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor="none"
            style={
              value === "50" ? styles.buttonPickerSelect : styles.buttonPicker
            }
            onPress={() => setPrice("50")}
          >
            <Text
              style={
                value === "50"
                  ? styles.textButtonPickerSelect
                  : styles.textButtonPicker
              }
            >
              50
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor="none"
            style={
              value === "100" ? styles.buttonPickerSelect : styles.buttonPicker
            }
            onPress={() => setPrice("100")}
          >
            <Text
              style={
                value === "100"
                  ? styles.textButtonPickerSelect
                  : styles.textButtonPicker
              }
            >
              100
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor="none"
            style={
              value === "200" ? styles.buttonPickerSelect : styles.buttonPicker
            }
            onPress={() => setPrice("200")}
          >
            <Text
              style={
                value === "200"
                  ? styles.textButtonPickerSelect
                  : styles.textButtonPicker
              }
            >
              200
            </Text>
          </TouchableHighlight>
        </View>
        <View
          style={{
            marginBottom: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <TouchableHighlight
            underlayColor="none"
            style={
              value === "500" ? styles.buttonPickerSelect : styles.buttonPicker
            }
            onPress={() => setPrice("500")}
          >
            <Text
              style={
                value === "500"
                  ? styles.textButtonPickerSelect
                  : styles.textButtonPicker
              }
            >
              500
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor="none"
            style={
              value === "1000" ? styles.buttonPickerSelect : styles.buttonPicker
            }
            onPress={() => setPrice("1000")}
          >
            <Text
              style={
                value === "1000"
                  ? styles.textButtonPickerSelect
                  : styles.textButtonPicker
              }
            >
              1000
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor="none"
            style={
              value === "2000" ? styles.buttonPickerSelect : styles.buttonPicker
            }
            onPress={() => setPrice("2000")}
          >
            <Text
              style={
                value === "2000"
                  ? styles.textButtonPickerSelect
                  : styles.textButtonPicker
              }
            >
              2000
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor="none"
            style={
              value === "custom"
                ? styles.buttonPickerSelect
                : styles.buttonPicker
            }
            onPress={() => setPrice("custom")}
          >
            <Text
              style={
                value === "custom"
                  ? styles.textButtonPickerSelect
                  : styles.textButtonPicker
              }
            >
              Custom
            </Text>
          </TouchableHighlight>
        </View>
        {value === "custom" ? (
          <View>
            <TextField
              label="Specify value"
              error1={valueError}
              value={customvalue}
              error="* Please enter a valid amount."
              hint="20 - 5000"
              onChangeText={(event) => setCustom(event)}
              autoCapitalize="none"
              keyboardType="numeric"
            />
          </View>
        ) : null}
        {screen}
      </View>
      <View style={styles.sectionContainerButton}>
        <TouchableHighlight
          style={buttonDis ? styles.buttonDisable : styles.button}
          underlayColor="none"
          disabled={buttonDis}
          onPress={topUp}
        >
          <View>
            <Text style={styles.buttonText}>Pay</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles1 = StyleSheet.create({});

export default Topup;
