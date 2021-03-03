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

const Share = () => {
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("");
  const [number, setNumber] = useState("");
  const [province, setProvince] = useState("");
  const [valid, setValid] = useState("");
  const [expire, setExpire] = useState("");
  const [quota, setQuota] = useState("");

  const shareAccess = async () => {
    axios
      .post(`http://localhost:4000/v1/uapi`, {
        user_id: 1,
        license_plate_id: 1,
        property_id: 2,
        valid_date_time: valid,
        expired_date_time: expire,
        usage_counts: 100,
        mins_per_usage: 120,
        share_qouta: 5,
        is_access_owner: true,
        is_charged_provider: false,
        is_sharable: false,
        created_by: 1,
        modified_by: 1,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        if (res.data === "Users was added successfully") {
          Actions.login();
        }
      });
  };

  return (
    <View style={styles.body}>
      <View style={styles.sectionContainer}>
        <View style={styles.mainarea}>
          <TextInput
            style={styles.textbox}
            placeholder={"Email"}
            placeholderTextColor={"#898989"}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            style={styles.textbox}
            placeholder={"Category"}
            placeholderTextColor={"#898989"}
            onChangeText={(text) => setCategory(text)}
          />
          <TextInput
            style={styles.textbox}
            placeholder={"Number"}
            placeholderTextColor={"#898989"}
            onChangeText={(text) => setNumber(text)}
          />
          <TextInput
            style={styles.textbox}
            placeholder={"Province"}
            placeholderTextColor={"#898989"}
            onChangeText={(text) => setProvince(text)}
          />
          <TextInput
            style={styles.textbox}
            placeholder={"Valid DateTime"}
            placeholderTextColor={"#898989"}
            onChangeText={(text) => setValid(text)}
          />
          <TextInput
            style={styles.textbox}
            placeholder={"Expire DateTime"}
            placeholderTextColor={"#898989"}
            onChangeText={(text) => setExpire(text)}
          />
          <TextInput
            style={styles.textbox}
            placeholder={"Share Quota"}
            placeholderTextColor={"#898989"}
            onChangeText={(text) => setQuota(text)}
          />
          <View style={styles.space10} />
          <TouchableHighlight style={styles.button}>
            <Button
              color="#FFFFFF"
              title="Share"
              onPress={() => Actions.homeuser()}
            />
          </TouchableHighlight>
          <Text style={styles1.texthead}></Text>
          <TouchableHighlight style={styles.button}>
            <Button
              color="#FFFFFF"
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
  },
  pic: {
    width: 110,
    height: 110,
    margin: "auto",
    //resizeMode: "stretch",
  },
});

export default Share;
