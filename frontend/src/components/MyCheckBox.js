import React, { Component, useState, useEffect } from "react";
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
import CheckBox from "@react-native-community/checkbox";

import styles from "../Styles";

const MyCheckBox = (props) => {
  const { title, value, onValueChange, disabled } = props;

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
        marginBottom: 20,
      }}
    >
      <View style={{ height: 20, width: 20, marginRight: 10 }}>
        <CheckBox
          disabled={disabled}
          value={value}
          onAnimationType="fill"
          offAnimationType="fill"
          boxType="square"
          style={{ width: 20, height: 20 }}
          onCheckColor={disabled ? "#CCCCCC" : "#5893AF"}
          onTintColor={disabled ? "#CCCCCC" : "#5893AF"}
          onValueChange={(newValue) => onValueChange(newValue)}
        />
      </View>
      <Text style={styles.textMenuTitle}>{title}</Text>
    </View>
  );
};

const styles1 = StyleSheet.create({});

export default MyCheckBox;
