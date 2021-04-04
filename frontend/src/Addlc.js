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
  TouchableOpacity,
  Image,
} from "react-native";
import { Router, Scene } from "react-native-router-flux";
import { FloatingLabelInput } from "react-native-floating-label-input";
import { Picker } from "@react-native-picker/picker";
import Modal from "react-native-modal";

import Register from "./Register";
import Login from "./Login";
import Home from "./Home";
import AccessCard from "./components/AccessCard";

import styles from "./Styles";
import axios from "axios";

const Addlc = () => {
  const [cat, setCat] = useState("");
  const [number, setNumber] = useState("");
  const [province, setProvince] = useState("เลือกจังหวัด");

  const handleChange_cat = (event) => {
    setCat(event);
  };
  const handleChange_number = (event) => {
    setNumber(event);
  };
  const handleChange_province = (event) => {
    setProvince(event);
  };

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="default" />
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
                maxLength={2}
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
                hint="1234"
                mask="9999"
                isPassword={false}
                secureTextEntry={false}
                keyboardType="numeric"
                autoCompleteType={"off"}
                onChangeText={handleChange_number}
                autoCapitalize="none"
              />
              <Text style={styles.texterror}> </Text>
            </View>
          </View>
        </View>
        <TouchableOpacity onPress={toggleModal}>
          <View pointerEvents="none">
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
        </TouchableOpacity>
        <Modal
          isVisible={isModalVisible}
          coverScreen={true}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: "100%",
                height: 350,
                backgroundColor: "#FFFFFF",
                borderRadius: 25,
              }}
            >
              <Text style={styles.licenseSelectTitle}>Select Province</Text>
              <Picker
                selectedValue={province}
                onValueChange={(itemValue, itemIndex) => setProvince(itemValue)}
              >
                <Picker.Item label="กรุงเทพมหานคร" value="กรุงเทพมหานคร" />
                <Picker.Item label="อยุธยา" value="อยุธยา" />
                <Picker.Item label="นครปฐม" value="นครปฐม" />
                <Picker.Item label="นิวยอร์ค" value="นิวยอร์ค" />
                <Picker.Item label="โคเปนเฮเกน" value="โคเปนเฮเกน" />
              </Picker>
              <Button title="Select" onPress={toggleModal} />
            </View>
          </View>
        </Modal>

        <Text> </Text>
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
