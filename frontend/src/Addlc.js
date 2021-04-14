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
  const [provinceSelector, setProvinceSelector] = useState("กรุงเทพมหานคร");

  const provinces = {
    กรุงเทพมหานคร: 1,
    สมุทรปราการ: 2,
    นนทบุรี: 3,
    ปทุมธานี: 4,
    พระนครศรีอยุธยา: 5,
    อ่างทอง: 6,
    ลพบุรี: 7,
    สิงห์บุรี: 8,
    ชัยนาท: 9,
    สระบุรี: 10,
    ชลบุรี: 11,
    ระยอง: 12,
    จันทบุรี: 13,
    ตราด: 14,
    ฉะเชิงเทรา: 15,
    ปราจีนบุรี: 16,
    นครนายก: 17,
    สระแก้ว: 18,
    นครราชสีมา: 19,
    บุรีรัมย์: 20,
    สุรินทร์: 21,
    ศรีสะเกษ: 22,
    อุบลราขธานี: 23,
    ยโสธร: 24,
    ชัยภูมิ: 25,
    อำนาจเจริญ: 26,
    หนองบัวลำภู: 27,
    ขอนแก่น: 28,
    อุดรธานี: 29,
    เลย: 30,
    หนองคาย: 31,
    มหาสารคาม: 32,
    ร้อยเอ็ด: 33,
    กาฬสินธ์ุ: 34,
    สกลนคร: 35,
    นครพนม: 36,
    มุกดาหาร: 37,
    เชียงใหม่: 38,
    ลำพูน: 39,
    ลำปาง: 40,
    อุตรดิตถ์: 41,
    แพร่: 42,
    น่าน: 43,
    พะเยา: 44,
    เชียงราย: 45,
    แม่ฮ่องสอน: 46,
    นครสวรรค์: 47,
    อุทัยธานี: 48,
    กำแพงเพชร: 49,
    ตาก: 50,
    สุโขทัย: 51,
    พิษณุโลก: 52,
    พิจิตร: 53,
    เพชรบูรณ์: 54,
    ราชบุรี: 55,
    กาญจนบุรี: 56,
    สุพรรณบุรี: 57,
    นครปฐม: 58,
    สมุทรสาคร: 59,
    สมุทรสงคราม: 60,
    เพชรบุรี: 61,
    ประจวบคีรีขันธ์: 62,
    นครศรีธรรมราช: 63,
    กระบี่: 64,
    พังงา: 65,
    ภูเก็ต: 66,
    สุราษฏร์ธานี: 67,
    ระนอง: 68,
    ชุมพร: 69,
    สงขลา: 70,
    สตูล: 71,
    ตรัง: 72,
    พัทลุง: 73,
    ปัตตานี: 74,
    ยะลา: 75,
    นราธิวาส: 76,
    บึงกาฬ: 77,
  };

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

  const handleChange_provinceSelector = (event) => {
    setProvinceSelector(event);
  };

  function confirmProvice() {
    toggleModal();
    setProvince(provinceSelector);
  }

  function cancelProvice() {
    toggleModal();
    if (province === "เลือกจังหวัด") {
      setProvinceSelector("กรุงเทพมหานคร");
    } else {
      setProvinceSelector(province);
    }
  }

  const addLicense = async () => {
    const token = await SecureStore.getItemAsync("pms_token");
    axios
      .post(
        `http://localhost:4000/auth/lpapi`,
        {
          license_plate_category: cat,
          license_plate_number: number,
          province_id: provinces[province],
        },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((res) => {
        console.log(res);
        console.log(res.data);
        if (res.data.status === "OK") {
          Actions.popTo("homehome");
          Actions.license();
        }
      });
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
                maxLength={3}
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
        <Modal isVisible={isModalVisible}>
          <View style={styles.modalCover}>
            <View style={styles.modalArea}>
              <Text style={styles.modalTitle}>Province</Text>
              <Picker
                selectedValue={provinceSelector}
                onValueChange={(itemValue, itemIndex) =>
                  handleChange_provinceSelector(itemValue)
                }
              >
                <Picker.Item label="กรุงเทพมหานคร" value="กรุงเทพมหานคร" />
                <Picker.Item label="กระบี่" value="กระบี่" />
                <Picker.Item label="กาญจนบุรี" value="กาญจนบุรี" />
                <Picker.Item label="กาฬสินธุ์" value="กาฬสินธุ์" />
                <Picker.Item label="กำแพงเพชร" value="กำแพงเพชร" />
                <Picker.Item label="ขอนแก่น" value="ขอนแก่น" />
                <Picker.Item label="จันทบุรี" value="จันทบุรี" />
                <Picker.Item label="ฉะเชิงเทรา" value="ฉะเชิงเทรา" />
                <Picker.Item label="ชลบุรี" value="ชลบุรี" />
                <Picker.Item label="ชัยนาท" value="ชัยนาท" />
                <Picker.Item label="ชัยภูมิ" value="ชัยภูมิ" />
                <Picker.Item label="ชุมพร" value="ชุมพร" />
                <Picker.Item label="เชียงราย" value="เชียงราย" />
                <Picker.Item label="เชียงใหม่" value="เชียงใหม่" />
                <Picker.Item label="ตรัง" value="ตรัง" />
                <Picker.Item label="ตราด" value="ตราด" />
                <Picker.Item label="ตาก" value="ตาก" />
                <Picker.Item label="นครนายก" value="นครนายก" />
                <Picker.Item label="นครปฐม" value="นครปฐม" />
                <Picker.Item label="นครพนม" value="นครพนม" />
                <Picker.Item label="นครราชสีมา" value="นครราชสีมา" />
                <Picker.Item label="นครศรีธรรมราช" value="นครศรีธรรมราช" />
                <Picker.Item label="นครสวรรค์" value="นครสวรรค์" />
                <Picker.Item label="นนทบุรี" value="นนทบุรี" />
                <Picker.Item label="นราธิวาส" value="นราธิวาส" />
                <Picker.Item label="น่าน" value="น่าน" />
                <Picker.Item label="หนองคาย" value="หนองคาย" />
                <Picker.Item label="หนองบัวลำภู" value="หนองบัวลำภู" />
                <Picker.Item label="บุรีรัมย์" value="บุรีรัมย์" />
                <Picker.Item label="บึงกาฬ" value="บึงกาฬ" />
                <Picker.Item label="ปทุมธานี" value="ปทุมธานี" />
                <Picker.Item label="ประจวบคีรีขันธ์" value="ประจวบคีรีขันธ์" />
                <Picker.Item label="ปราจีนบุรี" value="ปราจีนบุรี" />
                <Picker.Item label="ปัตตานี" value="ปัตตานี" />
                <Picker.Item label="พระนครศรีอยุธยา" value="พระนครศรีอยุธยา" />
                <Picker.Item label="พังงา" value="พังงา" />
                <Picker.Item label="พัทลุง" value="พัทลุง" />
                <Picker.Item label="พิจิตร" value="พิจิตร" />
                <Picker.Item label="พิษณุโลก" value="พิษณุโลก" />
                <Picker.Item label="เพชรบุรี" value="เพชรบุรี" />
                <Picker.Item label="เพชรบูรณ์" value="เพชรบูรณ์" />
                <Picker.Item label="แพร่" value="แพร่" />
                <Picker.Item label="พะเยา" value="พะเยา" />
                <Picker.Item label="ภูเก็ต" value="ภูเก็ต" />
                <Picker.Item label="มหาสารคาม" value="มหาสารคาม" />
                <Picker.Item label="แม่ฮ่องสอน" value="แม่ฮ่องสอน" />
                <Picker.Item label="มุกดาหาร" value="มุกดาหาร" />
                <Picker.Item label="ยะลา" value="ยะลา" />
                <Picker.Item label="ยโสธร" value="ยโสธร" />
                <Picker.Item label="ร้อยเอ็ด" value="ร้อยเอ็ด" />
                <Picker.Item label="ระนอง" value="ระนอง" />
                <Picker.Item label="ระยอง" value="ระยอง" />
                <Picker.Item label="ราชบุรี" value="ราชบุรี" />
                <Picker.Item label="ลพบุรี" value="ลพบุรี" />
                <Picker.Item label="ลำปาง" value="ลำปาง" />
                <Picker.Item label="ลำพูน" value="ลำพูน" />
                <Picker.Item label="เลย" value="เลย" />
                <Picker.Item label="ศรีสะเกษ" value="ศรีสะเกษ" />
                <Picker.Item label="สกลนคร" value="สกลนคร" />
                <Picker.Item label="สงขลา" value="สงขลา" />
                <Picker.Item label="สตูล" value="สตูล" />
                <Picker.Item label="สมุทรปราการ" value="สมุทรปราการ" />
                <Picker.Item label="สมุทรสงคราม" value="สมุทรสงคราม" />
                <Picker.Item label="สมุทรสาคร" value="สมุทรสาคร" />
                <Picker.Item label="สระแก้ว" value="สระแก้ว" />
                <Picker.Item label="สระบุรี" value="สระบุรี" />
                <Picker.Item label="สิงห์บุรี" value="สิงห์บุรี" />
                <Picker.Item label="สุโขทัย" value="สุโขทัย" />
                <Picker.Item label="สุพรรณบุรี" value="สุพรรณบุรี" />
                <Picker.Item label="สุราษฏร์ธานี" value="สุราษฏร์ธานี" />
                <Picker.Item label="สุรินทร์" value="สุรินทร์" />
                <Picker.Item label="อ่างทอง" value="อ่างทอง" />
                <Picker.Item label="อุดรธานี" value="อุดรธานี" />
                <Picker.Item label="อุทัยธานี" value="อุทัยธานี" />
                <Picker.Item label="อุตรดิตถ์" value="อุตรดิตถ์" />
                <Picker.Item label="อุบลราชธานี" value="อุบลราชธานี" />
                <Picker.Item label="อำนาจเจริญ" value="อำนาจเจริญ" />
              </Picker>
              <Button title="Select" onPress={confirmProvice} />
            </View>
            <View style={styles.modalCancel}>
              <Button title="Cancel" onPress={cancelProvice} />
            </View>
          </View>
        </Modal>

        <Text> </Text>
        <TouchableHighlight
          style={styles.button}
          underlayColor="none"
          onPress={addLicense}
        >
          <View>
            <Text style={styles.buttonText}>Add</Text>
          </View>
        </TouchableHighlight>
      </View>
      <Image
        style={styles.bgCardPic}
        source={require("../assets/pic-nolicense.png")}
      />
    </View>
  );
};

const styles1 = StyleSheet.create({});

export default Addlc;
