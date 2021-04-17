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

import Register from "./Register";
import Login from "./Login";
import Home from "./Home";
import AccessCard from "./components/AccessCard";
import PaymentCard from "./components/PaymentCard";

import styles from "./Styles";
import axios from "axios";
import { exp } from "react-native-reanimated";
import parseErrorStack from "react-native/Libraries/Core/Devtools/parseErrorStack";

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

  const goAddCard = (event) => {
    if (payments.length <= 4 && des != "Loading") {
      Actions.addcard({ set: setPayments });
    }
  };

  let screen;
  if (des === "Loading") {
    screen = (
      <View style={styles.sectionContainerScroll}>
        <PulseIndicator color="#78aac2" />
      </View>
    );
  } else if (licenses.length > 0) {
    screen = (
      <ScrollView style={styles.sectionContainerScroll}>
        <View>
          {payments.map((payment, index) => {
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
          })}
        </View>
      </ScrollView>
    );
  } else {
    screen = (
      <View>
        <Image
          style={styles.noDataPic}
          source={require("../assets/pic-addcard.png")}
        />
        <Text style={styles.noDataDes}>{des}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="default" />
      <View style={styles.sectionContainerHeader}>
        <Text style={styles.sectionTitlewoNav}>Payment Method</Text>
      </View>
      {screen}
      <View style={styles.sectionContainerButton}>
        {des != "Loading" ? (
          <TouchableHighlight
            style={payments.length < 4 ? styles.button : styles.buttonDisable}
            underlayColor="none"
            /*onPress={() => Actions.addcard({set: setPayments})}*/
            onPress={() => goAddCard()}
          >
            <View>
              <Text style={styles.buttonText}>Add new credit / debit card</Text>
            </View>
          </TouchableHighlight>
        ) : (
          <View></View>
        )}
      </View>
    </View>
  );
};

const styles1 = StyleSheet.create({});

export default Payment;
