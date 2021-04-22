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
  const { usage_log_id } = props;

  const [data, setData] = useState({});

  useEffect(() => {
    const getUser = async () => {
      const token = await SecureStore.getItemAsync("pms_token");
      axios
        .get(`http://localhost:4000/auth/aapi?id=${usage_log_id}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          console.log(res.data.data.usage_log);
          setData(res.data.data.usage_log);
        });
    };
    getUser();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="default" />
      <ImageBackground
        style={styles.picBg}
        source={require("../assets/parking.jpg")}
      >
        <View style={styles.sectionContainerHeader}>
          <Text style={styles.sectionTitlewoNav}>Parking Info</Text>
        </View>
        <View style={styles.card}>
          <View style={styles.cardContainer}>
            <View style={styles.cardMenuBlock}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.textTitle}>{data.property_id}</Text>
                <Text style={styles.textMenuTitleOrange}>
                  {data.exit_at === null
                    ? "Parking Ongoing"
                    : "Completed"}
                </Text>
              </View>
            </View>
            <TouchableHighlight
              style={styles.cardMenuBlock}
              underlayColor="none"
            >
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
                    <Text style={styles.textMenuTitle}>Fee</Text>
                  </View>
                  <Text style={styles.textMenuTitle}>${data.fees}</Text>
                </View>
              </View>
            </TouchableHighlight>
            <View
              style={{
                borderBottomColor: "#EEEEEE",
                borderBottomWidth: 1,
              }}
            />
            <TouchableHighlight
              style={styles.cardMenuBlock}
              underlayColor="none"
            >
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
                    <Text style={styles.textMenuTitle}>Time used</Text>
                  </View>
                  <Text style={styles.textMenuTitle}>{data.entrance_at}</Text>
                </View>
                <Text style={styles.textMenuTitle}> </Text>
                <Text style={styles.textMenuTitle}>From</Text>
                <Text style={styles.textMenuDes}>{data.entrance_at}</Text>
                <Text style={styles.textMenuTitle}>↓</Text>
                <Text style={styles.textMenuTitle}>Until</Text>
                <Text style={styles.textMenuDes}>sasd</Text>
              </View>
            </TouchableHighlight>
            <View
              style={{
                borderBottomColor: "#EEEEEE",
                borderBottomWidth: 1,
              }}
            />
            <TouchableHighlight
              style={styles.cardMenuBlock}
              underlayColor="none"
            >
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
                    <Text style={styles.textMenuTitle}>License Plate</Text>
                  </View>
                  <Text style={styles.textMenuTitle}>
                    {data.license_plate_category}
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
            <TouchableHighlight
              style={styles.cardMenuBlock}
              underlayColor="none"
            >
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
                    <Text style={styles.textMenuTitleBlue}>Coupon in-use</Text>
                  </View>
                  <Text style={styles.textMenuTitleBlue}>
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

const styles1 = StyleSheet.create({});

export default Parking;
