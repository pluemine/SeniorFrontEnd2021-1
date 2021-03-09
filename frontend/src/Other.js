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
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, justifyContent: "space-between" }}
    >
      <ImageBackground
        style={styles1.pic}
        source={require("../assets/avatar.jpg")}
        blurRadius={25}
      >
        <View style={styles.accessContainer}>
          <Text style={styles.sectionSubtitle}></Text>
          <Text style={styles.sectionTitle}></Text>
          <View style={styles.otherCenterBlock}>
            <Image
              style={styles.otherAvatar}
              source={require("../assets/avatar.jpg")}
            />
          </View>
          <Text style={styles.otherTitle}>Shim Su-ryeon</Text>
          <Text style={styles.otherDes}>pluem@gmail.com</Text>
        </View>
        <View style={styles.accessCard}>
          <View style={styles.accessContainer}>
            <View style={styles.otherMenuBlock}>
              <TouchableHighlight style={styles.otherMenu} underlayColor="none">
                <View>
                  <Text style={styles.sectionTitle}>$800.20</Text>
                  <Text style={styles.otherMenuTitle}>Wallet</Text>
                  <Text style={styles.otherMenuDes}>
                    Top up or transfer your balance
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
                  <Text style={styles.otherMenuTitle}>Edit Profile</Text>
                  <Text style={styles.otherMenuDes}>
                    Avatar Email Firstname Lastname Password Phone
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
                  <Text style={styles.otherMenuTitle}>Car & License Plate</Text>
                  <Text style={styles.otherMenuDes}>
                    Manage car and license plate
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
                  <Text style={styles.otherMenuTitle}>Payment Methods</Text>
                  <Text style={styles.otherMenuDes}>
                    Manage your payment methods
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
                  <Text style={styles.otherMenuTitle}>Settings</Text>
                  <Text style={styles.otherMenuDes}>Manage your preferences</Text>
                </View>
              </TouchableHighlight>
              <View
                style={{
                  borderBottomColor: "#EEEEEE",
                  borderBottomWidth: 1,
                }}
              />
            </View>
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
                  Sign Out from the system
                </Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
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
