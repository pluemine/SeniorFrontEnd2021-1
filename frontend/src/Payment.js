import React, { Component, useState } from "react";
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
} from "react-native";
import styles from "./Styles";
import axios from "axios";
import { FloatingLabelInput } from "react-native-floating-label-input";

const Payment = () => {

  return (
    <View style={styles.body}>
      <View style={styles.sectionContainer}>
        <View style={styles.mainarea}>
          <Text style={styles.sectionSubtitle}></Text>
          <Text style={styles.sectionTitle}>Payment</Text>
        </View>
      </View>
      <View style={{flex: 1}}>
        <Text style={styles.sectionSubtitle,{flex: 1, backgroundColor: 'skyblue'}} >
            HHH
        </Text>
        <Text style={styles.sectionTitle,{flex: 1, backgroundColor: 'skyblue'}} >
            Payment
        </Text>
      </View>
    </View>
  );
};

const styles1 = StyleSheet.create({});

export default Payment;
