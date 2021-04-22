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

const ListModal = (props) => {
  const {
    data,
    title,
    visible,
    selector,
    handleChange,
    confirm,
    cancel,
  } = props;

  return (
    <Modal isVisible={visible}>
      <View style={styles.modalCover}>
        <View style={styles.modalProvinceArea}>
          <Text style={styles.modalTitle}>{title}</Text>
          <Image
            style={styles.noDataPic}
            source={require("../../assets/pic-city.jpg")}
          />
          <Picker
            selectedValue={selector}
            onValueChange={(itemValue, itemIndex) => handleChange(itemValue)}
          >
            {data.map((data, index) => {
              return (
                <Picker.Item
                  key={{title} + index}
                  label={(data+1).toString()}
                  value={(data+1).toString()}
                />
              );
            })}
          </Picker>
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

export default ListModal;
