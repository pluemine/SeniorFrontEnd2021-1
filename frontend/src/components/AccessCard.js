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
          <Image style={styles1.pic} source={{ uri: propimg }} resizeMode="cover" />
          <View style={styles1.property_type_badge}>
            <Text style={styles1.property_type_badge_text}>{proptype}</Text>
          </View>
        </View>
        <View style={styles1.col60}>
          <View style={styles1.col60_flex}>
            {/* <Text style={styles.cardSubtitle}>{proptype}</Text> */}
            <Text style={{...styles.cardHeader, color: "#f49608"}}>{placename}</Text>
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
    padding: 0,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    alignItems: "stretch", // if you want to fill rows left to right
  },
  item1: {
    paddingRight: 10,
    width: "70%",
  },
  item2: {
    width: "30%",
  },
  property_type_badge: {
    position: "absolute",
    right: 5,
    top: 5,
    backgroundColor: "rgba(244, 150, 8, 0.8)",
    borderRadius: 5,
    padding: 3,
    textAlign: "center"
  },
  property_type_badge_text: {
    fontSize: 10,
    fontWeight: "800",
    color: "#fff",
  },
  col40: {
    position: "relative",
    width: "40%",
    height: "100%",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    overflow: 'hidden'
  },
  col50: {
    width: "50%",
  },
  col60: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    alignItems: "center",
    width: "60%",
    height: "100%",
    overflow: "scroll"
    // padding: 10,
  },
  col60_flex: {
    flexDirection: "column",
    justifyContent: "center",
    flexWrap: "wrap",
    alignItems: "flex-start",
    height: "100%"
  },
  pic: {
    width: "100%",
    height: "100%",
    margin: "auto",
  },
  rowcontainer: {
    flex: 1,
    flexDirection: "column",
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
});

export default AccessCard;
