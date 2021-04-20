import React, { Component, useState } from "react";
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
  ImageBackground,
} from "react-native";
import styles from "./Styles";
import axios from "axios";
import ProvinceModal from "./components/ProvinceModal";
import DateModal from "./components/DateModal";
import TextField from "./components/TextField";

const Share = (props) => {
  const {
    propimg,
    placename,
    proptype,
    valid,
    expire,
    validR,
    expireR,
  } = props;

  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("");
  const [number, setNumber] = useState("");
  const [province, setProvince] = useState("เลือกจังหวัด");
  const [nowValid, setValid] = useState(new Date());
  const [nowExpire, setExpire] = useState(new Date());
  const [quota, setQuota] = useState("");

  const [emailError, setEmailError] = useState(false);
  const [categoryError, setCategoryError] = useState(false);
  const [numberError, setNumberError] = useState(false);
  const [provinceError, setProvinceError] = useState(false);
  const [validError, setValidError] = useState(false);
  const [expireError, setExpireError] = useState(false);
  const [quotaError, setQuotaError] = useState(false);

  const [validSelector, setValidSelector] = useState(new Date());
  const [expireSelector, setExpireSelector] = useState(new Date());
  const [provinceSelector, setProvinceSelector] = useState("กรุงเทพมหานคร");

  const [isValidPickerVisible, setValidPickerVisible] = useState(false);
  const [isExpirePickerVisible, setExpirePickerVisible] = useState(false);
  const [isProvincePickerVisible, setProvincePickerVisible] = useState(false);

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

  const handleChange_email = (event) => {
    setEmail(event);
    setEmailError(false);
  };
  const handleChange_category = (event) => {
    setCategory(event);
    setCategoryError(false);
  };
  const handleChange_number = (event) => {
    setNumber(event);
    setNumberError(false);
  };
  const handleChange_quota = (event) => {
    setQuota(event);
    setQuotaError(false);
  };

  const toggleProvinceModal = () => {
    setProvincePickerVisible(!isProvincePickerVisible);
  };
  const handleChange_provinceSelector = (event) => {
    setProvinceSelector(event);
  };
  function confirmProvince() {
    toggleProvinceModal();
    setProvince(provinceSelector);
    setProvinceError(false);
  }
  function cancelProvince() {
    toggleProvinceModal();
    if (province === "เลือกจังหวัด") {
      setProvinceSelector("กรุงเทพมหานคร");
    } else {
      setProvinceSelector(province);
    }
  }

  const toggleValidModal = () => {
    setValidPickerVisible(!isValidPickerVisible);
  };
  const handleChange_validSelector = (event) => {
    setValidSelector(event);
  };
  function confirmValid() {
    toggleValidModal();
    setValid(validSelector);
    if (new Date(validSelector).getDate() > new Date(nowExpire).getDate()) {
      setValidError(true);
      setExpireError(true);
    } else {
      setValidError(false);
      setExpireError(false);
    }
  }
  function cancelValid() {
    toggleValidModal();
    setValidSelector(nowValid);
  }

  const toggleExpireModal = () => {
    setExpirePickerVisible(!isExpirePickerVisible);
  };
  const handleChange_expireSelector = (event) => {
    setExpireSelector(event);
  };
  function confirmExpire() {
    toggleExpireModal();
    setExpire(expireSelector);
    if (new Date(expireSelector).getDate() < new Date(nowValid).getDate()) {
      setValidError(true);
      setExpireError(true);
    } else {
      setValidError(false);
      setExpireError(false);
    }
  }
  function cancelExpire() {
    toggleExpireModal();
    setExpireSelector(nowExpire);
  }

  const sent = () => {
    if (email === "") {
      setEmailError(true);
    }
    if (category === "") {
      setCategoryError(true);
    }
    if (number === "") {
      setNumberError(true);
    }
    if (province === "เลือกจังหวัด") {
      setProvinceError(true);
    }
    if (nowValid === "") {
      setValidError(true);
    }
    if (nowExpire === "") {
      setExpireError(true);
    }
    if (quota === "") {
      setQuotaError(true);
    }
    if (nowExpire < nowValid) {
      setValidError(true);
      setExpireError(true);
    }
    if (!isEmailValid()) {
      console.warn("Invalid Email");
      setEmailError(true);
    } else if (category === "") {
      setCategoryError(true);
    } else if (number === "") {
      setNumberError(true);
    } else if (province === "เลือกจังหวัด") {
      setProvinceError(true);
    } else if (nowValid === "") {
      setValidError(true);
    } else if (nowExpire === "") {
      setExpireError(true);
    } else if (quota === "") {
      setQuotaError(true);
    } else if (
      !emailError &&
      !categoryError &&
      !numberError &&
      !provinceError &&
      !validError &&
      !expireError &&
      !quotaError
    ) {
      console.warn("Complete");
      shareAccess();
    }
  };

  function dateTime(date) {
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    if (parseInt(day) - 10 >= 0) {
      if (parseInt(month) - 10 >= 0) {
        return "" + year + "-" + month + "-" + day;
      } else {
        return "" + year + "-0" + month + "-" + day;
      }
    } else {
      if (parseInt(month) - 10 >= 0) {
        return "" + year + "-" + month + "-0" + day;
      } else {
        return "" + year + "-0" + month + "-0" + day;
      }
    }
  }

  const shareAccess = async () => {
    const token = await SecureStore.getItemAsync("pms_token");
    axios
      .post(
        `http://localhost:4000/auth/pamapi/share`,
        {
          email: email,
          license_plate_category: category,
          license_plate_number: number,
          province_id: provinces[province],
          property_id: 2,
          valid_date_time: null,
          expired_date_time: null,
          usage_counts: 100,
          mins_per_usage: 120,
          share_quota: 5,
          is_charged_provider: false,
          is_sharable: false,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((res) => {
        console.log(res);
        console.log(res.data);
        if (res.data.status === "OK") {
          alert("Access was shared!");
          Actions.popTo("accesshome");
        }
      })
      .catch((error) => {
        if (res.data.status === "FAILED") {
          alert("Email or License Plate Does not exist");
        }
        throw error;
      });
  };

  const isEmailValid = () => {
    let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(String(email).toLowerCase());
  };

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, justifyContent: "space-between" }}
    >
      <StatusBar barStyle='light-content' />
      <View style={styles.container}>
        <ImageBackground
          style={styles.pic}
          source={{ uri: propimg }}
          blurRadius={25}
        >
          <View style={styles.shareImageContainer}>
            <View style={styles.shareColContainer}>
              <View style={styles.shareCol40}>
                <View style={styles.sharePicOuter}>
                  <Image style={styles.sharePic} source={{ uri: propimg }} />
                </View>
              </View>
              <View style={styles.shareCol60}>
                <Text style={styles.shareTitle}>{placename}</Text>
                <Text style={styles.shareSubtitle}>{proptype}</Text>
              </View>
            </View>
          </View>
          <View style={styles.accessCard}>
            <View style={styles.accessContainer}>
              <Text style={styles.sectionTitle}>Confirm Sharing</Text>
              <TextField
                label="Email"
                error1={emailError}
                value={email}
                error="* Please enter a valid email address."
                hint="example@address.com"
                onChangeText={handleChange_email}
                autoCapitalize="none"
              />
              <TextField
                label="License Category"
                error1={categoryError}
                value={category}
                error="* Please enter a valid license category."
                hint="กข"
                maxLength={3}
                onChangeText={handleChange_category}
                autoCapitalize="none"
              />
              <TextField
                label="License Number"
                error1={numberError}
                value={number}
                error="* Please enter a valid license number."
                hint="1234"
                mask="9999"
                keyboardType="numeric"
                onChangeText={handleChange_number}
                autoCapitalize="none"
              />
              <TouchableOpacity onPress={toggleProvinceModal}>
                <View pointerEvents="none">
                  <TextField
                    label="License Province"
                    error1={provinceError}
                    value={province}
                    error="* Please select province."
                    hint="กรุงเทพมหานคร"
                    autoCapitalize="none"
                  />
                </View>
              </TouchableOpacity>
              <ProvinceModal
                visible={isProvincePickerVisible}
                selector={provinceSelector}
                handleChange={handleChange_provinceSelector}
                confirm={confirmProvince}
                cancel={cancelProvince}
              />
              <TouchableOpacity onPress={toggleValidModal}>
                <View pointerEvents="none">
                  <TextField
                    label="Valid"
                    error1={validError}
                    value={dateTime(nowValid)}
                    error="* Valid is incorrect."
                    autoCapitalize="none"
                  />
                </View>
              </TouchableOpacity>
              <DateModal
                mode="valid-expire"
                title="Select Valid"
                visible={isValidPickerVisible}
                selector={validSelector}
                handleChange={handleChange_validSelector}
                confirm={confirmValid}
                cancel={cancelValid}
                valid={valid}
                expire={expire}
                validR={validR}
                expireR={expireR}
              />
              <TouchableOpacity onPress={toggleExpireModal}>
                <View pointerEvents="none">
                  <TextField
                    label="Expire"
                    error1={expireError}
                    value={dateTime(nowExpire)}
                    error="* Expire is incorrect."
                    autoCapitalize="none"
                  />
                </View>
              </TouchableOpacity>
              <DateModal
                mode="valid-expire"
                title="Select Expire"
                visible={isExpirePickerVisible}
                selector={expireSelector}
                handleChange={handleChange_expireSelector}
                confirm={confirmExpire}
                cancel={cancelExpire}
                valid={valid}
                expire={expire}
                validR={validR}
                expireR={expireR}
              />
              <TextField
                label="Quota"
                error1={quotaError}
                value={quota}
                error="* Please enter a valid quota."
                keyboardType="numeric"
                onChangeText={handleChange_quota}
                autoCapitalize="none"
              />
              <Text style={styles.sectionDescription}></Text>
              <TouchableHighlight
                style={styles.button}
                underlayColor="none"
                onPress={sent}
              >
                <View>
                  <Text style={styles.buttonText}>Share</Text>
                </View>
              </TouchableHighlight>
            </View>
          </View>
        </ImageBackground>
      </View>
    </ScrollView>
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
  col50: {
    width: "50%",
    paddingHorizontal: 4,
  },
  pic: {
    width: 110,
    height: 110,
    margin: "auto",
    //resizeMode: "stretch",
  },
  pic1: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,
    elevation: 20,
  },
  pic2: {
    borderRadius: 10,
    width: 100,
    height: 100,
    margin: 20,
  },
});

export default Share;
