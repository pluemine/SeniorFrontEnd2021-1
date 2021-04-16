import React, { Component, useState, useEffect } from "react";
import * as SecureStore from "expo-secure-store";
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

import Register from "./Register";
import Login from "./Login";
import Home from "./Home";
import AccessCard from "./components/AccessCard";
import PaymentCard from "./components/PaymentCard";

import styles from "./Styles";
import axios from "axios";
import { exp } from "react-native-reanimated";

const Payment = () => {
  const [payments, setPayments] = useState([]);
  const [des, setDes] = useState("Loading");

  useEffect(() => {
    const getPayment = async () => {
      const token = await SecureStore.getItemAsync("pms_token");
      axios
        .get(`http://localhost:4000/auth/uapi/creditCards`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          setPayments(res.data.data.creditCards);
          console.log(res.data.data.creditCards);
          setDes("No Payment Method");
        });
    };
    getPayment();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="default" />
      <View style={styles.sectionContainer}>
        <View>
          <Text style={styles.sectionSubtitle}></Text>
          <Text style={styles.sectionTitlewoNav}>Payment Method</Text>
          {/*[
            { card: "4417 70xx xxxx 8888", exp: "12/22", default: true },
            { card: "4417 70xx xxxx 9999", exp: "01/22", default: false },
          ].map((card, index) => {
            return (
              <PaymentCard
                key={"licensecard" + index}
                card={card.card}
                exp={card.exp}
                def={card.default}
              />
            );
          })*/}
          {payments.length > 0 ? (
            payments.map((payment, index) => {
              var expmth = "";
              if (payment.exp_month.toString().length == 1) {
                expmth = "0" + payment.exp_month.toString();
              } else {
                expmth = payment.exp_month.toString();
              }
              return (
                <PaymentCard
                  key={"paymentcard" + index}
                  number={payment.credit_card_number}
                  expiremonth={expmth}
                  expireyear={payment.exp_year.toString()}
                  def={false}
                  pcid={payment.credit_card_id}
                />
              );
            })
          ) : (
            <View>
              <Image
                style={styles.noDataPic}
                source={require("../assets/pic-addcard.png")}
              />
              <Text style={styles.noDataDes}>{des}</Text>
            </View>
          )}
        </View>
      </View>
      <View style={styles.sectionContainerButton}>
        <TouchableHighlight
          style={styles.button}
          underlayColor="none"
          onPress={() => Actions.addcard()}
        >
          <View>
            <Text style={styles.buttonText}>Add new credit / debit card</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles1 = StyleSheet.create({});

export default Payment;
