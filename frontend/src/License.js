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
import LicenseCard from "./components/LicenseCard";

import styles from "./Styles";
import axios from "axios";

const License = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="default" />
      <View style={styles.sectionContainer}>
        <View>
          <Text style={styles.sectionSubtitle}></Text>
          <Text style={styles.sectionTitlewoNav}>License Plate</Text>
          {[
            { cat: "กข", number: "9999", province: "กรุงเทพมหานคร", default: false },
            { cat: "งง", number: "5555", province: "นครนายก", default: false },
          ].map((license, index) => {
            return (
              <LicenseCard
                key={"licensecard" + index}
                cat={license.cat}
                number={license.number}
                province={license.province}
                def={license.default}
              />
            );
          })}
        </View>
      </View>
      <View style={styles.sectionContainerButton}>
        <TouchableHighlight
          style={styles.button}
          underlayColor="none"
          onPress={() => Actions.addlc()}
        >
          <View>
            <Text style={styles.buttonText}>Add new license plate</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles1 = StyleSheet.create({});

export default License;
