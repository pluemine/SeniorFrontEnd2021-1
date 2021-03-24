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
  View,
  Text,
  TextInput,
  StatusBar,
  Button,
  TouchableHighlight,
  Image,
} from "react-native";
import { Router, Scene } from "react-native-router-flux";
import { FloatingLabelInput } from "react-native-floating-label-input";

import Register from "./Register";
import Login from "./Login";
import Home from "./Home";
import AccessCard from "./components/AccessCard";

import styles from "./Styles";
import axios from "axios";

const Addlc = () => {
  const [cat, setCat] = useState("");
  const [number, setNumber] = useState("");
  const [province, setProvince] = useState("");

  const handleChange_cat = (event) => {
    setCat(event);
  };
  const handleChange_number = (event) => {
    setNumber(event);
  };
  const handleChange_province = (event) => {
    setProvince(event);
  };

  return (
    <View style={styles.container}>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionSubtitle}></Text>
        <Text style={styles.sectionTitlewoNav}>Add License Plate</Text>
        <View style={styles.licenseBlock}>
          <View style={styles.licenseColContainer}>
            <View style={styles.licenseCol30}>
              <FloatingLabelInput
                label={"Category"}
                containerStyles={styles.textbox}
                customLabelStyles={{
                  colorFocused: "#898989",
                  colorBlurred: "#898989",
                }}
                inputStyles={{
                  color: "#000000",
                  paddingHorizontal: 5,
                }}
                value={cat}
                hint="กข"
                isPassword={false}
                onChangeText={handleChange_cat}
                autoCapitalize="none"
              />
              <Text style={styles.texterror}> </Text>
            </View>
            <View style={styles.licenseCol70}>
              <FloatingLabelInput
                label={"Number"}
                containerStyles={styles.textbox}
                customLabelStyles={{
                  colorFocused: "#898989",
                  colorBlurred: "#898989",
                }}
                inputStyles={{
                  color: "#000000",
                  paddingHorizontal: 5,
                }}
                value={number}
                hint="9999"
                isPassword={false}
                secureTextEntry={false}
                autoCompleteType={"off"}
                onChangeText={handleChange_number}
                autoCapitalize="none"
              />
              <Text style={styles.texterror}> </Text>
            </View>
          </View>
        </View>
        <FloatingLabelInput
          label={"Province"}
          containerStyles={styles.textbox}
          customLabelStyles={{
            colorFocused: "#898989",
            colorBlurred: "#898989",
          }}
          inputStyles={{
            color: "#000000",
            paddingHorizontal: 5,
          }}
          value={province}
          hint="กรุงเทพมหานคร"
          isPassword={false}
          secureTextEntry={false}
          autoCompleteType={"off"}
          onChangeText={handleChange_province}
          autoCapitalize="none"
        />
      </View>
      <View style={styles.sectionContainerButton}>
        <TouchableHighlight
          style={styles.button}
          underlayColor="none"
          onPress={() => Actions.replace("addlc")}
        >
          <View>
            <Text style={styles.buttonText}>Add</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles1 = StyleSheet.create({});

export default Addlc;
