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

const TabIcon = ({ selected, title }) => {
  return <Text style={{ color: selected ? "red" : "black" }}>{title}</Text>;
};

const Access = () => {
  const [accesses, setAccesses] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:4000/v1/pamapi?user_id=1`).then((res) => {
      setAccesses(res.data.data);
      console.log(res.data.data);
    });
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
    if (parseInt(minutes) - 10 >= 0) {
      //return hours + ":" + minutes + " " + monthNames[month] + " " + day + ", " + year;
      return monthNames[month] + " " + day + ", " + year;
    } else {
      //return hours + ":0" + minutes +" " + monthNames[month] + " " + day + ", " + year;
      return monthNames[month] + " " + day + ", " + year;
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

  return (
    <View style={styles.container}>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionSubtitle}></Text>
        <Text style={styles.sectionTitle}>Access</Text>
        <View style={styles.containerRow}>
          <View style={styles.accessSearchItem1}>
            <TextInput
              style={styles.textbox}
              placeholder={"Search by place name"}
              placeholderTextColor={"#898989"}
            />
          </View>
          <View style={styles.accessSearchItem2}>
            <TouchableHighlight
              style={styles.buttonfilter}
              underlayColor="none"
            >
              <View>
                <Text style={styles.buttonbdrText}>Filter</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
        <View style={{ marginTop: 56 }}>
          <TouchableHighlight
            style={styles.button}
            underlayColor="none"
            onPress={() => Actions.time()}
          >
            <View>
              <Text style={styles.buttonText}>Search</Text>
            </View>
          </TouchableHighlight>
          {accesses.map((access, index) => {
            var valid = dateTime(access.valid_date_time);
            var expired = dateTime(access.expired_date_time);
            var proptype = propTypeName(access.property_type_id);
            var accesstime = mintoH(access.mins_per_usage);

            return (
              <AccessCard
                key={"accesscard" + index}
                propimg={access.property_img}
                proptype={proptype}
                placename={access.property_name}
                address={access.share_qouta}
                valid={valid}
                expire={expired}
                time={accesstime}
              />
            );
          })}
        </View>
      </View>
    </View>
  );
};

const styles1 = StyleSheet.create({});

export default Access;
