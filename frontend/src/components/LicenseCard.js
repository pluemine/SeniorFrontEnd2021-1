import React, { Component } from "react";
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
  TouchableOpacity,
  Image,
} from "react-native";
import { Router, Scene } from "react-native-router-flux";

import styles from "../Styles";

const LicenseCard = (props) => {
  const { cat, number, province, def } = props;
  return (
    <View style={def?styles.licenseCardBorder:styles.licenseCard}>
      <View style={styles.licenseCardBlock}>
        <View style={styles.licenseColContainer}>
          <View style={styles.licenseCol40}>
            <Image
              style={styles.licensePlateIcon}
              source={require("../../assets/icon-license.png")}
            />
          </View>
          <View style={styles.licenseCol60}>
            <View>
              <Text style={styles.licenseTitle}>
                {cat} {number}
              </Text>
              <Text style={styles.licenseProvince}>{province}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles1 = StyleSheet.create({});

export default LicenseCard;
