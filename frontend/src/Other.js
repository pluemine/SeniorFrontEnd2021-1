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
  ImageBackground,
} from "react-native";
import styles from "./Styles";
import axios from "axios";
import { FloatingLabelInput } from "react-native-floating-label-input";

const Other = () => {
  return (
    <View
      contentContainerStyle={{ flexGrow: 1, justifyContent: "space-between" }}
    >
      <StatusBar barStyle="default" />
      <ImageBackground
        style={styles1.pic}
        source={require("../assets/cloud.jpg")}
      >
        <View style={styles.accessContainer} />
        <View style={styles.accessCard}>
          <View style={styles.accessContainer}>
            <View style={styles.otherMenu}>
              <View style={styles.otherCenterBlock}>
                <Image
                  style={styles.otherAvatar}
                  source={require("../assets/avatar.jpg")}
                />
              </View>
              <Text style={styles.otherTitle}>Pluemine User</Text>
              <Text style={styles.otherDes}>pluem@gmail.com</Text>
            </View>
            {/*<View style={styles.otherMenu}>
              <Text style={styles.cardTitle}>$800.20</Text>
            </View>*/}
            <TouchableHighlight style={styles.otherMenu} underlayColor="none">
              <View>
                <Text style={styles.otherMenuTitle}>Wallet</Text>
                <Text style={styles.otherMenuDes}>Top up your balance</Text>
              </View>
            </TouchableHighlight>
            <View
              style={{
                borderBottomColor: "#EEEEEE",
                borderBottomWidth: 1,
              }}
            />
            <TouchableHighlight style={styles.otherMenu} underlayColor="none">
              <View>
                <Text style={styles.otherMenuTitle}>Edit Profile</Text>
                <Text style={styles.otherMenuDes}>
                  Change your profile and contact
                </Text>
              </View>
            </TouchableHighlight>
            <View
              style={{
                borderBottomColor: "#EEEEEE",
                borderBottomWidth: 1,
              }}
            />
            <TouchableHighlight style={styles.otherMenu} underlayColor="none">
              <View>
                <Text style={styles.otherMenuTitle}>My Car</Text>
                <Text style={styles.otherMenuDes}>Manage your license plates</Text>
              </View>
            </TouchableHighlight>
            <View
              style={{
                borderBottomColor: "#EEEEEE",
                borderBottomWidth: 1,
              }}
            />
            <TouchableHighlight style={styles.otherMenu} underlayColor="none">
              <View>
                <Text style={styles.otherMenuTitle}>Payment Methods</Text>
                <Text style={styles.otherMenuDes}>Manage your cards</Text>
              </View>
            </TouchableHighlight>
            <View
              style={{
                borderBottomColor: "#EEEEEE",
                borderBottomWidth: 1,
              }}
            />
          </View>
          <View style={styles.accessContainer}>
            <View
              style={{
                borderBottomColor: "#EEEEEE",
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
                <Text style={styles.otherMenuDes}>
                  Sign out from the system
                </Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles1 = StyleSheet.create({
  pic: {
    width: "100%",
    height: "100%",
    justifyContent: "space-between",
    backgroundColor: "rgba(255,255,255,0.92)",
  },
});

export default Other;
