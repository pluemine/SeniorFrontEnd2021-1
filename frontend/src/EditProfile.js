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
  Image,
  ImageBackground,
} from "react-native";
import styles from "./Styles";
import axios from "axios";
import TextField from "./components/TextField";

const EditProfile = (props) => {
  const { firstname, lastname, email, img } = props;

  const [editFirstname, setEditFirstname] = useState(firstname);
  const [editLastname, setEditLastname] = useState(lastname);
  const [editPassword, setEditPassword] = useState("");
  const [editConfirm, setEditConfirm] = useState("");

  const [firstnameError, setFirstnameError] = useState(false);
  const [lastnameError, setLastnameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmError, setConfirmError] = useState(false);

  const editUser = async () => {
    const token = await SecureStore.getItemAsync("pms_token");
    axios
      .put(
        `http://localhost:4000/auth/uapi`,
        {
          firstname: editFirstname != "" ? editFirstname : firstname,
          lastname: editLastname != "" ? editLastname : lastname,
          password: editPassword != "" ? editPassword : null,
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

  const sent = () => {
    if (editFirstname === "") {
      setFirstnameError(true);
    }
    if (editLastname === "") {
      setLastnameError(true);
    }
    if (editPassword.length > 0 && editPassword.length < 8) {
      setPasswordError(true);
    }
    if (editFirstname === "") {
      setFirstnameError(true);
    } else if (editLastname === "") {
      setLastnameError(true);
    } else if (editPassword.length > 0 && editPassword.length < 8) {
      setPasswordError(true);
    } else if (editPassword != editConfirm) {
      setConfirmError(true);
    } else if (
      !firstnameError &&
      !lastnameError &&
      !passwordError &&
      !confirmError
    ) {
      editUser();
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="default" />
      <ImageBackground
        style={styles.picBg}
        source={require("../assets/parking.jpg")}
      >
        <View style={styles.sectionContainerHeader}>
          <Text style={styles.sectionTitlewoNav}>Edit Profile</Text>
        </View>
        <View style={styles.cardTrans}>
          <View style={styles.cardContainerHeaderOverlay}>
            <View style={styles.cardMenuBlock}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Image
                  style={styles.iconAvatar}
                  source={
                    img != null ? { uri: img } : require("../assets/user.png")
                  }
                />
                <View>
                  <Text style={styles.textSubtitle}>
                    {firstname} {lastname}
                  </Text>
                  <Text style={styles.textDes}>{email}</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.card}>
            <View style={styles.cardContainer}>
              <TouchableHighlight
                underlayColor="none"
                style={styles.cardMenuBlock}
              >
                <View>
                  <Text style={styles.textMenuTitle}>Firstname</Text>
                  <Text style={styles.textMenuDes}>
                    You can edit your firstname here
                  </Text>
                  <TextField
                    label="New firstname"
                    error1={firstnameError}
                    value={editFirstname}
                    error="* Please enter your new firstname."
                    onChangeText={(value) => {
                      setEditFirstname(value);
                      setFirstnameError(false);
                    }}
                    autoCapitalize="none"
                  />
                </View>
              </TouchableHighlight>
              <TouchableHighlight
                underlayColor="none"
                style={styles.cardMenuBlock}
              >
                <View>
                  <Text style={styles.textMenuTitle}>Lastname</Text>
                  <Text style={styles.textMenuDes}>
                    You can edit your lastname here
                  </Text>
                  <TextField
                    label="New lastname"
                    error1={lastnameError}
                    value={editLastname}
                    error="* Please enter your new lastname."
                    onChangeText={(value) => {
                      setEditLastname(value);
                      setLastnameError(false);
                    }}
                    autoCapitalize="none"
                  />
                </View>
              </TouchableHighlight>
              <TouchableHighlight
                underlayColor="none"
                style={styles.cardMenuBlock}
              >
                <View>
                  <Text style={styles.textMenuTitle}>Password</Text>
                  <Text style={styles.textMenuDes}>
                    You can edit your password here
                  </Text>
                  <TextField
                    label="New password"
                    error1={passwordError || confirmError}
                    value={editPassword}
                    error={
                      !passwordError && confirmError
                        ? "* Please enter the same password."
                        : "* Please enter a valid password. (At least 8 characters)"
                    }
                    onChangeText={(value) => {
                      setEditPassword(value);
                      setPasswordError(false);
                      setConfirmError(false);
                    }}
                    autoCapitalize="none"
                  />
                  <TextField
                    label="Confirm new password"
                    error1={confirmError}
                    value={editConfirm}
                    error="* Please enter the same password."
                    onChangeText={(value) => {
                      setEditConfirm(value);
                      setPasswordError(false);
                      setConfirmError(false);
                    }}
                    autoCapitalize="none"
                  />
                </View>
              </TouchableHighlight>
              <View style={styles.cardMenuBlockButton}>
                <TouchableHighlight
                  style={styles.button}
                  underlayColor="none"
                  onPress={sent}
                >
                  <View>
                    <Text style={styles.buttonText}>Edit Profile</Text>
                  </View>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles1 = StyleSheet.create({
  pic: {
    width: "100%",
    height: "100%",
    justifyContent: "space-between",
    backgroundColor: "rgba(255,255,255,0.92)",
  },
});

export default EditProfile;
