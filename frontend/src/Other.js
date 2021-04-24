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
  ImageBackground,
} from 'react-native';
import styles from './Styles';
import axios from 'axios';

const Other = () => {
  const [userId, setUserId] = useState('');
  const [email, setEmail] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [credit, setCredit] = useState('');
  const [img, setImg] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const token = await SecureStore.getItemAsync('pms_token');
      axios
        .get(`http://localhost:4000/auth/uapi/userById`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          console.log(res.data.data);
          setUserId(res.data.data.user.user_id.toString());
          setEmail(res.data.data.user.email);
          setFirstname(res.data.data.user.firstname);
          setLastname(res.data.data.user.lastname);
          setCredit('฿' + res.data.data.user.credits);
          setImg(res.data.data.user.profile_img);
        });
    };
    getUser();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle='default' />
      <ImageBackground
        style={styles.picBg}
        imageStyle={styles.picAccountBg}
        source={require('../assets/Telecommuting_pana.png')}
      >
        <View style={styles.sectionContainerHeader}>
          <Text style={styles.sectionTitlewoNav}>Account</Text>
        </View>
        <View style={styles.cardTrans}>
          <View style={styles.cardContainerHeaderOverlay}>
            <View style={styles.cardMenuBlock}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <Image
                  style={styles.iconAvatar}
                  source={
                    img != null ? { uri: img } : require('../assets/user.png')
                  }
                />
                <View>
                  <Text style={styles.textSubtitle}>
                    {firstname} {lastname}
                  </Text>
                  <Text style={styles.textDes}>{email}</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.card}>
            <View style={styles.cardContainer}>
              <TouchableHighlight
                style={styles.cardMenuBlock}
                underlayColor='none'
                onPress={() => Actions.topup({ credit: credit })}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <View>
                    <Text style={styles.textMenuTitle}>Top up</Text>
                    <Text style={styles.textMenuDes}>
                      Adjust your wallet balance
                    </Text>
                  </View>
                  <View>
                    <Text style={[styles.textMenuDes, { textAlign: 'right' }]}>
                      Credit Balance
                    </Text>
                    <Text
                      style={[styles.textMenuTitle, { textAlign: 'right' }]}
                    >
                      {credit}
                    </Text>
                  </View>
                </View>
              </TouchableHighlight>
              <View
                style={{
                  borderBottomColor: '#EEEEEE',
                  borderBottomWidth: 1,
                }}
              />
              <TouchableHighlight
                style={styles.cardMenuBlock}
                underlayColor='none'
                onPress={() =>
                  Actions.edit({
                    firstname: firstname,
                    lastname: lastname,
                    email: email,
                    img: img,
                  })
                }
              >
                <View>
                  <Text style={styles.textMenuTitle}>Edit Profile</Text>
                  <Text style={styles.textMenuDes}>
                    Change your profile and contact
                  </Text>
                </View>
              </TouchableHighlight>
              <View
                style={{
                  borderBottomColor: '#EEEEEE',
                  borderBottomWidth: 1,
                }}
              />
              <TouchableHighlight
                style={styles.cardMenuBlock}
                underlayColor='none'
                onPress={() => Actions.license()}
              >
                <View>
                  <Text style={styles.textMenuTitle}>License Plate</Text>
                  <Text style={styles.textMenuDes}>
                    Manage your license plates
                  </Text>
                </View>
              </TouchableHighlight>
              <View
                style={{
                  borderBottomColor: '#EEEEEE',
                  borderBottomWidth: 1,
                }}
              />
              <TouchableHighlight
                style={styles.cardMenuBlock}
                underlayColor='none'
                onPress={() => Actions.payment()}
              >
                <View>
                  <Text style={styles.textMenuTitle}>Payment Methods</Text>
                  <Text style={styles.textMenuDes}>Manage your cards</Text>
                </View>
              </TouchableHighlight>
              <View
                style={{
                  borderBottomColor: '#EEEEEE',
                  borderBottomWidth: 1,
                }}
              />
            </View>
            <View style={styles.cardContainer}>
              <TouchableHighlight
                style={styles.cardMenuBlock}
                onPress={() => Actions.replace('home')}
                underlayColor='none'
              >
                <View>
                  <Text style={styles.textMenuTitleRed}>Sign Out</Text>
                  <Text style={styles.textMenuDes}>
                    Sign out from the system
                  </Text>
                </View>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles1 = StyleSheet.create({
  pic: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(255,255,255,0.92)',
  },
});

export default Other;
