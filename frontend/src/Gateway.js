import React, { Component, useState, useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';

const Gateway = () => {
  userLogin: async () => {
    axios
      .post(`http://localhost:4000/public/uapi/login`, {
        email: email,
        password: password,
      })
      .then(async (res) => {
        if (res.data.status === 'OK') {
          saveSecureStoreItem('pms_token', res.data.data.token);
          alert(await getSecureStoreItem('pms_token'));
          Actions.tabbar();
        } else {
          setFail(true);
        }
      })
      .catch((error) => {
        throw error;
      });
  };

  const createUser = async () => {
    axios
      .post(`http://localhost:4000/public/uapi`, {
        email: email,
        firstname: firstname,
        lastname: lastname,
        birthdate: dateTime(),
        tel_no: phone,
        password: password,
      })
      .then((res) => {
        //console.log(res);
        console.log(res.data.data);
        if (res.data.status === 'OK') {
          Actions.login();
        } else {
          if (res.data.data === 'DUPLICATED EMAIL') {
            setDupEmail(true);
          }
        }
      });
  };

  const shareAccess = async () => {
    const token = await SecureStore.getItemAsync('pms_token');
    axios
      .post(
        `http://localhost:4000/auth/pamapi/share`,
        {
          email: email,
          license_plate_category: category,
          license_plate_number: number,
          province_id: 1,
          property_id: 2,
          valid_date_time: null,
          expired_date_time: null,
          usage_counts: 100,
          mins_per_usage: 120,
          share_qouta: 5,
          is_charged_provider: false,
          is_sharable: false,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((res) => {
        console.log(res);
        console.log(res.data);
        if (res.data.status === 'OK') {
          alert('Access was shared!');
          Actions.popTo('accesshome');
        }
      })
      .catch((error) => {
        if (res.data.status === 'FAILED') {
          alert('Email or License Plate Does not exist');
        }
        throw error;
      });
  };
};

export default Gateway;
