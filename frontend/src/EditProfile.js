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

  const edit = async () => {
    const token = await SecureStore.getItemAsync("pms_token");
    axios
      .put(
        `http://localhost:4000/auth/uapi`,
        {
          firstname: editFirstname != "" ? editFirstname : firstname,
          lastname: editLastname != "" ? editLastname : lastname,
          password: editPassword != "" ? editPassword : undefined,
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
                    //error1={validError}
                    value={editFirstname}
                    //error="* Valid is incorrect."
                    onChangeText={(value) => setEditFirstname(value)}
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
                    //error1={validError}
                    value={editLastname}
                    //error="* Valid is incorrect."
                    onChangeText={(value) => setEditLastname(value)}
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
                  <Text style={styles.textMenuDes}>You can edit your password here</Text>
                  <TextField
                    label="New password"
                    //error1={validError}
                    value={editPassword}
                    //error="* Valid is incorrect."
                    onChangeText={(value) => setEditPassword(value)}
                    autoCapitalize="none"
                  />
                  <TextField
                    label="Confirm new password"
                    //error1={validError}
                    value={editConfirm}
                    //error="* Valid is incorrect."
                    onChangeText={(value) => setEditConfirm(value)}
                    autoCapitalize="none"
                  />
                </View>
              </TouchableHighlight>
              <View style={styles.cardMenuBlockButton}>
                <TouchableHighlight
                  style={styles.button}
                  underlayColor="none"
                  onPress={edit}
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
