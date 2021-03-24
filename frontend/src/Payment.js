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

import styles from "./Styles";
import axios from "axios";

const TabIcon = ({ selected, title }) => {
  return <Text style={{ color: selected ? "red" : "black" }}>{title}</Text>;
};

const Payment = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.sectionContainer}>
        <Text style={styles.sectionSubtitle}></Text>
        <Text style={styles.sectionTitle}>Add Card</Text>
        <TouchableHighlight
          style={styles.otherMenu}
          underlayColor="none"
          onPress={() => Actions.push("payment")}
        >
          <View>
            <Text style={styles.otherMenuTitle}>Add card</Text>
            <Text style={styles.otherMenuDes}>Manage your payment methods</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          underlayColor="none"
          onPress={() => Actions.pop()}
        >
          <View>
            <Text style={styles.buttonText}>Back</Text>
          </View>
        </TouchableHighlight>
      </ScrollView>
    </View>
  );
};

const styles1 = StyleSheet.create({});

export default Payment;
