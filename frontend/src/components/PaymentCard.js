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

const PaymentCard = (props) => {
  const { card, exp, def } = props;
  return (
    <View style={def?styles.paymentCardBorder:styles.paymentCard}>
      <View style={styles.paymentCardBlock}>
        <View style={styles.paymentColContainer}>
          <View style={styles.paymentCol30}>
            <Image
              style={styles.paymentIcon}
              source={require("../../assets/icon-payment.png")}
            />
          </View>
          <View style={styles.paymentCol70}>
            <Text style={styles.paymentTitle}>{card}</Text>
            <Text style={styles.paymentExpire}>Expire {exp}</Text>
            {/*<Image
              style={styles.paymentTrash}
              source={require("../../assets/icon-trash.png")}
            />*/}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles1 = StyleSheet.create({});

export default PaymentCard;
