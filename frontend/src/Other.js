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

const Other = () => {
  return (
    <View style={styles.container}>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionSubtitle}></Text>
        <Text style={styles.sectionTitle}>Other</Text>
        <View style={styles.otherCenterBlock}>
          <Image
            style={styles.otherAvatar}
            source={require("../assets/avatar.jpg")}
          />
        </View>
        <Text style={styles.otherTitle}>Firstname Lastname</Text>
        <Text style={styles.otherDes}>example@address.com</Text>
        <View style={styles.otherMenuBlock}>
          <TouchableHighlight style={styles.otherMenu} underlayColor="none">
            <View>
              <Text style={styles.otherMenuTitle}>Edit Profile</Text>
              <Text style={styles.otherMenuDes}>
                Avatar Email Firstname Lastname Password Phone
              </Text>
            </View>
          </TouchableHighlight>
          <View
            style={{
              borderBottomColor: "#C4C4C4",
              borderBottomWidth: 1,
            }}
          />
          <TouchableHighlight style={styles.otherMenu} underlayColor="none">
            <View>
              <Text style={styles.otherMenuTitle}>Activity</Text>
              <Text style={styles.otherMenuDes}>Ongoing and Activity</Text>
            </View>
          </TouchableHighlight>
          <View
            style={{
              borderBottomColor: "#C4C4C4",
              borderBottomWidth: 1,
            }}
          />
        </View>
      </View>
      <View style={styles.sectionContainer}>
        <View
          style={{
            borderBottomColor: "#C4C4C4",
            borderBottomWidth: 1,
          }}
        />
        <TouchableHighlight
          style={styles.otherMenuRed}
          onPress={() => Actions.replace("home")}
          underlayColor="none"
        >
          <View>
            <Text style={styles.otherMenuTitleRed}>Sign Out</Text>
            <Text style={styles.otherMenuDes}>Sign Out from the system</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles1 = StyleSheet.create({});

export default Other;
