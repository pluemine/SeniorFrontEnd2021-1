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
import ProvinceModal from './components/ProvinceModal';
import TextField from './components/TextField';

import styles from './Styles';
import axios from 'axios';

import { connect } from 'react-redux';

const Addlc = (props) => {
  const [category, setCategory] = useState('');
  const [number, setNumber] = useState('');
  const [province, setProvince] = useState('เลือกจังหวัด');
  const [provinceSelector, setProvinceSelector] = useState('กรุงเทพมหานคร');
  const { constantValue } = props;

  const [categoryError, setCategoryError] = useState(false);
  const [numberError, setNumberError] = useState(false);
  const [provinceError, setProvinceError] = useState(false);

  const [isModalVisible, setModalVisible] = useState(false);

  const handleChange_category = (event) => {
    setCategory(event);
    setCategoryError(false);
  };
  const handleChange_number = (event) => {
    setNumber(event);
    setNumberError(false);
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleChange_provinceSelector = (event) => {
    setProvinceSelector(event);
  };

  function confirmProvince() {
    toggleModal();
    setProvince(provinceSelector);
    setProvinceError(false);
  }

  function cancelProvince() {
    toggleModal();
    if (province === 'เลือกจังหวัด') {
      setProvinceSelector('กรุงเทพมหานคร');
    } else {
      setProvinceSelector(province);
    }
  }

  const sent = () => {
    if (category === '') {
      setCategoryError(true);
    }
    if (number === '') {
      setNumberError(true);
    }
    if (province === 'เลือกจังหวัด') {
      setProvinceError(true);
    }
    if (category === '') {
      setCategoryError(true);
    } else if (number === '') {
      setNumberError(true);
    } else if (province === 'เลือกจังหวัด') {
      setProvinceError(true);
    } else if (!categoryError && !numberError && !provinceError) {
      console.warn('Complete');
      addLicense();
    }
  };

  const addLicense = async () => {
    const token = await SecureStore.getItemAsync('pms_token');
    axios
      .post(
        `http://localhost:4000/auth/lpapi`,
        {
          license_plate_category: category,
          license_plate_number: number,
          province_id: constantValue.current.provincesToId[province],
        },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((res) => {
        console.log(res);
        console.log(res.data);
        if (res.data.status === 'OK') {
          Actions.pop();
          setTimeout(() => {
            Actions.refresh({ key: Math.random() });
          }, 500);
        }
      });
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle='default' />
      <View style={styles.sectionContainerHeader}>
        <Text style={styles.sectionTitlewoNav}>Add License Plate</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <View style={{ width: '38%' }}>
            <TextField
              label='Category'
              error1={categoryError}
              value={category}
              error='* Incorrect'
              hint='หมวดหมู่ เช่น กข'
              maxLength={3}
              onChangeText={handleChange_category}
              autoCapitalize='none'
            />
          </View>
          <View style={{ width: '64%' }}>
            <TextField
              label='Number'
              error1={numberError}
              value={number}
              error='* Incorrect'
              hint='เลขทะเบียน เช่น 1234 (สูงสุด 5 ตัว)'
              mask='99999'
              keyboardType='numeric'
              onChangeText={handleChange_number}
              autoCapitalize='none'
            />
          </View>
        </View>
        <TouchableOpacity onPress={toggleModal}>
          <View pointerEvents='none'>
            <TextField
              label='Province'
              error1={provinceError}
              value={province}
              error='* Please select a province.'
              hint='กรุงเทพมหานคร'
              autoCapitalize='none'
            />
          </View>
        </TouchableOpacity>
        <ProvinceModal
          visible={isModalVisible}
          selector={provinceSelector}
          handleChange={handleChange_provinceSelector}
          confirm={confirmProvince}
          cancel={cancelProvince}
        />
        <Text> </Text>
        <TouchableHighlight
          style={styles.button}
          underlayColor='none'
          onPress={sent}
        >
          <View>
            <Text style={styles.buttonText}>Add</Text>
          </View>
        </TouchableHighlight>
      </View>
      {/*<Image
        style={styles.bgAddLcPic}
        source={require('../assets/Winter_road_pana.png')}
      />*/}
    </View>
  );
};

const mapStateToProps = (state) => {
  const { constantValue } = state;
  return { constantValue };
};

const styles1 = StyleSheet.create({});

export default connect(mapStateToProps)(Addlc);
