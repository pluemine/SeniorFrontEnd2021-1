import React, { Component, useState, useEffect } from "react";
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
import DatePicker from "react-native-date-picker";

import styles from "../Styles";

const DateModal = (props) => {
  const {
    mode,
    title,
    visible,
    selector,
    handleChange,
    confirm,
    cancel,
    valid,
    expire,
    validR,
    expireR,
  } = props;

  let picker;
  if (mode == "valid-expire") {
    picker = (
      <DatePicker
        mode="date"
        format="YYYY-MM-DD"
        date={selector}
        minimumDate={new Date(validR)}
        maximumDate={new Date(expireR)}
        onDateChange={(selector) => {
          handleChange(selector);
        }}
      />
    );
  } else if (mode == "time") {
    picker = (
      <DatePicker
        mode="date"
        format="YYYY-MM-DD"
        date={selector}
        onDateChange={(selector) => {
          handleChange(selector);
        }}
      />
    );
  }

  return (
    <Modal isVisible={visible}>
      <View style={styles.modalCover}>
        <View style={mode == "valid-expire" ? styles.modalTimeArea : styles.modalTimeLongerArea}>
          <View>
            <Text style={styles.modalTitle}>{title}</Text>
            {mode == "valid-expire" ? (
              <View>
                <View style={styles.modalTextBlock}>
                  <Text style={styles.modalTextTitle}>Available by</Text>
                  <Text style={styles.modalTextDes}>
                    {valid} - {expire}
                  </Text>
                </View>
                <View
                  style={{
                    borderBottomColor: "#EEEEEE",
                    borderBottomWidth: 1,
                    marginHorizontal: 20,
                    marginBottom: 20,
                  }}
                />
              </View>
            ) : (
                <Image
                style={styles.noDataPic}
                source={require("../../assets/pic-time.jpg")}
              />
            )}
          </View>
          <View style={{ alignItems: "center" }}>{picker}</View>
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

export default DateModal;
