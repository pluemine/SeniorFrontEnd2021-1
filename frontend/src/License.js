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
  Image,
} from "react-native";
import { Router, Scene } from "react-native-router-flux";
import Modal from "react-native-modal";

import Register from "./Register";
import Login from "./Login";
import Home from "./Home";
import AccessCard from "./components/AccessCard";
import LicenseCard from "./components/LicenseCard";

import styles from "./Styles";
import axios from "axios";

const License = () => {
  const [licenses, setLicenses] = useState([]);
  const [des, setDes] = useState("Loading");

  const provinces = {
    1: "กรุงเทพมหานคร",
    2: "สมุทรปราการ",
    3: "นนทบุรี",
    4: "ปทุมธานี",
    5: "พระนครศรีอยุธยา",
    6: "อ่างทอง",
    7: "ลพบุรี",
    8: "สิงห์บุรี",
    9: "ชัยนาท",
    10: "สระบุรี",
    11: "ชลบุรี",
    12: "ระยอง",
    13: "จันทบุรี",
    14: "ตราด",
    15: "ฉะเชิงเทรา",
    16: "ปราจีนบุรี",
    17: "นครนายก",
    18: "สระแก้ว",
    19: "นครราชสีมา",
    20: "บุรีรัมย์",
    21: "สุรินทร์",
    22: "ศรีสะเกษ",
    23: "อุบลราขธานี",
    24: "ยโสธร",
    25: "ชัยภูมิ",
    26: "อำนาจเจริญ",
    27: "หนองบัวลำภู",
    28: "ขอนแก่น",
    29: "อุดรธานี",
    30: "เลย",
    31: "หนองคาย",
    32: "มหาสารคาม",
    33: "ร้อยเอ็ด",
    34: "กาฬสินธ์ุ",
    35: "สกลนคร",
    36: "นครพนม",
    37: "มุกดาหาร",
    38: "เชียงใหม่",
    39: "ลำพูน",
    40: "ลำปาง",
    41: "อุตรดิตถ์",
    42: "แพร่",
    43: "น่าน",
    44: "พะเยา",
    45: "เชียงราย",
    46: "แม่ฮ่องสอน",
    47: "นครสวรรค์",
    48: "อุทัยธานี",
    49: "กำแพงเพชร",
    50: "ตาก",
    51: "สุโขทัย",
    52: "พิษณุโลก",
    53: "พิจิตร",
    54: "เพชรบูรณ์",
    55: "ราชบุรี",
    56: "กาญจนบุรี",
    57: "สุพรรณบุรี",
    58: "นครปฐม",
    59: "สมุทรสาคร",
    60: "สมุทรสงคราม",
    61: "เพชรบุรี",
    62: "ประจวบคีรีขันธ์",
    63: "นครศรีธรรมราช",
    64: "กระบี่",
    65: "พังงา",
    66: "ภูเก็ต",
    67: "สุราษฏร์ธานี",
    68: "ระนอง",
    69: "ชุมพร",
    70: "สงขลา",
    71: "สตูล",
    72: "ตรัง",
    73: "พัทลุง",
    74: "ปัตตานี",
    75: "ยะลา",
    76: "นราธิวาส",
    77: "บึงกาฬ",
  };

  useEffect(() => {
    const getLicense = async () => {
      const token = await SecureStore.getItemAsync("pms_token");
      axios
        .get(`http://localhost:4000/auth/lpapi`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          setLicenses(res.data.data.license_plates);
          console.log(res.data.data.license_plates);
          setDes("No License Plate");
        });
    };
    getLicense();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="default" />
      <View style={styles.sectionContainer}>
        <View>
          <Text style={styles.sectionSubtitle}></Text>
          <Text style={styles.sectionTitlewoNav}>License Plate</Text>
          {/*[
            { cat: "กข", number: "9999", province: "กรุงเทพมหานคร", default: false },
            { cat: "งง", number: "5555", province: "นครนายก", default: false },
          ].map((license, index) => {
            return (
              <LicenseCard
                key={"licensecard" + index}
                cat={license.cat}
                number={license.number}
                province={license.province}
                def={license.default}
              />
            );
          })*/}
          {licenses.length > 0 ? (
            licenses.map((license, index) => {
              return (
                <LicenseCard
                  key={"licensecard" + index}
                  cat={license.license_plate_category}
                  number={license.license_plate_number}
                  province={provinces[license.province_id]}
                  lpid={license.license_plate_id}
                />
              );
            })
          ) : (
            <View>
              <Image
                style={styles.noDataPic}
                source={require("../assets/pic-nolicense.png")}
              />
              <Text style={styles.noDataDes}>{des}</Text>
            </View>
          )}
        </View>
      </View>
      <View style={styles.sectionContainerButton}>
        <TouchableHighlight
          style={styles.button}
          underlayColor="none"
          onPress={() => Actions.addlc()}
        >
          <View>
            <Text style={styles.buttonText}>Add new license plate</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles1 = StyleSheet.create({});

export default License;
