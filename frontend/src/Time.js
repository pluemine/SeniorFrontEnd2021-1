import React, { Component, useState, useEffect } from 'react';
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
  Image,
  ImageBackground,
} from 'react-native';
import * as Helper from './components/Helper';
import styles from './Styles';
import axios from 'axios';

const Time = (props) => {
  const { paid, propimg, proptype, placename, time, valid, expire } = props;

  const [accesses, setAccesses] = useState([]);
  const [des, setDes] = useState('Loading');

  useEffect(() => {
    const getAccess = async () => {
      console.log(paid);
      const token = await SecureStore.getItemAsync('pms_token');
      axios
        .get(`http://localhost:4000/auth/pamapi/access?id=${paid}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          setAccesses(res.data.data.accesses[0]);
          setDes('No access available');
          console.log('TIME', res.data.data.accesses[0]);
        });
    };
    getAccess();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle='default' />
      <ImageBackground
        style={styles.picBg}
        imageStyle={styles.picAccessBg}
        source={require('../assets/inbox_pana.png')}
      >
        <View style={styles.sectionContainerHeader}>
          <Text style={styles.sectionTitlewoNav}>Share Access</Text>
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
                <View style={styles.picShareOuter}>
                  <Image style={styles.picShare} source={{ uri: propimg }} />
                </View>
                <View>
                  <Text style={styles.textPreTitle}>{placename}</Text>
                  <Text style={styles.textMenuTitleOrange}>
                    {placename.toUpperCase().replace(' ', '')}
                    {paid}
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.card}>
            <View style={styles.cardContainer}>
              <View style={styles.cardMenuBlock}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                      style={{ width: 25, height: 25, marginRight: 10 }}
                      source={require('../assets/icon-clock.png')}
                    />
                    <Text style={styles.textMenuTitle}>Usage Time</Text>
                  </View>
                  <Text style={styles.textMenuTitle}>
                    {time === 'NaN Hour' ? 'Unlimited' : time}
                  </Text>
                </View>
                <Text style={styles.textMenuTitle}> </Text>
                <Text style={styles.textMenuTitle}>Valid</Text>
                <Text style={styles.textMenuDes}>
                  {Helper.dateMonth(valid)}
                </Text>
                <Text style={styles.textMenuTitle}>↓</Text>
                <Text style={styles.textMenuTitle}>Expire</Text>
                <Text style={styles.textMenuDes}>
                  {Helper.dateMonth(expire)}
                </Text>
              </View>
              <View style={styles.cardMenuBlock}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <Text style={styles.textMenuTitle}>Share Quota</Text>
                  <Text style={styles.textMenuTitleBlue}>
                    {accesses.share_quota}
                  </Text>
                </View>
              </View>
              <View style={styles.cardMenuBlock}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <Text style={styles.textMenuTitle}>Usage Count</Text>
                  <Text style={styles.textMenuTitleBlue}>
                    {accesses.usage_counts}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  borderBottomColor: '#EEEEEE',
                  borderBottomWidth: 1,
                }}
              />
              <View style={styles.cardMenuBlock}>
                <Text style={styles.textMenuTitle}>
                  What is sharing access?
                </Text>
                <Text style={styles.textMenuDes}>
                  It is the access to share your parking right.
                </Text>
              </View>
              <View style={styles.cardMenuBlockButton}>
                <TouchableHighlight
                  style={
                    !accesses.is_sharable ? styles.buttonDisable : styles.button
                  }
                  underlayColor='none'
                  onPress={() =>
                    Actions.share({
                      propimg,
                      placename,
                      proptype,
                      valid,
                      expire,
                      sharequota: accesses.share_quota,
                      usagecount: accesses.usage_counts,
                      chargeprovider: accesses.is_charged_provider,
                      sharable: accesses.is_sharable,
                      propid: accesses.property_id,
                      paid: accesses.parking_access_id,
                    })
                  }
                  disabled={!accesses.is_sharable}
                >
                  <View>
                    <Text style={styles.buttonText}>Share your access</Text>
                  </View>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
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
  sectionContainer: {
    marginTop: 20,
    paddingHorizontal: 24,
  },
  textDes: {
    fontSize: 14,
    color: Colors.dark,
    marginBottom: 10,
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
  col30: {
    width: '30%',
  },
  col50: {
    width: '50%',
    paddingHorizontal: 4,
  },
  col70: {
    width: '70%',
  },
  pic: {
    width: '100%',
    height: '100%',
    //margin: "auto",
    justifyContent: 'space-between',
    //alignItems: "center",
    //paddingBottom: 20,
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
    borderRadius: 8,
    width: 300,
    height: 300,
  },
  piccard: {
    borderRadius: 10,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    height: 200,
    width: '100%',
    margin: 'auto',
  },
  item: {
    width: '100%',
    height: 30,
  },
});

export default Time;
