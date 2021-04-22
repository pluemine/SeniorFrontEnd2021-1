import React, { Component, useState, useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';
import { Actions } from 'react-native-router-flux';
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
} from 'react-native';
import Modal from 'react-native-modal';

import styles from '../Styles';
import axios from 'axios';
import { set } from 'react-native-reanimated';

const PaymentCard = (props) => {
  const { number, expiremonth, expireyear, def, pcid, isLast } = props;

  const [isModalVisible, setModalVisible] = useState(false);
  const [brand, setBrand] = useState('');
  const [deftext, setDeftext] = useState('');

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
    loadData();
  };

  function confirmDefault() {
    toggleModal();
    setDefault();
  }

  function confirmDelete() {
    toggleModal();
    removePayment();
  }

  function cancel() {
    toggleModal();
  }

  function loadData() {
    if (number[0] == '3') {
      setBrand('JCB');
    } else if (number[0] == '4') {
      setBrand('VISA');
    } else if (number[0] == '5') {
      setBrand('MASTERCARD');
    } else {
      setBrand('OTHER');
    }

    if (def) {
      setDeftext('');
    } else {
      setDeftext('');
    }
  }

  function namebrand() {
    if (number[0] == '3') {
      return require('../../assets/icon-jcb.png');
    } else if (number[0] == '4') {
      return require('../../assets/icon-visa.png');
    } else if (number[0] == '5') {
      return require('../../assets/icon-mastercard.png');
    } else {
      return require('../../assets/icon-nocard.png');
    }
  }

  const setDefault = async () => {
    const token = await SecureStore.getItemAsync('pms_token');
    await axios
      .put(
        `http://localhost:4000/auth/uapi/primaryCreditCard?id=${pcid}`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
        if (res.data.status === 'OK') {
          setTimeout(() => {
            Actions.refresh({ key: Math.random() });
          }, 500);
        }
      })
      .catch((error) => console.log(error));
  };

  const removePayment = async () => {
    const token = await SecureStore.getItemAsync('pms_token');
    console.log(number, def, pcid);
    axios.delete(`http://localhost:4000/auth/capi/card?id=${pcid}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setTimeout(() => {
      Actions.refresh({ key: Math.random() });
    }, 500);
  };

  return (
    <View>
      <TouchableHighlight underlayColor="none" onPress={toggleModal}>
        <View style={def ? styles.cardShowBorder : styles.cardShow}>
          <View style={styles.cardContainer}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Image
                  style={[styles.iconPayment, { marginRight: 20 }]}
                  source={namebrand()}
                />
                <View>
                  <Text style={styles.textSubtitle}>
                    {number.substring(0, 4) +
                      "********" +
                      number.substring(12, 16)}
                  </Text>
                  <Text style={styles.textDes}>
                    Expire {expiremonth + "/" + expireyear}
                  </Text>
                </View>
              </View>
              <Image
                style={styles.iconEdit}
                source={require("../../assets/icon-edit.png")}
              />
            </View>
          </View>
        </View>
      </TouchableHighlight>
      <Modal isVisible={isModalVisible}>
        <View style={styles.modalCover}>
          <View style={styles.modalPaymentArea}>
            <View>
              <Text style={styles.modalTitle}>Manage</Text>
              <Image
                style={styles.noDataPic}
                source={require('../../assets/pic-addcard.png')}
              />
            </View>
            <View>
              <View
                style={{
                  borderBottomColor: '#EEEEEE',
                  borderBottomWidth: 1,
                  marginHorizontal: 20,
                }}
              />
              <View style={styles.modalTextBlock}>
                <Text style={styles.modalTextTitle}>Your card</Text>
                <Text style={styles.modalTextDes}>
                  {number.substring(0, 4) +
                    '********' +
                    number.substring(12, 16) +
                    ' (' +
                    brand +
                    ') ' +
                    deftext}
                </Text>
              </View>
              <View
                style={{
                  borderBottomColor: '#EEEEEE',
                  borderBottomWidth: 1,
                  marginHorizontal: 20,
                }}
              />
              <View style={styles.modalDesBlock}>
                <Text style={styles.modalTextTitleHighlight}>Tips</Text>
              </View>
              <View style={styles.modalDesBlock}>
                <Text style={styles.modalTextTitle}>Set as primary card</Text>
                <Text style={styles.modalTextDes}>
                  Select the card as a default payment method
                </Text>
              </View>
              <View style={styles.modalTextBlock}>
                <Text style={styles.modalTextTitle}>Remove card</Text>
                <Text style={styles.modalTextDes}>
                  Press Remove to confirm deletion
                </Text>
              </View>
              <View style={styles.modalTextBlock}>
                <Button
                  title="Set as primary card"
                  color={def ? "#cccccc" : null}
                  onPress={def ? null : confirmDefault}
                  disabled={def ? true : false}
                />
              </View>
              <View
                style={{
                  borderBottomColor: '#EEEEEE',
                  borderBottomWidth: 1,
                  marginHorizontal: 20,
                }}
              />
              <View style={styles.modalTextBlock}>
                <Button
                  title='Remove'
                  color={def && !isLast ? '#cccccc' : '#ff0000'}
                  onPress={def && !isLast ? null : confirmDelete}
                  disabled={def && !isLast ? true : false}
                />
              </View>
            </View>
          </View>
          <View style={styles.modalCancel}>
            <Button title='Cancel' onPress={cancel} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles1 = StyleSheet.create({});

export default PaymentCard;
