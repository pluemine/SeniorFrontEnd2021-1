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
  Image,
} from "react-native";
import styles from "./Styles";
import axios from "axios";
import { FloatingLabelInput } from "react-native-floating-label-input";

const Settings = () => {
  return (
    <View style={styles.body}>
      <View style={styles.sectionContainer}>
        <View style={styles.mainarea}>
          <Text style={styles.sectionSubtitle}></Text>
          <Text style={styles.sectionTitle}>Other</Text>
          <View style={styles1.content}>
            <Image
              style={styles1.logo}
              source={require("../assets/logo.png")}
            />
          </View>
          <Text style={styles.othertitle}>Firstname Lastname</Text>
          <Text style={styles.otherdes}>example@address.com</Text>
          <View style={styles.buttoncardblock}>
            <TouchableHighlight style={styles.buttoncard}>
              <View>
                <Text style={styles.buttoncardtitle}>Edit Profile</Text>
                <Text style={styles.buttoncarddes}>
                  Avatar Email Firstname Lastname Password Phone
                </Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={styles.buttoncard}>
              <View>
                <Text style={styles.buttoncardtitle}>Activity</Text>
                <Text style={styles.buttoncarddes}>Ongoing and Activity</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.buttoncard}
              onPress={() => Actions.replace("home")}
              underlayColor="none"
            >
              <View>
                <Text style={styles.buttoncardtitlered}>Sign Out</Text>
                <Text style={styles.buttoncarddes}>
                  Sign Out from the system
                </Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles1 = StyleSheet.create({
  col30: {
    width: "30%",
    height: 100,
    justifyContent: "center",
    flex: 1,
    flexDirection: "column",
  },
  col50: {
    width: "50%",
    paddingHorizontal: 4,
  },
  col70: {
    width: "70%",
    height: 100,
    justifyContent: "center",
    flex: 1,
    flexDirection: "column",
  },
  item: {
    width: "100%",
    //height: 100,
    textAlign: "center",
  },
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start", // if you want to fill rows left to right
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: "stretch",
  },
  icon: {
    width: 50,
    height: 50,
    resizeMode: "stretch",
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
  },
  cardDes: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
});

export default Settings;
