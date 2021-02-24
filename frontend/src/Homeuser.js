import React, { Component } from "react";
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
import Profile from "./Profile";

import styles from "./Styles";

const TabIcon = ({ selected, title }) => {
  return <Text style={{ color: selected ? "red" : "black" }}>{title}</Text>;
};

const Homeuser = () => {
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
                  onPress={() => Actions.homeuser()}
                />
              </TouchableHighlight>
              <View>
                <View style={styles.itemcard}>
                  <View style={styles1.container}>
                    <View style={styles1.col50}>
                      <Image
                        style={styles1.pic}
                        source={require("../assets/logo.png")}
                      />
                    </View>
                    <View style={styles1.col50}>
                      <Text style={styles.cardSubtitle}>Property Type</Text>
                      <Text style={styles.cardHeader}>Place name</Text>
                      <Text style={styles.cardDes}>
                        Address (only province)
                      </Text>
                      <Text style={styles.cardDes}>Valid : Date</Text>
                      <Text style={styles.cardDes}>Expire : Date</Text>
                      <Text style={styles.cardDes}>Time</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.itemcard}>
                  <View style={styles1.container}>
                    <View style={styles1.col50}>
                      <Image
                        style={styles1.pic}
                        source={require("../assets/logo.png")}
                      />
                    </View>
                    <View style={styles1.col50}>
                      <Text style={styles.cardSubtitle}>Property Type</Text>
                      <Text style={styles.cardHeader}>Place name</Text>
                      <Text style={styles.cardDes}>
                        Address (only province)
                      </Text>
                      <Text style={styles.cardDes}>Valid : Date</Text>
                      <Text style={styles.cardDes}>Expire : Date</Text>
                      <Text style={styles.cardDes}>Time</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.itemcard}>
                  <View style={styles1.container}>
                    <View style={styles1.col50}>
                      <Image
                        style={styles1.pic}
                        source={require("../assets/logo.png")}
                      />
                    </View>
                    <View style={styles1.col50}>
                      <Text style={styles.cardSubtitle}>Property Type</Text>
                      <Text style={styles.cardHeader}>Place name</Text>
                      <Text style={styles.cardDes}>
                        Address (only province)
                      </Text>
                      <Text style={styles.cardDes}>Valid : Date</Text>
                      <Text style={styles.cardDes}>Expire : Date</Text>
                      <Text style={styles.cardDes}>Time</Text>
                    </View>
                  </View>
                </View>
              </View>
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
