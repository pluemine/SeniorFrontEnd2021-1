import React, { Component, useState, useEffect } from "react";
import { Actions } from "react-native-router-flux";
import * as SecureStore from 'expo-secure-store';
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
import Profile from "./Profile";
import AccessCard from "./components/AccessCard";

import styles from "./Styles";
import axios from "axios";

const TabIcon = ({ selected, title }) => {
  return <Text style={{ color: selected ? "red" : "black" }}>{title}</Text>;
};

const Homeuser = () => {
  const [accesses, setAccesses] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:4000/v1/pamapi?user_id=1`).then((res) => {
      setAccesses(res.data.data);
      // console.log(res.data.data);
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
    <View style={styles.body}>
      <View style={styles.sectionContainer}>
        <View style={styles.mainarea}>
          <Text style={styles.sectionSubtitle}></Text>
          <Text style={styles.sectionTitle}>My Parking Access</Text>
          <View style={styles1.content}>
            <View style={styles1.container}>
              <View style={styles1.item1}>
                <TextInput
                  style={styles.textbox}
                  placeholder={"Search by place name"}
                  placeholderTextColor={"#898989"}
                />
              </View>
              <View style={styles1.item2}>
                <TouchableHighlight style={styles.filter}>
                  <Button
                    color="#444444"
                    title="Filter"
                    onPress={() => Actions.register()}
                  />
                </TouchableHighlight>
              </View>
              <View style={styles.space10} />
              <TouchableHighlight style={styles.button}>
                <Button
                  color="#FFFFFF"
                  title="Search"
                  onPress={() => Actions.time()}
                />
              </TouchableHighlight>
              {[
                {
                  capacity: 100,
                  expired_date_time: "2021-02-27T09:44:00.939Z",
                  is_access_owner: true,
                  is_charged_provider: false,
                  is_sharable: true,
                  is_valid: null,
                  mins_per_usage: 360,
                  parking_access_id: 2,
                  property_img:
                    "https://mpics.mgronline.com/pics/Images/562000009514302.JPEG",
                  property_name: "Samyan",
                  property_type_id: 1,
                  share_qouta: 5,
                  usage_counts: 100,
                  valid_date_time: "2021-02-27T09:44:00.939Z",
                },
                {
                  capacity: 100,
                  expired_date_time: "2021-02-27T09:44:00.939Z",
                  is_access_owner: true,
                  is_charged_provider: false,
                  is_sharable: true,
                  is_valid: null,
                  mins_per_usage: 360,
                  parking_access_id: 2,
                  property_img:
                    "https://advcloudfiles.advantech.com/cms/825eb685-aef1-4e3f-b573-57d074acfd00/Content/content-image-1564312208213.jpg",
                  property_name: "Samyan",
                  property_type_id: 1,
                  share_qouta: 5,
                  usage_counts: 100,
                  valid_date_time: "2021-02-27T09:44:00.939Z",
                },
              ].map((access,index) => {
                var valid = dateTime(access.valid_date_time);
                var expired = dateTime(access.expired_date_time);
                var proptype = propTypeName(access.property_type_id);
                var accesstime = mintoH(access.mins_per_usage);

                return (
                  <AccessCard
                    key={"accesscard"+index}
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
      </View>
    </View>
  );
};

const styles1 = StyleSheet.create({
  logo: {
    width: 300,
    height: 300,
    resizeMode: "stretch",
    margin: 50,
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
  },
  texthead: {
    color: "#444444",
    fontWeight: "800",
    textAlign: "center",
    marginBottom: 10,
  },
  textdes: {
    color: "#444444",
    textAlign: "center",
    fontSize: 12,
    marginBottom: 40,
  },
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start", // if you want to fill rows left to right
  },
  item1: {
    paddingRight: 10,
    width: "70%",
  },
  item2: {
    width: "30%",
  },
  col50: {
    width: "50%",
  },
  pic: {
    width: 110,
    height: 110,
    margin: "auto",
    //resizeMode: "stretch",
  },
});

export default Homeuser;
