import React, { Component, useState } from 'react';
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
  ImageBackground,
} from 'react-native';
import styles from './Styles';
import axios from 'axios';
import ProvinceModal from './components/ProvinceModal';
import DateModal from './components/DateModal';
import ListModal from './components/ListModal';
import TextField from './components/TextField';
import * as Helper from './components/Helper';

import { connect } from 'react-redux';

const Share = (props) => {
  const {
    constantValue,
    propimg,
    placename,
    proptype,
    valid,
    expire,
    sharequota,
    usagecount,
    chargeprovider,
    sharable,
    propid,
    paid,
  } = props;

  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('');
  const [number, setNumber] = useState('');
  const [province, setProvince] = useState('เลือกจังหวัด');
  const [nowValid, setValid] = useState(new Date());
  const [nowExpire, setExpire] = useState(new Date());
  const [quota, setQuota] = useState('เลือกจำนวน');
  const [usage, setUsage] = useState('เลือกจำนวน');

  const [emailError, setEmailError] = useState(false);
  const [categoryError, setCategoryError] = useState(false);
  const [numberError, setNumberError] = useState(false);
  const [provinceError, setProvinceError] = useState(false);
  const [validError, setValidError] = useState(false);
  const [expireError, setExpireError] = useState(false);
  const [quotaError, setQuotaError] = useState(false);
  const [usageError, setUsageError] = useState(false);

  const [validSelector, setValidSelector] = useState(new Date());
  const [expireSelector, setExpireSelector] = useState(new Date());
  const [provinceSelector, setProvinceSelector] = useState('กรุงเทพมหานคร');
  const [quotaSelector, setQuotaSelector] = useState('เลือกจำนวน');
  const [usageSelector, setUsageSelector] = useState('เลือกจำนวน');

  const [isValidPickerVisible, setValidPickerVisible] = useState(false);
  const [isExpirePickerVisible, setExpirePickerVisible] = useState(false);
  const [isProvincePickerVisible, setProvincePickerVisible] = useState(false);
  const [isQuotaPickerVisible, setQuotaPickerVisible] = useState(false);
  const [isUsagePickerVisible, setUsagePickerVisible] = useState(false);

  const [today, setToday] = useState(new Date());

  const handleChange_email = (event) => {
    setEmail(event);
    setEmailError(false);
  };
  const handleChange_category = (event) => {
    setCategory(event);
    setCategoryError(false);
  };
  const handleChange_number = (event) => {
    setNumber(event);
    setNumberError(false);
  };
  const handleChange_quota = (event) => {
    setQuota(event);
    setQuotaError(false);
  };
  const handleChange_usage = (event) => {
    setUsage(event);
    setUsageError(false);
  };

  const toggleProvinceModal = () => {
    setProvincePickerVisible(!isProvincePickerVisible);
  };
  const handleChange_provinceSelector = (event) => {
    setProvinceSelector(event);
  };
  function confirmProvince() {
    toggleProvinceModal();
    setProvince(provinceSelector);
    setProvinceError(false);
  }
  function cancelProvince() {
    toggleProvinceModal();
    if (province === 'เลือกจังหวัด') {
      setProvinceSelector('กรุงเทพมหานคร');
    } else {
      setProvinceSelector(province);
    }
  }

  const toggleValidModal = () => {
    setValidPickerVisible(!isValidPickerVisible);
  };
  const handleChange_validSelector = (event) => {
    setValidSelector(event);
  };
  function confirmValid() {
    toggleValidModal();
    setValid(validSelector);
    if (new Date(validSelector).getDate() > new Date(nowExpire).getDate()) {
      setValidError(true);
      setExpireError(true);
    } else {
      setValidError(false);
      setExpireError(false);
    }
  }
  function cancelValid() {
    toggleValidModal();
    setValidSelector(nowValid);
  }

  const toggleExpireModal = () => {
    setExpirePickerVisible(!isExpirePickerVisible);
  };
  const handleChange_expireSelector = (event) => {
    setExpireSelector(event);
  };
  function confirmExpire() {
    toggleExpireModal();
    setExpire(expireSelector);
    if (new Date(expireSelector).getDate() < new Date(nowValid).getDate()) {
      setValidError(true);
      setExpireError(true);
    } else {
      setValidError(false);
      setExpireError(false);
    }
  }
  function cancelExpire() {
    toggleExpireModal();
    setExpireSelector(nowExpire);
  }

  const toggleQuotaModal = () => {
    setQuotaPickerVisible(!isQuotaPickerVisible);
  };
  const handleChange_quotaSelector = (event) => {
    setQuotaSelector(event);
  };
  function confirmQuota() {
    toggleQuotaModal();
    setQuota(quotaSelector);
    setQuotaError(false);
  }
  function cancelQuota() {
    console.log(Array.from(Array(sharequota).keys()));
    toggleQuotaModal();
    setQuotaSelector(quota);
  }

  const toggleUsageModal = () => {
    setUsagePickerVisible(!isUsagePickerVisible);
  };
  const handleChange_usageSelector = (event) => {
    setUsageSelector(event);
  };
  function confirmUsage() {
    toggleUsageModal();
    setUsage(usageSelector);
    setUsageError(false);
  }
  function cancelUsage() {
    console.log(Array.from(Array(usagecount).keys()));
    toggleUsageModal();
    setUsageSelector(usage);
  }

  const sent = () => {
    if (email === '') {
      setEmailError(true);
    }
    if (category === '') {
      setCategoryError(true);
    }
    if (number === '') {
      setNumberError(true);
    }
    if (province === 'เลือกจังหวัด') {
      setProvinceError(true);
    }
    if (nowValid === '') {
      setValidError(true);
    }
    if (nowExpire === '') {
      setExpireError(true);
    }
    if (quota === '') {
      setQuotaError(true);
    }
    if (usage === '') {
      setUsageError(true);
    }
    if (nowExpire < nowValid) {
      setValidError(true);
      setExpireError(true);
    }
    if (!isEmailValid()) {
      console.warn('Invalid Email');
      setEmailError(true);
    } else if (category === '') {
      setCategoryError(true);
    } else if (number === '') {
      setNumberError(true);
    } else if (province === 'เลือกจังหวัด') {
      setProvinceError(true);
    } else if (nowValid === '') {
      setValidError(true);
    } else if (nowExpire === '') {
      setExpireError(true);
    } else if (quota === '') {
      setQuotaError(true);
    } else if (usage === '') {
      setUsageError(true);
    } else if (
      !emailError &&
      !categoryError &&
      !numberError &&
      !provinceError &&
      !validError &&
      !expireError &&
      !quotaError &&
      !usageError
    ) {
      console.warn('Complete');
      shareAccess();
    }
  };

  const shareAccess = async () => {
    const token = await SecureStore.getItemAsync('pms_token');
    axios
      .post(
        `http://localhost:4000/auth/pamapi/share`,
        {
          parking_access_id: paid,
          email: email,
          license_plate_category: category,
          license_plate_number: number,
          province_id: constantValue.current.provincesToId[province],
          property_id: propid,
          valid_date_time: Helper.dateHyphen(nowValid),
          expired_date_time: Helper.dateHyphen(nowExpire),
          usage_counts: parseInt(usage),
          share_quota: parseInt(quota),
          is_charged_provider: chargeprovider,
          is_sharable: sharable,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((res) => {
        console.log(res);
        console.log(res.data);
        if (res.data.status === 'OK') {
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

  const isEmailValid = () => {
    let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(String(email).toLowerCase());
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle='default' />
      <View style={styles.container}>
        <ImageBackground
          style={styles.picBg}
          source={require('../assets/parking.jpg')}
        >
          <View style={styles.sectionContainerHeader}>
            <Text style={styles.sectionTitlewoNav}>Confirm Sharing</Text>
          </View>
          <ScrollView style={styles.cardTrans}>
            <View style={styles.cardContainerHeaderOverlay}>
              <View style={styles.cardMenuBlock}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <View style={styles.picShareOuter}>
                    <Image style={styles.picShare} source={{ uri: propimg }} />
                  </View>
                  <View>
                    <Text style={styles.textPreTitle}>{placename}</Text>
                    <Text style={styles.textMenuTitleOrange}>{proptype}</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.card}>
              <View style={styles.cardContainer}>
                <View style={styles.cardMenuBlock}>
                  <TextField
                    label='Email'
                    error1={emailError}
                    value={email}
                    error='* Please enter a valid email address.'
                    hint='example@address.com'
                    onChangeText={handleChange_email}
                    autoCapitalize='none'
                  />
                  <TextField
                    label='License Category'
                    error1={categoryError}
                    value={category}
                    error='* Please enter a valid license category.'
                    hint='กข'
                    maxLength={3}
                    onChangeText={handleChange_category}
                    autoCapitalize='none'
                  />
                  <TextField
                    label='License Number'
                    error1={numberError}
                    value={number}
                    error='* Please enter a valid license number.'
                    hint='1234'
                    mask='9999'
                    keyboardType='numeric'
                    onChangeText={handleChange_number}
                    autoCapitalize='none'
                  />
                  <TouchableOpacity onPress={toggleProvinceModal}>
                    <View pointerEvents='none'>
                      <TextField
                        label='License Province'
                        error1={provinceError}
                        value={province}
                        error='* Please select province.'
                        hint='กรุงเทพมหานคร'
                        autoCapitalize='none'
                      />
                    </View>
                  </TouchableOpacity>
                  <ProvinceModal
                    visible={isProvincePickerVisible}
                    selector={provinceSelector}
                    handleChange={handleChange_provinceSelector}
                    confirm={confirmProvince}
                    cancel={cancelProvince}
                  />
                  <TouchableOpacity onPress={toggleValidModal}>
                    <View pointerEvents='none'>
                      <TextField
                        label='Valid'
                        error1={validError}
                        value={Helper.dateHyphen(nowValid)}
                        error='* Valid is incorrect.'
                        autoCapitalize='none'
                      />
                    </View>
                  </TouchableOpacity>
                  <DateModal
                    mode='valid-expire'
                    title='Select Valid'
                    visible={isValidPickerVisible}
                    selector={validSelector}
                    handleChange={handleChange_validSelector}
                    confirm={confirmValid}
                    cancel={cancelValid}
                    valid={valid > today ? Helper.dateMonth(valid) : 'Today'}
                    expire={Helper.dateMonth(expire)}
                    validR={valid > today ? valid : today}
                    expireR={expire}
                  />
                  <TouchableOpacity onPress={toggleExpireModal}>
                    <View pointerEvents='none'>
                      <TextField
                        label='Expire'
                        error1={expireError}
                        value={Helper.dateHyphen(nowExpire)}
                        error='* Expire is incorrect.'
                        autoCapitalize='none'
                      />
                    </View>
                  </TouchableOpacity>
                  <DateModal
                    mode='valid-expire'
                    title='Select Expire'
                    visible={isExpirePickerVisible}
                    selector={expireSelector}
                    handleChange={handleChange_expireSelector}
                    confirm={confirmExpire}
                    cancel={cancelExpire}
                    valid={valid > today ? Helper.dateMonth(valid) : 'Today'}
                    expire={Helper.dateMonth(expire)}
                    validR={valid > today ? valid : today}
                    expireR={expire}
                  />
                  <TouchableOpacity onPress={toggleQuotaModal}>
                    <View pointerEvents='none'>
                      <TextField
                        label='Share Quota'
                        error1={quotaError}
                        value={quota}
                        error='* Please enter a valid quota.'
                        keyboardType='numeric'
                        onChangeText={handleChange_quota}
                        autoCapitalize='none'
                      />
                    </View>
                  </TouchableOpacity>
                  <ListModal
                    data={Array.from(Array(sharequota - 1).keys())}
                    title='Share Quota'
                    visible={isQuotaPickerVisible}
                    selector={quotaSelector}
                    handleChange={handleChange_quotaSelector}
                    confirm={confirmQuota}
                    cancel={cancelQuota}
                  />
                  <TouchableOpacity onPress={toggleUsageModal}>
                    <View pointerEvents='none'>
                      <TextField
                        label='Usage Count'
                        error1={usageError}
                        value={usage}
                        error='* Please enter a valid usage.'
                        keyboardType='numeric'
                        onChangeText={handleChange_usage}
                        autoCapitalize='none'
                      />
                    </View>
                  </TouchableOpacity>
                  <ListModal
                    data={Array.from(Array(usagecount).keys())}
                    title='Usage Count'
                    visible={isUsagePickerVisible}
                    selector={usageSelector}
                    handleChange={handleChange_usageSelector}
                    confirm={confirmUsage}
                    cancel={cancelUsage}
                  />
                  <View style={styles.cardMenuBlockButton}>
                    <TouchableHighlight
                      style={styles.button}
                      underlayColor='none'
                      onPress={sent}
                    >
                      <View>
                        <Text style={styles.buttonText}>Share</Text>
                      </View>
                    </TouchableHighlight>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    </View>
  );
};

const styles1 = StyleSheet.create({
  logo: {
    width: 300,
    height: 300,
    resizeMode: 'stretch',
    margin: 50,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  texthead: {
    color: '#444444',
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 10,
  },
  textdes: {
    color: '#444444',
    textAlign: 'center',
    fontSize: 12,
    marginBottom: 40,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start', // if you want to fill rows left to right
  },
  item1: {
    paddingRight: 10,
    width: '70%',
  },
  item2: {
    width: '30%',
  },
  col50: {
    width: '50%',
    paddingHorizontal: 4,
  },
  pic: {
    width: 110,
    height: 110,
    margin: 'auto',
    //resizeMode: "stretch",
  },
  pic1: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,
    elevation: 20,
  },
  pic2: {
    borderRadius: 10,
    width: 100,
    height: 100,
    margin: 20,
  },
});

const mapStateToProps = (state) => {
  const { constantValue } = state;
  return { constantValue };
};

export default connect(mapStateToProps)(Share);
