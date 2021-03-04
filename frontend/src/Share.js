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
import axios from "axios";
import { FloatingLabelInput } from "react-native-floating-label-input";

const Share = () => {
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("");
  const [number, setNumber] = useState("");
  const [province, setProvince] = useState("");
  const [valid, setValid] = useState("");
  const [expire, setExpire] = useState("");
  const [quota, setQuota] = useState("");

  const [emailError, setEmailError] = useState(false);
  const [categoryError, setCategoryError] = useState(false);
  const [numberError, setNumberError] = useState(false);
  const [provinceError, setProvinceError] = useState(false);
  const [validError, setValidError] = useState(false);
  const [expireError, setExpireError] = useState(false);
  const [quotaError, setQuotaError] = useState(false);

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
  const handleChange_province = (event) => {
    setProvince(event);
    setProvinceError(false);
  };
  const handleChange_valid = (event) => {
    setValid(event);
    setValidError(false);
  };
  const handleChange_expire = (event) => {
    setExpire(event);
    setExpireError(false);
  };
  const handleChange_quota = (event) => {
    setQuota(event);
    setQuotaError(false);
  };

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
    if (province === "") {
      setProvinceError(true);
    }
    if (valid === "") {
      setValidError(true);
    }
    if (expire === "") {
      setExpireError(true);
    }
    if (quota === "") {
      setQuotaError(true);
    }
    if (!isEmailValid()) {
      console.warn("Invalid Email");
      setEmailError(true);
    } else if (category === "") {
      setCategoryError(true);
    } else if (number === "") {
      setNumberError(true);
    } else if (province === "") {
      setProvinceError(true);
    } else if (valid === "") {
      setValidError(true);
    } else if (expire === "") {
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

  const shareAccess = async () => {
    axios
      .post(`http://localhost:4000/v1/uapi/share`, {
        email: email,
        license_plate_category: category,
        license_plate_number: number,
        province_id: "1",
        property_id: "2",
        valid_date_time: "null",
        expired_date_time: "null",
        usage_counts: 100,
        mins_per_usage: 120,
        share_qouta: 5,
        is_charged_provider: false,
        is_sharable: false,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        if (res.data.status === "OK") {
          console.warn("OK");
          Actions.login();
        }
      });
  };

  const isEmailValid = () => {
    let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(String(email).toLowerCase());
  };

  return (
    <View style={styles.body}>
      <View style={styles.sectionContainer}>
        <View style={styles.mainarea}>
          <FloatingLabelInput
            label={"Email"}
            containerStyles={emailError ? styles.textboxerror : styles.textbox}
            customLabelStyles={
              emailError
                ? { colorFocused: "#FF0000", colorBlurred: "#FF0000" }
                : { colorFocused: "#898989", colorBlurred: "#898989" }
            }
            inputStyles={{
              color: "#000000",
              paddingHorizontal: 5,
            }}
            value={email}
            hint="example@address.com"
            isPassword={false}
            onChangeText={handleChange_email}
          />
          {emailError ? (
            <Text style={styles.texterror}>* Email</Text>
          ) : (
            <Text style={styles.texterror}> </Text>
          )}
          <FloatingLabelInput
            label={"Category"}
            containerStyles={
              categoryError ? styles.textboxerror : styles.textbox
            }
            customLabelStyles={
              categoryError
                ? { colorFocused: "#FF0000", colorBlurred: "#FF0000" }
                : { colorFocused: "#898989", colorBlurred: "#898989" }
            }
            inputStyles={{
              color: "#000000",
              paddingHorizontal: 5,
            }}
            value={category}
            hint="กก"
            isPassword={false}
            onChangeText={handleChange_category}
          />
          {categoryError ? (
            <Text style={styles.texterror}>* Category</Text>
          ) : (
            <Text style={styles.texterror}> </Text>
          )}
          <FloatingLabelInput
            label={"Number"}
            containerStyles={numberError ? styles.textboxerror : styles.textbox}
            customLabelStyles={
              numberError
                ? { colorFocused: "#FF0000", colorBlurred: "#FF0000" }
                : { colorFocused: "#898989", colorBlurred: "#898989" }
            }
            inputStyles={{
              color: "#000000",
              paddingHorizontal: 5,
            }}
            value={number}
            hint="9999"
            isPassword={false}
            onChangeText={handleChange_number}
          />
          {numberError ? (
            <Text style={styles.texterror}>* number</Text>
          ) : (
            <Text style={styles.texterror}> </Text>
          )}
          <FloatingLabelInput
            label={"Province"}
            containerStyles={
              provinceError ? styles.textboxerror : styles.textbox
            }
            customLabelStyles={
              provinceError
                ? { colorFocused: "#FF0000", colorBlurred: "#FF0000" }
                : { colorFocused: "#898989", colorBlurred: "#898989" }
            }
            inputStyles={{
              color: "#000000",
              paddingHorizontal: 5,
            }}
            value={province}
            hint="กรุงเทพมหานคร"
            isPassword={false}
            onChangeText={handleChange_province}
          />
          {provinceError ? (
            <Text style={styles.texterror}>* province</Text>
          ) : (
            <Text style={styles.texterror}> </Text>
          )}
          <FloatingLabelInput
            label={"Valid"}
            containerStyles={validError ? styles.textboxerror : styles.textbox}
            customLabelStyles={
              validError
                ? { colorFocused: "#FF0000", colorBlurred: "#FF0000" }
                : { colorFocused: "#898989", colorBlurred: "#898989" }
            }
            inputStyles={{
              color: "#000000",
              paddingHorizontal: 5,
            }}
            value={valid}
            hint=""
            isPassword={false}
            onChangeText={handleChange_valid}
          />
          {validError ? (
            <Text style={styles.texterror}>* valid</Text>
          ) : (
            <Text style={styles.texterror}> </Text>
          )}
          <FloatingLabelInput
            label={"Expire"}
            containerStyles={expireError ? styles.textboxerror : styles.textbox}
            customLabelStyles={
              expireError
                ? { colorFocused: "#FF0000", colorBlurred: "#FF0000" }
                : { colorFocused: "#898989", colorBlurred: "#898989" }
            }
            inputStyles={{
              color: "#000000",
              paddingHorizontal: 5,
            }}
            value={expire}
            hint=""
            isPassword={false}
            onChangeText={handleChange_expire}
          />
          {expireError ? (
            <Text style={styles.texterror}>* expire</Text>
          ) : (
            <Text style={styles.texterror}> </Text>
          )}
          <FloatingLabelInput
            label={"Quota"}
            containerStyles={quotaError ? styles.textboxerror : styles.textbox}
            customLabelStyles={
              quotaError
                ? { colorFocused: "#FF0000", colorBlurred: "#FF0000" }
                : { colorFocused: "#898989", colorBlurred: "#898989" }
            }
            inputStyles={{
              color: "#000000",
              paddingHorizontal: 5,
            }}
            value={quota}
            hint=""
            isPassword={false}
            onChangeText={handleChange_quota}
          />
          {quotaError ? (
            <Text style={styles.texterror}>* quota</Text>
          ) : (
            <Text style={styles.texterror}> </Text>
          )}
          <View style={styles.space10} />
          <View style={styles1.container}>
            <View style={styles1.col50}>
              <TouchableHighlight style={styles.buttonhomebdr}>
                <Button
                  color="#444444"
                  title="Cancel"
                  onPress={() => Actions.homeuser()}
                />
              </TouchableHighlight>
            </View>
            <View style={styles1.col50}>
              <TouchableHighlight style={styles.buttonhome}>
                <Button color="#FFFFFF" title="Share" onPress={sent} />
              </TouchableHighlight>
            </View>
          </View>
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
});

export default Share;
