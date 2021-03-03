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
  TouchableOpacity,
  Image,
} from "react-native";
import { Router, Scene } from "react-native-router-flux";

import styles from "../Styles";

const AccessCard = (props) => {
  const { propimg, proptype, placename, address, valid, expire, time } = props;
  return (
    <TouchableHighlight
      underlayColor="none"
      style={styles.itemcard}
      onPress={() =>
        Actions.time({
          propimg,
          proptype,
          placename,
          address,
          valid,
          expire,
          time,
        })
      }
    >
      <View style={styles1.container}>
        <View style={styles1.col40}>
          <Image style={styles1.pic} source={{ uri: propimg }} />
        </View>
        <View style={styles1.col60}>
          <Text style={styles.cardSubtitle}>{proptype}</Text>
          <Text style={styles.cardHeader}>{placename}</Text>
          <Text style={styles.cardDes}>
            <Text style={styles.textbold}>Address </Text>
            {address}
          </Text>
          <Text style={styles.cardDes}>
            <Text style={styles.textbold}>Valid </Text>
            {valid}
          </Text>
          <Text style={styles.cardDes}>
            <Text style={styles.textbold}>Expired </Text>
            {expire}
          </Text>
          <Text style={styles.cardDes}>
            <Text style={styles.textbold}>Time </Text>
            {time}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
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
  col40: {
    width: "40%",
  },
  col50: {
    width: "50%",
  },
  col60: {
    width: "60%",
    paddingLeft: 20,
  },
  pic: {
    width: "100%",
    height: "100%",
    margin: "auto",
    //resizeMode: "stretch",
  },
  rowcontainer: {
    flex: 1,
    flexDirection: "column",
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
});

export default AccessCard;
