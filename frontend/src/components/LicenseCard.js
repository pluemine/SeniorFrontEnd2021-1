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
  TouchableOpacity,
  Image,
} from "react-native";
import Modal from "react-native-modal";

import styles from "../Styles";
import axios from "axios";

const LicenseCard = (props) => {
  const { cat, number, province, lpid } = props;

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  function confirmDelete() {
    toggleModal();
    removeLicense();
  }

  function cancelDelete() {
    toggleModal();
  }

  const removeLicense = async () => {
    const token = await SecureStore.getItemAsync("pms_token");
    axios.delete(`http://localhost:4000/auth/lpapi?id=${lpid}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setTimeout(() => {
      Actions.refresh({ key: Math.random() });
    }, 500);
  };

  return (
    <View>
      <TouchableHighlight underlayColor="none" onPress={toggleModal}>
        <View style={styles.licenseCard}>
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
      </TouchableHighlight>
      <Modal isVisible={isModalVisible}>
        <View style={styles.modalCover}>
          <View style={styles.modalLicenseArea}>
            <View>
              <Text style={styles.modalTitle}>Manage</Text>
              <Image
                style={styles.noDataPic}
                source={require("../../assets/pic-nolicense.png")}
              />
            </View>
            <View>
              <View
                style={{
                  borderBottomColor: "#EEEEEE",
                  borderBottomWidth: 1,
                  marginHorizontal: 20,
                }}
              />
              <View style={styles.modalTextBlock}>
                <Text style={styles.modalTextTitle}>Your license plate</Text>
                <Text style={styles.modalTextDes}>
                  {cat} {number} {province}
                </Text>
              </View>
              <View
                style={{
                  borderBottomColor: "#EEEEEE",
                  borderBottomWidth: 1,
                  marginHorizontal: 20,
                }}
              />
              <View style={styles.modalDesBlock}>
                <Text style={styles.modalTextTitleHighlight}>Tip</Text>
              </View>
              <View style={styles.modalTextBlock}>
                <Text style={styles.modalTextTitle}>Remove license plate</Text>
                <Text style={styles.modalTextDes}>
                  Press Remove to confirm deletion
                </Text>
              </View>
              <View style={styles.modalTextBlock}>
                <Button
                  title="Remove"
                  color="#ff0000"
                  onPress={confirmDelete}
                />
              </View>
            </View>
          </View>
          <View style={styles.modalCancel}>
            <Button title="Cancel" onPress={cancelDelete} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles1 = StyleSheet.create({});

export default LicenseCard;
