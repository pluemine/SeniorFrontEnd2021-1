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

const Activity = () => {
  return (
    <View style={styles.container}>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionSubtitle}></Text>
        <Text style={styles.sectionTitle}>Activity</Text>
      </View>
    </View>
  );
};

const styles1 = StyleSheet.create({});

export default Activity;
