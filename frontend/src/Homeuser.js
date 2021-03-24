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

import styles from "./Styles";
import axios from "axios";

const Homeuser = () => {
  return (
    <View style={styles.container}>
      <View style={styles.sectionContainer}>
        <View>
          <Text style={styles.sectionSubtitle}></Text>
          <Text style={styles.sectionTitlewoNav}>Hello, User</Text>
          <View style={styles.homeuserBalanceCard}>
            <Text style={styles.cardHeaderColor}>Your Balance</Text>
            <Text style={styles.cardTitle}>$800.20</Text>
          </View>
          <Text style={styles.homeuserTitle}>Shortcut</Text>
          <View style={styles.homeuserShortcutBlock}>
            <View style={styles.homeuserColContainer}>
              <View style={styles.homeuserCol33}>
                <TouchableHighlight
                  underlayColor="none"
                  style={styles.homeuserShortcutCard}
                  onPress={() => Actions.push("license")}
                >
                  <Text style={styles.textbold}>My car</Text>
                </TouchableHighlight>
              </View>
              <View style={styles.homeuserCol33}>
                <TouchableHighlight
                  underlayColor="none"
                  style={styles.homeuserShortcutCard}
                  onPress={() => Actions.push("accesshome")}
                >
                  <Text style={styles.textbold}>Payment</Text>
                </TouchableHighlight>
              </View>
              <View style={styles.homeuserCol33}>
                <TouchableHighlight
                  underlayColor="none"
                  style={styles.homeuserShortcutCard}
                  onPress={() => Actions.push("accesshome")}
                >
                  <Text style={styles.textbold}>Top up</Text>
                </TouchableHighlight>
              </View>
            </View>
          </View>
          <Text style={styles.homeuserTitle}>Nearby Parking</Text>
        </View>
      </View>
    </View>
  );
};

const styles1 = StyleSheet.create({});

export default Homeuser;
