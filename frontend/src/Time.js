import React, { Component, useState } from "react";
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
import styles from "./Styles";

const Time = (props) => {
  const { propimg, proptype, placename, address, valid, expire, time } = props;
  return (
    <View style={styles.body}>
      <Image style={styles1.pic} source={{ uri: propimg }} />
      <View style={styles1.sectionContainer}>
        <View style={styles.mainarea}>
          <Text style={styles.cardSubtitle}>{proptype}</Text>
          <Text style={styles.sectionTitle}>{placename}</Text>
          <View
            style={{
              borderBottomColor: "#C4C4C4",
              borderBottomWidth: 1,
              marginBottom: 30,
            }}
          />
          <View style={styles1.item}>
            <View style={styles1.container}>
              <View style={styles1.col30}>
                <Text style={(styles1.cardDes, styles.textbold)}>Address</Text>
              </View>
              <View style={styles1.col70}>
                <Text style={styles1.cardDes}>{address}</Text>
              </View>
            </View>
          </View>
          <View style={styles1.item}>
            <View style={styles1.container}>
              <View style={styles1.col30}>
                <Text style={(styles1.cardDes, styles.textbold)}>Valid</Text>
              </View>
              <View style={styles1.col70}>
                <Text style={styles1.cardDes}>{valid}</Text>
              </View>
            </View>
          </View>
          <View style={styles1.item}>
            <View style={styles1.container}>
              <View style={styles1.col30}>
                <Text style={(styles1.cardDes, styles.textbold)}>Expired</Text>
              </View>
              <View style={styles1.col70}>
                <Text style={styles1.cardDes}>{expire}</Text>
              </View>
            </View>
          </View>
          <View style={styles1.item}>
            <View style={styles1.container}>
              <View style={styles1.col30}>
                <Text style={(styles1.cardDes, styles.textbold)}>Time</Text>
              </View>
              <View style={styles1.col70}>
                <Text style={styles1.cardDes}>{time}</Text>
              </View>
            </View>
          </View>
          <View style={styles.space10} />
          <View
            style={{
              borderBottomColor: "#C4C4C4",
              borderBottomWidth: 1,
              marginBottom: 30,
            }}
          />
          <TouchableHighlight style={styles.buttonhome}>
            <Button
              color="#FFFFFF"
              title="Share"
              onPress={() => Actions.share()}
            />
          </TouchableHighlight>
          <TouchableHighlight style={styles.buttonhomered}>
            <Button
              color="#FF2244"
              title="Remove"
              onPress={() => Actions.homeuser()}
            />
          </TouchableHighlight>
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
  sectionContainer: {
    marginTop: 0,
    paddingHorizontal: 24,
  },
  cardDes: {
    fontSize: 14,
    color: Colors.dark,
    marginBottom: 10,
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
  col30: {
    width: "30%",
  },
  col50: {
    width: "50%",
    paddingHorizontal: 4,
  },
  col70: {
    width: "70%",
  },
  pic: {
    width: "100%",
    height: 300,
    margin: "auto",
    //resizeMode: "stretch",
  },
  piccard: {
    borderRadius: 10,
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    height: 200,
    width: "100%",
    margin: "auto",
  },
  item: {
    width: "100%",
    height: 30,
  },
});

export default Time;
