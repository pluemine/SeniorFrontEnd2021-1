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
  Image,
} from 'react-native';
import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
} from 'react-native-indicators';

import PaymentCard from './components/PaymentCard';

import styles from './Styles';
import axios from 'axios';
import { exp } from 'react-native-reanimated';
import parseErrorStack from 'react-native/Libraries/Core/Devtools/parseErrorStack';

const Payment = () => {
  const [payments, setPayments] = useState([]);
  const [des, setDes] = useState('Loading');
  const [primary, setPrimary] = useState('');

  useEffect(() => {
    const getPayment = async () => {
      const token = await SecureStore.getItemAsync('pms_token');
      axios
        .get(`http://localhost:4000/auth/capi/cards`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          setPayments(res.data.data.creditCards);
          console.log(res.data.data.creditCards);
          setDes('No Payment Method');
          if (res.data.primaryCreditCardID != null) {
            setPrimary(res.data.primaryCreditCardID.toString());
            console.log(res.data.primaryCreditCardID.toString());
          }
        });
    };
    getPayment();
  }, []);

  const goAddCard = (event) => {
    if (payments.length <= 4 && des != 'Loading') {
      //Actions.addcard({ set: setPayments });
      Actions.addcard({ isFirst: payments.length < 1 });
    }
  };

  let screen;
  if (des === 'Loading') {
    screen = (
      <View style={styles.sectionContainerScroll}>
        <PulseIndicator color='#78aac2' />
      </View>
    );
  } else if (payments.length > 0) {
    screen = (
      <ScrollView style={styles.sectionContainerScroll}>
        <View>
          {payments.map((payment, index) => {
            var expmth = '';
            if (payment.exp_month.toString().length == 1) {
              expmth = '0' + payment.exp_month.toString();
            } else {
              expmth = payment.exp_month.toString();
            }
            return (
              <PaymentCard
                key={'paymentcard' + index}
                number={payment.credit_card_number}
                expiremonth={expmth}
                expireyear={payment.exp_year.toString()}
                def={
                  primary != '' && primary == payment.credit_card_id.toString()
                }
                pcid={payment.credit_card_id}
                isLast={payments.length == 1}
              />
            );
          })}
        </View>
      </ScrollView>
    );
  } else {
    screen = (
      <View>
        <Text style={styles.noDataDes}>{des}</Text>
        <Image
          // style={styles.noDataImage}
          style={styles.noDataImage}
          source={require('../assets/No-data-rafiki.png')}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle='default' />
      <View style={styles.sectionContainerHeader}>
        <Text style={styles.sectionTitlewoNav}>Payment Method</Text>
      </View>
      {screen}
      <View style={styles.sectionContainerButton}>
        {des != 'Loading' ? (
          <TouchableHighlight
            style={payments.length <= 4 ? styles.button : styles.buttonDisable}
            underlayColor='none'
            /*onPress={() => Actions.addcard({set: setPayments})}*/
            onPress={() => goAddCard()}
          >
            <View>
              <Text style={styles.buttonText}>Add new credit / debit card</Text>
            </View>
          </TouchableHighlight>
        ) : (
          <View></View>
        )}
      </View>
    </View>
  );
};

const styles1 = StyleSheet.create({});

export default Payment;
