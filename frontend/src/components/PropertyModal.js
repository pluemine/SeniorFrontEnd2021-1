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
          console.log(res.data.data.fee_rate.split(" "));
          setFees(res.data.data.fee_rate.split(" "));
          setDes("No access available");
        });
    };
    getFee();
  }, []);

  return (
    <Modal isVisible={visible}>
      <View style={styles.modalCover}>
        <View
          style={
            propimg != null
              ? styles.modalPropertyArea
              : styles.modalPropertyShorterArea
          }
        >
          <Text style={styles.modalTitle}>{propname}</Text>
          {propimg != null ? (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <View style={[styles.picPropertyOuter, { marginHorizontal: 24 }]}>
                <Image style={styles.picProperty} source={{ uri: propimg }} />
              </View>
              <View>
                <View style={styles.cardMenuBlock}>
                  <Text style={styles.textMenuTitle}>Province</Text>
                  <Text style={styles.textMenuDes}>{propprovince}</Text>
                </View>
                <View style={styles.cardMenuBlock}>
                  <Text style={styles.textMenuTitle}>Capacity</Text>
                  <Text style={styles.textMenuDes}>{propcapa}</Text>
                </View>
              </View>
            </View>
          ) : undefined}
          <View style={styles.cardContainer}>
            <View style={styles.cardMenuBlock}>
              <Text style={styles.textMenuTitleOrange}>Service rates</Text>
            </View>
            <View
              style={{
                borderBottomColor: "#EEEEEE",
                borderBottomWidth: 1,
              }}
            />
            <ScrollView>
              {fees.map((fee, index) => {
                const newfee = fee.split("/");
                return (
                  <View style={styles.cardMenuBlock}>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text style={styles.textMenuTitle}>
                        {newfee[0] === "0"
                          ? "First hour"
                          : "More than " + newfee[0] + " hours"}
                      </Text>
                      <Text style={styles.textMenuTitle}>
                        {newfee[1] === "0"
                          ? "No charge"
                          : "฿" + newfee[1] + " / hr"}
                      </Text>
                    </View>
                  </View>
                );
              })}
            </ScrollView>
            <View
              style={{
                borderBottomColor: "#EEEEEE",
                borderBottomWidth: 1,
              }}
            />
            <View style={styles.cardMenuBlock}>
              <Text style={styles.textMenuTitleRed}>Notice</Text>
              <Text style={styles.textMenuDes}>
                A fraction of an hour to be charged for one hour.
              </Text>
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
