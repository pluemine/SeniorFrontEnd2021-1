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
import { Picker } from "@react-native-picker/picker";
import { connect } from "react-redux";

import styles from "../Styles";

const ProvinceModal = (props) => {
  const { visible, selector, handleChange, confirm, cancel } = props;
  const { constantValue } = props;

  return (
    <Modal isVisible={visible}>
      <View style={styles.modalCover}>
        <View style={styles.modalProvinceArea}>
          <Text style={styles.modalTitle}>Province</Text>
          <Image
            style={styles.noDataPic}
            source={require("../../assets/pic-city.jpg")}
          />
          <Picker
            selectedValue={selector}
            onValueChange={(itemValue, itemIndex) => handleChange(itemValue)}
          >
            {constantValue.current.provinces.map((Item, index) => {
              return (
                <Picker.Item
                  key={"province" + index}
                  label={Item}
                  value={Item}
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

const mapStateToProps = (state) => {
  const { constantValue } = state;
  return { constantValue };
};

const styles1 = StyleSheet.create({});

export default connect(mapStateToProps)(ProvinceModal);
