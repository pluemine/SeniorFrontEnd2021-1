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
  const [credit, setCredit] = useState(" ");

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
        <Text style={styles.textSubtitleWhite}>
          {item["place_name"]} ({item["distance"]} km)
        </Text>
        <Text style={styles.textDesWhite}>Bangkok</Text>
        <Text style={styles.textDesWhite}></Text>
        <Text style={styles.textDesWhite}>100 units</Text>
      </View>
    </ImageBackground>
  );

  useEffect(() => {
    const getUser = async () => {
      const token = await SecureStore.getItemAsync("pms_token");
      axios
        .get(`http://localhost:4000/auth/capi`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          console.log(res.data.data);
          setCredit("฿" + res.data.data.credits);
        });
    };
    getUser();
  }, []);

  const reloadWallet = async () => {
    const token = await SecureStore.getItemAsync("pms_token");
    axios
      .get(`http://localhost:4000/auth/capi`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res.data.data);
        setCredit("฿" + res.data.data.credits);
      });
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="default" />
      <ImageBackground
        style={styles1.pic}
        source={require("../assets/home.png")}
      >
        <View style={styles.sectionContainerHeader}>
          <Text style={styles.sectionTitlewoNav}>Hello, User</Text>
        </View>
        <View style={styles.sectionContainerScroll}>
          <View style={styles.cardShow}>
            <View style={styles.cardContainer}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <View>
                  <Text style={styles.textHeaderBlue}>Your Balance</Text>
                  <Text style={styles.textTitle}>{credit}</Text>
                </View>
                <TouchableHighlight
                  underlayColor="none"
                  onPress={() => reloadWallet()}
                >
                  <Image
                    style={styles.iconEdit}
                    source={require("../assets/icon-refresh.png")}
                  />
                </TouchableHighlight>
              </View>
            </View>
          </View>
          <View style={styles.cardMenuBlockSpace}>
            <Text style={styles.textSubtitle}>Shortcut</Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <TouchableHighlight
              underlayColor="none"
              style={styles.cardShortcut}
              onPress={() => Actions.license()}
            >
              <View style={styles.cardShortcutData}>
                <Image
                  style={styles.iconHomeuser}
                  source={require("../assets/icon-license.png")}
                />
                <Text style={styles.textMenuTitle}>License</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor="none"
              style={styles.cardShortcut}
              onPress={() => Actions.payment()}
            >
              <View style={styles.cardShortcutData}>
                <Image
                  style={styles.iconHomeuser}
                  source={require("../assets/icon-payment.png")}
                />
                <Text style={styles.textMenuTitle}>Payment</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor="none"
              style={styles.cardShortcut}
              onPress={() => Actions.topup({ credit: credit })}
            >
              <View style={styles.cardShortcutData}>
                <Image
                  style={styles.iconHomeuser}
                  source={require("../assets/icon-topup.png")}
                />
                <Text style={styles.textMenuTitle}>Top Up</Text>
              </View>
            </TouchableHighlight>
          </View>
          <View style={styles.cardMenuBlockSpaceTop}>
            <Text style={styles.textSubtitle}>Nearby Parking</Text>
          </View>
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
