import React, { Component, useState, useEffect } from "react";
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

const Payment = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="default" />
      <View style={styles.sectionContainer}>
        <View>
          <Text style={styles.sectionSubtitle}></Text>
          <Text style={styles.sectionTitlewoNav}>Payment Method</Text>
          {[
            { card: "4417 71xx xxxx 8888", exp: "12/22", default: true },
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
          })}
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
