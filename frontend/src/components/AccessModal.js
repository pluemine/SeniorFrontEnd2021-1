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
import AccessList from "./AccessList";

import styles from "../Styles";
import axios from "axios";

const AccessModal = (props) => {
  const { data, propId, visible, selector, handleChange, confirm, cancel } = props;
  const [des, setDes] = useState("");

  return (
    <Modal isVisible={visible}>
      <View style={styles.modalCover}>
        <View style={styles.modalAccessArea}>
          <Text style={styles.modalTitle}>Select Access</Text>
          <ScrollView style={{ height: 400 }}>
            <AccessList
              paid={null}
              propname={"None"}
              time={null}
              selector={selector}
              handleChange={handleChange}
            />
            {data.map((access, index) => {
              return (
                <AccessList
                  key={"accesslist" + index}
                  paid={access.parking_access_id}
                  propname={access.property_name}
                  time={access.mins_per_usage}
                  selector={selector}
                  handleChange={handleChange}
                />
              );
            })}
          </ScrollView>
          <View style={styles.modalTextBlock}>
            <Button title="Select" onPress={confirm} />
          </View>
        </View>
        <View style={styles.modalCancel}>
          <Button title="Cancel" onPress={cancel} />
        </View>
      </View>
    </Modal>
  );
};

const styles1 = StyleSheet.create({});

export default AccessModal;
