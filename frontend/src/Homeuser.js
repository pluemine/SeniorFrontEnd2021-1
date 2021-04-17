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
  FlatList,
  View,
  Text,
  TextInput,
  StatusBar,
  Button,
  TouchableHighlight,
  Image,
  ImageBackground,
} from "react-native";
import { Router, Scene } from "react-native-router-flux";

import Register from "./Register";
import Login from "./Login";
import Home from "./Home";
import AccessCard from "./components/AccessCard";

import styles from "./Styles";
import axios from "axios";

const Homeuser = () => {
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      place_name: "Central World",
      place_img:
        "https://www.avtechguide.com/wp-content/uploads/2020/02/second-apple-in-thailand-almost-and-leaked-construction-floor-plan_featured-800x445.jpg",
      distance: 3.5,
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-556789019dba",
      place_name: "Samyan",
      place_img:
        "https://propholic.com/wp-content/uploads/2016/04/%E0%B8%AA%E0%B8%B2%E0%B8%A1%E0%B8%A2%E0%B9%88%E0%B8%B2%E0%B8%99R.jpg",
      distance: 6.3,
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      place_name: "Samyan Mitr Town",
      place_img:
        "https://www.japaikin.com/wp-content/uploads/2019/09/samyan-mitrtown-02.jpg",
      distance: 6.5,
    },
  ];

  const renderItem = ({ item }) => (
    <ImageBackground
      source={{ uri: item["place_img"] }}
      style={styles1.homeuserBalanceCard}
      key={item.id}
    >
      <View
        style={{
          padding: 30,
          justifyContent: "center",
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          height: "100%",
          width: "100%",
        }}
      >
        <Text style={styles.homeuserCardTitle}>
          {item["place_name"]} ({item["distance"]} km)
        </Text>
        <Text style={styles.homeuserCardSubtitle}>Bangkok</Text>
        <Text style={styles.homeuserCardSubtitle}></Text>
        <Text style={styles.homeuserCardSubtitle}>100 units</Text>
      </View>
    </ImageBackground>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="default" />
      <ImageBackground
        style={styles1.pic}
        source={require("../assets/cloud.jpg")}
      >
        <View style={styles.sectionContainerHeader}>
          <Text style={styles.sectionTitlewoNavWhite}>Hello, User</Text>
        </View>
        <View style={styles.sectionContainerScroll}>
          <View style={styles.homeuserBalanceCard}>
            <Text style={styles.cardHeaderColor}>Your Balance</Text>
            <Text style={styles.cardTitle}>$800.20</Text>
          </View>
          <Text style={styles.homeuserTitle}>Shortcut</Text>
          <View style={styles.homeuserShortcutBlock}>
            <View style={styles.homeuserColContainer}>
              <View style={styles.homeuserCol33}>
                <TouchableHighlight
                  underlayColor="none"
                  style={styles.homeuserShortcutCard}
                  onPress={() => Actions.license()}
                >
                  <View style={styles.homeuserShortcutData}>
                    <Image
                      style={styles.homeuserIcon}
                      source={require("../assets/icon-license.png")}
                    />
                    <Text style={styles.textbold}>My car</Text>
                  </View>
                </TouchableHighlight>
              </View>
              <View style={styles.homeuserCol33}>
                <TouchableHighlight
                  underlayColor="none"
                  style={styles.homeuserShortcutCard}
                  onPress={() => Actions.payment()}
                >
                  <View style={styles.homeuserShortcutData}>
                    <Image
                      style={styles.homeuserIcon}
                      source={require("../assets/icon-payment.png")}
                    />
                    <Text style={styles.textbold}>Payment</Text>
                  </View>
                </TouchableHighlight>
              </View>
              <View style={styles.homeuserCol33}>
                <TouchableHighlight
                  underlayColor="none"
                  style={styles.homeuserShortcutCard}
                  onPress={() => Actions.license()}
                >
                  <View style={styles.homeuserShortcutData}>
                    <Image
                      style={styles.homeuserIcon}
                      source={require("../assets/icon-topup.png")}
                    />
                    <Text style={styles.textbold}>Top Up</Text>
                  </View>
                </TouchableHighlight>
              </View>
            </View>
          </View>
          <Text style={styles.homeuserTitle}>Nearby Parking</Text>
          <SafeAreaView style={styles.nearByFlatListContainer}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              data={DATA}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              horizontal={true}
              initialNumToRender={2}
            />
          </SafeAreaView>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles1 = StyleSheet.create({
  homeuserBalanceCard: {
    borderRadius: 10,
    maxWidth: 300,
    width: 300,
    marginRight: 16,
    height: 125,
    shadowColor: "#888888",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 5,
    overflow: "hidden",
  },
  pic: {
    width: "100%",
    height: "60%",
    justifyContent: "space-between",
    backgroundColor: "rgba(255,255,255,0.92)",
  },
  nearByFlatListContainer: {
    minWidth: "100vw",
    flex: 1,
    overflow: "scroll",
    marginTop: 0,
  },
});

export default Homeuser;
