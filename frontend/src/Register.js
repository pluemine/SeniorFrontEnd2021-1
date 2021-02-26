import React, { useState, Component } from "react";
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
} from "react-native";
import styles from "./Styles";
import axios from "axios";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [dateofbirth, setDateofbirth] = useState("");
  const [phone, setPhone] = useState("");

  const createUser = async () => {
    axios
      .post(`http://localhost:4000/users`, {
        email: email,
        firstname: firstname,
        lastname: lastname,
        birthdate: dateofbirth,
        tel_no: phone,
        password: password,
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
          <Text style={styles.sectionSubtitle}>WELCOME</Text>
          <Text style={styles.sectionTitle}>Create Account</Text>
          <TextInput
            style={styles.textbox}
            placeholder={"Email"}
            placeholderTextColor={"#898989"}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            style={styles.textbox}
            secureTextEntry={true}
            placeholder={"Password"}
            placeholderTextColor={"#898989"}
            onChangeText={(text) => setPassword(text)}
          />
          <TextInput
            style={styles.textbox}
            secureTextEntry={true}
            placeholder={"Confirm Password"}
            placeholderTextColor={"#898989"}
            onChangeText={(text) => setConfirm(text)}
          />
          <TextInput
            style={styles.textbox}
            placeholder={"First Name"}
            placeholderTextColor={"#898989"}
            onChangeText={(text) => setFirstname(text)}
          />
          <TextInput
            style={styles.textbox}
            placeholder={"Last Name"}
            placeholderTextColor={"#898989"}
            onChangeText={(text) => setLastname(text)}
          />
          <TextInput
            style={styles.textbox}
            placeholder={"Date of birth"}
            placeholderTextColor={"#898989"}
            onChangeText={(text) => setDateofbirth(text)}
          />
          <TextInput
            style={styles.textbox}
            placeholder={"Phone Number"}
            placeholderTextColor={"#898989"}
            onChangeText={(text) => setPhone(text)}
          />
          <Text style={styles.sectionDescription}></Text>
          <TouchableHighlight style={styles.button}>
            <Button color="#FFFFFF" title="Register" onPress={createUser} />
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

export default Register;
