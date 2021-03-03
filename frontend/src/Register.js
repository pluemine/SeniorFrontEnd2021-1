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
  Pressable,
} from "react-native";
import styles from "./Styles";
import axios from "axios";
import DatePicker from "react-native-date-picker";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [dateofbirth, setDateofbirth] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState(new Date());

  var x = date.getFullYear();
  var y = date.getMonth();
  var z = date.getDate();

  function dateTime() {
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

  const showDatePicker = () => {
    return (
      <DatePicker
        date={date}
        mode="date"
        placeholder="select date"
        format="DD-MM-YYYY"
        minDate="01-01-2016"
        maxDate="01-01-2019"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        onDateChange={(date) => {
          setDate(date);
        }}
      />
    );
  };

  const createUser = async () => {
    axios
      .post(`http://localhost:4000/v1/uapi`, {
        email: email,
        firstname: firstname,
        lastname: lastname,
        birthdate: dateTime(),
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
            secureTextEntry={false}
            textContentType={"oneTimeCode"}
            autoCompleteType={"off"}
            placeholder={"Password"}
            placeholderTextColor={"#898989"}
            onChangeText={(text) => setPassword(text)}
          />
          <TextInput
            style={styles.textbox}
            secureTextEntry={false}
            textContentType={"oneTimeCode"}
            autoCompleteType={"off"}
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
          <Text style={styles.sectionSubtitle}>{dateTime()}</Text>
          <DatePicker
            date={date}
            mode="date"
            placeholder="select date"
            format="DD-MM-YYYY"
            minDate="01-01-2016"
            maxDate="01-01-2019"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            onDateChange={(date) => {
              setDate(date);
            }}
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
