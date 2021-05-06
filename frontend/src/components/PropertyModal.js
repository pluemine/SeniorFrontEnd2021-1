import React, { Component, useState, useEffect } from "react";
import * as SecureStore from "expo-secure-store";
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
import Modal from "react-native-modal";
import { Picker } from "@react-native-picker/picker";

import styles from "../Styles";
import axios from "axios";

const PropertyModal = (props) => {
  const {
    propid,
    propname,
    proptype,
    propcapa,
    propimg,
    propprovince,
    visible,
    cancel,
  } = props;

  const [fees, setFees] = useState([]);
  const [des, setDes] = useState("Loading");

  useEffect(() => {
    const getFee = async () => {
      const token = await SecureStore.getItemAsync("pms_token");
      axios
        .get(
          `http://localhost:4000/auth/ptapi/feeRateByProperty?id=${propid}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .then((res) => {
          setFees(res.data.data.fee_rate);
          console.log(res.data.data.fee_rate);
          setDes("No access available");
        });
    };
    getFee();
  }, []);

  return (
    <Modal isVisible={visible}>
      <View style={styles.modalCover}>
        <View style={styles.modalPropertyArea}>
          <Text style={styles.modalTitle}>{propname}</Text>
          <View style={[styles.picPropertyOuter, { alignItems: "center" }]}>
            <Image style={styles.picProperty} source={{ uri: propimg }} />
          </View>
          <View style={styles.cardContainer}>
            <View style={styles.cardMenuBlock}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.textMenuTitle}>Province</Text>
                <Text style={styles.textMenuTitle}>{propprovince}</Text>
              </View>
            </View>
            <View style={styles.cardMenuBlock}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.textMenuTitle}>Capacity</Text>
                <Text style={styles.textMenuTitle}>{propcapa}</Text>
              </View>
            </View>
            <View style={styles.cardMenuBlock}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.textMenuTitle}>Fee rate</Text>
                <Text style={styles.textMenuTitle}>{fees}</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.modalCancel}>
          <Button title="Close" onPress={cancel} />
        </View>
      </View>
    </Modal>
  );
};

const styles1 = StyleSheet.create({});

export default PropertyModal;
