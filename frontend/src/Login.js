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
} from "react-native";
import styles from "./Styles";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userLogin = async () => {
    axios
      .post(`http://localhost:4000/v1/uapi/login`, {
        email: email,
        password: password,
      })
      .then((res) => {
        //console.log(res);
        console.log(res.data);
      });
  };

  return (
    <View style={styles.body}>
      <View style={styles.sectionContainer}>
        <View style={styles.mainarea}>
          <Text style={styles.sectionSubtitle}>WELCOME</Text>
          <Text style={styles.sectionTitle}>Sign In</Text>
          <Text style={{ padding: 10, fontSize: 42 }}>{password}</Text>
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
          <Text style={styles.sectionDescription}></Text>
          <TouchableHighlight style={styles.button}>
            <Button
              color="#FFFFFF"
              title="Sign In"
              onPress={() => Actions.homeuser()}
            />
          </TouchableHighlight>
          <Text style={styles.sectionOption}>Forgot Password</Text>
        </View>
      </View>
    </View>
  );
};

const styles1 = StyleSheet.create({});

export default Login;
