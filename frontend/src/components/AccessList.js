import React, { Component } from "react";
import { Actions } from "react-native-router-flux";
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
import * as Helper from "./Helper";
import styles from "../Styles";

const AccessList = (props) => {
  const { paid, propname, time, selector, handleChange } = props;

  return (
    <TouchableHighlight
      underlayColor="none"
      onPress={() => {
        handleChange({
          name:
            propname === "None"
              ? propname
              : propname.toUpperCase().replace(" ", "") + paid,
          id: paid,
        });
      }}
    >
      <View style={{ marginHorizontal: 24 }}>
        <View
          style={selector.id === paid ? styles.cardShowBorder : styles.cardShow}
        >
          <View style={styles.cardContainer}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text style={styles.textSubtitle}>
                {paid === null
                  ? propname
                  : propname.toUpperCase().replace(" ", "")}
                {paid}
              </Text>
              <Text style={styles.textSubtitle}>
                {time} {time != null ? (time > 1 ? "Mins." : "Min") : ""}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles1 = StyleSheet.create({});

export default AccessList;
