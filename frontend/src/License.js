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

import LicenseCard from './components/LicenseCard';

import styles from './Styles';
import axios from 'axios';

import { connect } from 'react-redux';

const License = (props) => {
  const [licenses, setLicenses] = useState([]);
  const [des, setDes] = useState('Loading');
  const { constantValue } = props;

  useEffect(() => {
    const getLicense = async () => {
      const token = await SecureStore.getItemAsync('pms_token');
      axios
        .get(`http://localhost:4000/auth/lpapi`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          setLicenses(res.data.data.license_plates);
          console.log(res.data.data.license_plates);
          setDes('No License Plate');
        });
    };
    getLicense();
  }, []);

  const goAddLicense = (event) => {
    if (licenses.length <= 4 && des != 'Loading') {
      Actions.addlc();
    }
  };

  let screen;
  if (des === 'Loading') {
    screen = (
      <View style={styles.sectionContainerScroll}>
        <PulseIndicator color='#78aac2' />
      </View>
    );
  } else if (licenses.length > 0) {
    screen = (
      <ScrollView style={styles.sectionContainerScroll}>
        <View>
          {licenses.map((license, index) => {
            return (
              <LicenseCard
                key={'licensecard' + index}
                cat={license.license_plate_category}
                number={license.license_plate_number}
                province={
                  constantValue.current.idToProvinces[license.province_id]
                }
                lpid={license.license_plate_id}
              />
            );
          })}
        </View>
      </ScrollView>
    );
  } else {
    screen = (
      <View style={styles.sectionContainerScroll}>
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
        <Text style={styles.sectionTitlewoNav}>License Plate</Text>
      </View>
      {screen}
      <View style={styles.sectionContainerButton}>
        {des != 'Loading' ? (
          <TouchableHighlight
            style={licenses.length <= 4 ? styles.button : styles.buttonDisable}
            underlayColor='none'
            /*onPress={() => Actions.addlc()}*/
            onPress={() => goAddLicense()}
          >
            <View>
              <Text style={styles.buttonText}>Add new license plate</Text>
            </View>
          </TouchableHighlight>
        ) : (
          <View></View>
        )}
      </View>
    </View>
  );
};

const mapStateToProps = (state) => {
  const { constantValue } = state;
  return { constantValue };
};

const styles1 = StyleSheet.create({});

export default connect(mapStateToProps)(License);
