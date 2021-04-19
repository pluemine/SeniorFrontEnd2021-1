import React, { Component, useState, useEffect } from "react";
import * as SecureStore from "expo-secure-store";
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
import ProvinceModal from "./components/ProvinceModal";
import TextField from "./components/TextField";

import styles from "./Styles";
import axios from "axios";

const Addlc = () => {
  const [category, setCategory] = useState("");
  const [number, setNumber] = useState("");
  const [province, setProvince] = useState("เลือกจังหวัด");
  const [provinceSelector, setProvinceSelector] = useState("กรุงเทพมหานคร");

  const [categoryError, setCategoryError] = useState(false);
  const [numberError, setNumberError] = useState(false);
  const [provinceError, setProvinceError] = useState(false);

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

  const handleChange_category = (event) => {
    setCategory(event);
    setCategoryError(false);
  };
  const handleChange_number = (event) => {
    setNumber(event);
    setNumberError(false);
  };

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleChange_provinceSelector = (event) => {
    setProvinceSelector(event);
  };

  function confirmProvince() {
    toggleModal();
    setProvince(provinceSelector);
    setProvinceError(false);
  }

  function cancelProvince() {
    toggleModal();
    if (province === "เลือกจังหวัด") {
      setProvinceSelector("กรุงเทพมหานคร");
    } else {
      setProvinceSelector(province);
    }
  }

  const sent = () => {
    if (category === "") {
      setCategoryError(true);
    }
    if (number === "") {
      setNumberError(true);
    }
    if (province === "เลือกจังหวัด") {
      setProvinceError(true);
    }
    if (category === "") {
      setCategoryError(true);
    } else if (number === "") {
      setNumberError(true);
    } else if (province === "เลือกจังหวัด") {
      setProvinceError(true);
    } else if (
      !categoryError &&
      !numberError &&
      !provinceError
    ) {
      console.warn("Complete");
      addLicense();
    }
  };

  const addLicense = async () => {
    const token = await SecureStore.getItemAsync("pms_token");
    axios
      .post(
        `http://localhost:4000/auth/lpapi`,
        {
          license_plate_category: category,
          license_plate_number: number,
          province_id: provinces[province],
        },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((res) => {
        console.log(res);
        console.log(res.data);
        if (res.data.status === "OK") {
          Actions.pop();
          setTimeout(() => {
            Actions.refresh({ key: Math.random() });
          }, 500);
        }
      });
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="default" />
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitlewoNav}>Add License Plate</Text>
        <View style={styles.licenseBlock}>
          <View style={styles.licenseColContainer}>
            <View style={styles.licenseCol30}>
              <TextField
                label="Category"
                error1={categoryError}
                value={category}
                error="* Incorrect"
                hint="กข"
                maxLength={3}
                onChangeText={handleChange_category}
                autoCapitalize="none"
              />
            </View>
            <View style={styles.licenseCol70}>
              <TextField
                label="Number"
                error1={numberError}
                value={number}
                error="* Incorrect"
                hint="1234"
                mask="9999"
                keyboardType="numeric"
                onChangeText={handleChange_number}
                autoCapitalize="none"
              />
            </View>
          </View>
        </View>
        <TouchableOpacity onPress={toggleModal}>
          <View pointerEvents="none">
            <TextField
              label="Province"
              error1={provinceError}
              value={province}
              error="* Please select a province."
              hint="กรุงเทพมหานคร"
              autoCapitalize="none"
            />
          </View>
        </TouchableOpacity>
        <ProvinceModal
          visible={isModalVisible}
          selector={provinceSelector}
          handleChange={handleChange_provinceSelector}
          confirm={confirmProvince}
          cancel={cancelProvince}
        />
        <Text> </Text>
        <TouchableHighlight
          style={styles.button}
          underlayColor="none"
          onPress={sent}
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
