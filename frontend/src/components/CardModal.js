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

const CardModal = (props) => {
  const { data, visible, selector, handleChange, confirm, cancel } = props;
  return (
    <Modal isVisible={visible}>
      <View style={styles.modalCover}>
        <View style={styles.modalProvinceArea}>
          <Text style={styles.modalTitle}>Select Card</Text>
          <Image
            style={styles.noDataPic}
            source={require("../../assets/pic-city.jpg")}
          />
          <Picker
            selectedValue={selector}
            onValueChange={(itemValue, itemIndex) =>
              handleChange({
                card: data[itemIndex].credit_card_number,
                id: data[itemIndex].credit_card_id,
              })
            }
          >
            {data.map((data, index) => {
              const number = data.credit_card_number;
              return (
                <Picker.Item
                  key={"card" + index}
                  label={
                    //number.substring(0, 4) +
                    "**** **** **** " + number.substring(12, 16)
                  }
                  //value={data.credit_card_id.toString()}
                  value={data.credit_card_number}
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

export default CardModal;
