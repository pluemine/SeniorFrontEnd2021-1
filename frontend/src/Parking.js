import React, { Component, useState, useEffect } from "react";
import * as SecureStore from "expo-secure-store";
import { Actions } from "react-native-router-flux";
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
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";

import styles from "./Styles";
import axios from "axios";

const Parking = (props) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="default" />
      <ImageBackground
        style={styles1.pic}
        source={require("../assets/parking.jpg")}
      >
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitlewoNav}>Parking Info</Text>
        </View>
        <View style={styles.accessCard}>
          <View style={styles.accessContainer}>
            <View style={styles.otherMenu}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.cardTitle}>Central World</Text>
                <Text style={styles.otherMenuTitleOrange}>Parking Ongoing</Text>
              </View>
            </View>
            <TouchableHighlight style={styles.otherMenu} underlayColor="none">
              <View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image
                      style={{ width: 25, height: 25, marginRight: 10 }}
                      source={require("../assets/icon-fee.png")}
                    />
                    <Text style={styles.otherMenuTitle}>Fee</Text>
                  </View>
                  <Text style={styles.otherMenuTitle}>$20.08</Text>
                </View>
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
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image
                      style={{ width: 25, height: 25, marginRight: 10 }}
                      source={require("../assets/icon-clock.png")}
                    />
                    <Text style={styles.otherMenuTitle}>Time used</Text>
                  </View>
                  <Text style={styles.otherMenuTitle}>2 hours</Text>
                </View>
                <Text style={styles.otherMenuTitle}> </Text>
                <Text style={styles.otherMenuTitle}>From</Text>
                <Text style={styles.otherMenuDes}>Fri 20 Jan 10.00</Text>
                <Text style={styles.otherMenuTitle}>↓</Text>
                <Text style={styles.otherMenuTitle}>Until</Text>
                <Text style={styles.otherMenuDes}>Fri 20 Jan 12.00</Text>
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
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image
                      style={{ width: 25, height: 20, marginRight: 10 }}
                      source={require("../assets/icon-lc.png")}
                    />
                    <Text style={styles.otherMenuTitle}>License Plate</Text>
                  </View>
                  <Text style={styles.otherMenuTitle}>
                    งง 5555 กรุงเทพมหานคร
                  </Text>
                </View>
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
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image
                      style={{ width: 25, height: 14, marginRight: 10 }}
                      source={require("../assets/icon-coupon-focus.png")}
                    />
                    <Text style={styles.otherMenuTitleBlue}>Coupon in-use</Text>
                  </View>
                  <Text style={styles.otherMenuTitleBlue}>
                    Central World x0010
                  </Text>
                </View>
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
  },
  pic1: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
});

export default Parking;
