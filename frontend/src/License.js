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

const License = () => {
  return (
    <View style={styles.container}>
      <View style={styles.sectionContainer}>
        <View>
          <Text style={styles.sectionSubtitle}></Text>
          <Text style={styles.sectionTitlewoNav}>License Plate</Text>
          <View style={styles.licenseCard}>
            <View style={styles.licenseCardBlock}>
              <View style={styles.licenseColContainer}>
                <View style={styles.licenseCol40}></View>
                <View style={styles.licenseCol60}>
                  <View>
                    <Text style={styles.licenseTitle}>กข 1234</Text>
                    <Text style={styles.licenseProvince}>กรุงเทพมหานคร</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.sectionContainerButton}>
        <TouchableHighlight
          style={styles.button}
          underlayColor="none"
          onPress={() => Actions.push("addlc")}
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
