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
import PropertyCard from "./components/PropertyCard";

import styles from "./Styles";
import axios from "axios";

const TabIcon = ({ selected, title }) => {
  return <Text style={{ color: selected ? "red" : "black" }}>{title}</Text>;
};

const Search = () => {
  const [properties, setProperties] = useState([]);
  //const [filteredAccessePlaceName, setFilteredAccessePlaceName] = useState("");
  const [des, setDes] = useState("Loading");

  useEffect(() => {
    const getProp = async () => {
      const token = await SecureStore.getItemAsync("pms_token");
      axios
        .get(`http://localhost:4000/auth/ptapi/all`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          console.log(res.data.data.properties);
          setProperties(res.data.data.properties);
          setDes("No property available");
        });
    };
    getProp();
  }, []);

  function propTypeName(prop) {
    const proptype = ["Home", "Supermarket", "Condominium", "Public"];
    return proptype[prop];
  }

  let screen;
  if (des === "Loading") {
    screen = (
      <View style={styles.sectionContainerScroll}>
        <PulseIndicator color="#78aac2" />
      </View>
    );
  } else if (properties.length > 0) {
    screen = (
      <ScrollView style={styles.sectionContainerScroll}>
        <View>
          {properties.map((prop, index) => {
            return (
              <PropertyCard
                key={"propcard" + index}
                propid={prop.property_id}
                propname={prop.property_name}
                proptype={prop.property_type_id}
                proplocation={prop.property_location}
                propcapa={prop.capacity}
                propimg={prop.property_img}
                propprovince={prop.province_id}
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
        <Text style={styles.sectionTitlewoNav}>Search</Text>
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
          //value={filteredAccessePlaceName}
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

export default Search;
