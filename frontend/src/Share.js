import React, { Component, useState } from 'react';
import * as SecureStore from 'expo-secure-store';
import { Actions } from 'react-native-router-flux';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
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
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { FloatingLabelInput } from 'react-native-floating-label-input';

const Share = (props) => {
  const { propimg, placename, proptype } = props;

  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('');
  const [number, setNumber] = useState('');
  const [province, setProvince] = useState('');
  const [valid, setValid] = useState(new Date());
  const [expire, setExpire] = useState(new Date());
  const [quota, setQuota] = useState('');

  const [emailError, setEmailError] = useState(false);
  const [categoryError, setCategoryError] = useState(false);
  const [numberError, setNumberError] = useState(false);
  const [provinceError, setProvinceError] = useState(false);
  const [validError, setValidError] = useState(false);
  const [expireError, setExpireError] = useState(false);
  const [quotaError, setQuotaError] = useState(false);

  const [isValidPickerVisible, setValidPickerVisibility] = useState(false);
  const [isExpirePickerVisible, setExpirePickerVisibility] = useState(false);

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
  const handleChange_province = (event) => {
    setProvince(event);
    setProvinceError(false);
  };
  const handleChange_valid = (event) => {
    setValid(event);
    setValidError(false);
  };
  const handleChange_expire = (event) => {
    setExpire(event);
    setExpireError(false);
  };
  const handleChange_quota = (event) => {
    setQuota(event);
    setQuotaError(false);
  };

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
    if (province === '') {
      setProvinceError(true);
    }
    if (valid === '') {
      setValidError(true);
    }
    if (expire === '') {
      setExpireError(true);
    }
    if (quota === '') {
      setQuotaError(true);
    }
    if (expire < valid) {
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
    } else if (province === '') {
      setProvinceError(true);
    } else if (valid === '') {
      setValidError(true);
    } else if (expire === '') {
      setExpireError(true);
    } else if (quota === '') {
      setQuotaError(true);
    } else if (
      !emailError &&
      !categoryError &&
      !numberError &&
      !provinceError &&
      !validError &&
      !expireError &&
      !quotaError
    ) {
      console.warn('Complete');
      shareAccess();
    }
  };

  function dateTime(date) {
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    if (parseInt(day) - 10 >= 0) {
      if (parseInt(month) - 10 >= 0) {
        return '' + year + '-' + month + '-' + day;
      } else {
        return '' + year + '-0' + month + '-' + day;
      }
    } else {
      if (parseInt(month) - 10 >= 0) {
        return '' + year + '-' + month + '-0' + day;
      } else {
        return '' + year + '-0' + month + '-0' + day;
      }
    }
  }

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

  const isEmailValid = () => {
    let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(String(email).toLowerCase());
  };

  const showValidPicker = () => {
    setValidPickerVisibility(true);
  };
  const hideValidPicker = () => {
    setValidPickerVisibility(false);
  };
  const handleValidConfirm = (date) => {
    setValid(date);
    hideValidPicker();
    if (expire < date) {
      setValidError(true);
      setExpireError(true);
    } else {
      setValidError(false);
      setExpireError(false);
    }
  };
  const showExpirePicker = () => {
    setExpirePickerVisibility(true);
  };
  const hideExpirePicker = () => {
    setExpirePickerVisibility(false);
  };
  const handleExpireConfirm = (date) => {
    setExpire(date);
    hideExpirePicker();
    if (date < valid) {
      setValidError(true);
      setExpireError(true);
    } else {
      setValidError(false);
      setExpireError(false);
    }
  };

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between' }}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <ImageBackground
          style={styles.pic}
          source={{ uri: propimg }}
          blurRadius={25}
        >
          <View style={styles.shareImageContainer}>
            <View style={styles.shareColContainer}>
              <View style={styles.shareCol40}>
                <View style={styles.sharePicOuter}>
                  <Image style={styles.sharePic} source={{ uri: propimg }} />
                </View>
              </View>
              <View style={styles.shareCol60}>
                <Text style={styles.shareTitle}>{placename}</Text>
                <Text style={styles.shareSubtitle}>{proptype}</Text>
              </View>
            </View>
          </View>
          <View style={styles.accessCard}>
            <View style={styles.accessContainer}>
              <Text style={styles.sectionTitle}>Confirm Sharing</Text>
              <FloatingLabelInput
                label={'Email'}
                containerStyles={
                  emailError ? styles.textboxerror : styles.textbox
                }
                customLabelStyles={
                  emailError
                    ? { colorFocused: '#FF0000', colorBlurred: '#FF0000' }
                    : { colorFocused: '#898989', colorBlurred: '#898989' }
                }
                inputStyles={{
                  color: '#000000',
                  paddingHorizontal: 5,
                }}
                value={email}
                hint='example@address.com'
                isPassword={false}
                onChangeText={handleChange_email}
                autoCapitalize='none'
              />
              {emailError ? (
                <Text style={styles.texterror}>* Email</Text>
              ) : (
                <Text style={styles.texterror}> </Text>
              )}
              <FloatingLabelInput
                label={'Category'}
                containerStyles={
                  categoryError ? styles.textboxerror : styles.textbox
                }
                customLabelStyles={
                  categoryError
                    ? { colorFocused: '#FF0000', colorBlurred: '#FF0000' }
                    : { colorFocused: '#898989', colorBlurred: '#898989' }
                }
                inputStyles={{
                  color: '#000000',
                  paddingHorizontal: 5,
                }}
                value={category}
                hint='กก'
                isPassword={false}
                onChangeText={handleChange_category}
                autoCapitalize='none'
                autoCorrect={false}
              />
              {categoryError ? (
                <Text style={styles.texterror}>* Category</Text>
              ) : (
                <Text style={styles.texterror}> </Text>
              )}
              <FloatingLabelInput
                label={'Number'}
                containerStyles={
                  numberError ? styles.textboxerror : styles.textbox
                }
                customLabelStyles={
                  numberError
                    ? { colorFocused: '#FF0000', colorBlurred: '#FF0000' }
                    : { colorFocused: '#898989', colorBlurred: '#898989' }
                }
                inputStyles={{
                  color: '#000000',
                  paddingHorizontal: 5,
                }}
                value={number}
                hint='9999'
                mask='9999'
                isPassword={false}
                keyboardType='numeric'
                onChangeText={handleChange_number}
                autoCapitalize='none'
              />
              {numberError ? (
                <Text style={styles.texterror}>* number</Text>
              ) : (
                <Text style={styles.texterror}> </Text>
              )}
              <FloatingLabelInput
                label={'Province'}
                containerStyles={
                  provinceError ? styles.textboxerror : styles.textbox
                }
                customLabelStyles={
                  provinceError
                    ? { colorFocused: '#FF0000', colorBlurred: '#FF0000' }
                    : { colorFocused: '#898989', colorBlurred: '#898989' }
                }
                inputStyles={{
                  color: '#000000',
                  paddingHorizontal: 5,
                }}
                value={province}
                hint='กรุงเทพมหานคร'
                isPassword={false}
                onChangeText={handleChange_province}
                autoCapitalize='none'
              />
              {provinceError ? (
                <Text style={styles.texterror}>* province</Text>
              ) : (
                <Text style={styles.texterror}> </Text>
              )}

              <TouchableOpacity onPress={showValidPicker}>
                <View pointerEvents='none'>
                  <FloatingLabelInput
                    label={'Valid'}
                    containerStyles={
                      validError ? styles.textboxerror : styles.textbox
                    }
                    customLabelStyles={
                      validError
                        ? { colorFocused: '#FF0000', colorBlurred: '#FF0000' }
                        : { colorFocused: '#898989', colorBlurred: '#898989' }
                    }
                    inputStyles={{
                      color: '#000000',
                      paddingHorizontal: 5,
                    }}
                    value={dateTime(valid)}
                    isPassword={false}
                    editable={false}
                  />
                </View>
              </TouchableOpacity>
              <DateTimePickerModal
                isVisible={isValidPickerVisible}
                date={valid}
                mode='date'
                placeholder='select date'
                format='DD-MM-YYYY'
                onConfirm={handleValidConfirm}
                onCancel={hideValidPicker}
                onDateChange={(valid) => {
                  setValid(valid);
                }}
              />
              {validError ? (
                <Text style={styles.texterror}>* valid</Text>
              ) : (
                <Text style={styles.texterror}> </Text>
              )}
              <TouchableOpacity onPress={showExpirePicker}>
                <View pointerEvents='none'>
                  <FloatingLabelInput
                    label={'Expire'}
                    containerStyles={
                      expireError ? styles.textboxerror : styles.textbox
                    }
                    customLabelStyles={
                      expireError
                        ? { colorFocused: '#FF0000', colorBlurred: '#FF0000' }
                        : { colorFocused: '#898989', colorBlurred: '#898989' }
                    }
                    inputStyles={{
                      color: '#000000',
                      paddingHorizontal: 5,
                    }}
                    value={dateTime(expire)}
                    isPassword={false}
                    editable={false}
                  />
                </View>
              </TouchableOpacity>
              <DateTimePickerModal
                isVisible={isExpirePickerVisible}
                date={expire}
                mode='date'
                placeholder='select date'
                format='DD-MM-YYYY'
                onConfirm={handleExpireConfirm}
                onCancel={hideExpirePicker}
                onDateChange={(expire) => {
                  setExpire(expire);
                }}
              />
              {expireError ? (
                <Text style={styles.texterror}>* expire</Text>
              ) : (
                <Text style={styles.texterror}> </Text>
              )}
              <FloatingLabelInput
                label={'Quota'}
                containerStyles={
                  quotaError ? styles.textboxerror : styles.textbox
                }
                customLabelStyles={
                  quotaError
                    ? { colorFocused: '#FF0000', colorBlurred: '#FF0000' }
                    : { colorFocused: '#898989', colorBlurred: '#898989' }
                }
                inputStyles={{
                  color: '#000000',
                  paddingHorizontal: 5,
                }}
                value={quota}
                hint=''
                isPassword={false}
                keyboardType='numeric'
                onChangeText={handleChange_quota}
                autoCapitalize='none'
              />
              {quotaError ? (
                <Text style={styles.texterror}>* quota</Text>
              ) : (
                <Text style={styles.texterror}> </Text>
              )}
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
        </ImageBackground>
      </View>
    </ScrollView>
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

export default Share;
