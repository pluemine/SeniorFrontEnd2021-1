import React, { Component, useState, useEffect } from "react";
import * as SecureStore from "expo-secure-store";
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
import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
} from "react-native-indicators";
import { FloatingLabelInput } from "react-native-floating-label-input";

import Register from "./Register";
import Login from "./Login";
import Home from "./Home";
import AccessCard from "./components/AccessCard";

import styles from "./Styles";
import axios from "axios";

const TabIcon = ({ selected, title }) => {
  return <Text style={{ color: selected ? "red" : "black" }}>{title}</Text>;
};

const Access = () => {
  const [accesses, setAccesses] = useState([]);
  const [filteredAccessePlaceName, setFilteredAccessePlaceName] = useState("");
  const [des, setDes] = useState("Loading");

  const getSecureStoreItem = async (key) => {
    return await SecureStore.getItemAsync(key);
  };

  useEffect(() => {
    const getAccess = async () => {
      const token = await SecureStore.getItemAsync("pms_token");
      axios
        .get(`http://localhost:4000/auth/pamapi`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          setAccesses(res.data.data.accesses);
          setDes("No access available");
          console.log("ASDDD",res.data.data.accesses);
        });
    };
    getAccess();
  }, []);

  function dateTime(date_time) {
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    var date = new Date(date_time);
    var day = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    return monthNames[month] + " " + day + ", " + year;
  }

  function dateTimeReal(date_time) {
    var date = new Date(date_time);
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    if (parseInt(day) - 10 >= 0) {
      if (parseInt(month) - 10 >= 0) {
        return "" + year + "-" + month + "-" + day;
      } else {
        return "" + year + "-0" + month + "-" + day;
      }
    } else {
      if (parseInt(month) - 10 >= 0) {
        return "" + year + "-" + month + "-0" + day;
      } else {
        return "" + year + "-0" + month + "-0" + day;
      }
    }
  }

  function propTypeName(prop) {
    const proptype = ["Home", "Supermarket", "Condominium", "Public"];
    return proptype[prop];
  }

  function mintoH(min) {
    if (min / 60 > 1) {
      return min / 60 + " Hours";
    } else {
      return min / 60 + " Hour";
    }
  }

  let screen;
  if (des === "Loading") {
    screen = (
      <View style={styles.sectionContainerScroll}>
        <PulseIndicator color="#78aac2" />
      </View>
    );
  } else if (accesses.length > 0) {
    screen = (
      <ScrollView style={styles.sectionContainerScroll}>
        <View>
          {accesses
            .filter(
              (access) =>
                !filteredAccessePlaceName ||
                filteredAccessePlaceName == "" ||
                String(access["property_name"])
                  .toLowerCase()
                  .includes(filteredAccessePlaceName)
            )
            .map((access, index) => {
              var valid = dateTime(access.valid_date_time);
              var expired = dateTime(access.expired_date_time);
              var proptype = propTypeName(access.property_type_id);
              var accesstime = mintoH(access.mins_per_usage);

              var validReal = dateTimeReal(access.valid_date_time);
              var expireReal = dateTimeReal(access.expired_date_time);

              return (
                <AccessCard
                  key={"accesscard" + index}
                  paid={access.parking_access_id}
                  propimg={access.property_img}
                  proptype={proptype}
                  placename={access.property_name}
                  time={accesstime}
                  valid={valid}
                  expire={expired}
                  validR={validReal}
                  expireR={expireReal}
                />
              );
            })}
        </View>
      </ScrollView>
    );
  } else {
    screen = (
      <View style={styles.sectionContainerScroll}>
        <Image
          style={styles.noDataPic}
          source={require("../assets/No-data-rafiki.png")}
        />
        <Text style={styles.noDataDes}>{des}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="default" />
      <View style={styles.sectionContainerHeader}>
        <Text style={styles.sectionTitlewoNav}>Access</Text>
        <FloatingLabelInput
          label={"Search by place name"}
          containerStyles={styles.textbox}
          customLabelStyles={{
            colorFocused: "#898989",
            colorBlurred: "#898989",
          }}
          inputStyles={{
            color: "#000000",
            paddingHorizontal: 5,
          }}
          leftComponent={
            <Image
              style={{ height: 16, width: 16 }}
              source={require("../assets/icon-search.png")}
            />
          }
          value={filteredAccessePlaceName}
          isPassword={false}
          onChangeText={(text) => setFilteredAccessePlaceName(text)}
          autoCapitalize="none"
        />
      </View>
      {screen}
      <View></View>
    </View>
  );
};

const styles1 = StyleSheet.create({});

export default Access;
