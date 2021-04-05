import React, { Component, useState, useEffect } from 'react';
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
import { Router, Scene } from 'react-native-router-flux';

import Register from './Register';
import Login from './Login';
import Home from './Home';
import AccessCard from './components/AccessCard';

import styles from './Styles';
import axios from 'axios';

const Homeuser = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle='default' />
      <ImageBackground
        style={styles1.pic}
        source={require('../assets/cloud.jpg')}
      >
        <View style={styles.sectionContainer}>
          <View>
            <Text style={styles.sectionSubtitle}></Text>
            <Text style={styles.sectionTitlewoNavWhite}>Hello, User</Text>
            <View style={styles.homeuserBalanceCard}>
              <Text style={styles.cardHeaderColor}>Your Balance</Text>
              <Text style={styles.cardTitle}>$800.20</Text>
            </View>
            <Text style={styles.homeuserTitle}>Shortcut</Text>
            <View style={styles.homeuserShortcutBlock}>
              <View style={styles.homeuserColContainer}>
                <View style={styles.homeuserCol33}>
                  <TouchableHighlight
                    underlayColor='none'
                    style={styles.homeuserShortcutCard}
                    onPress={() => Actions.license()}
                  >
                    <View style={styles.homeuserShortcutData}>
                      <Image
                        style={styles.homeuserIcon}
                        source={require('../assets/icon-license.png')}
                      />
                      <Text style={styles.textbold}>My car</Text>
                    </View>
                  </TouchableHighlight>
                </View>
                <View style={styles.homeuserCol33}>
                  <TouchableHighlight
                    underlayColor='none'
                    style={styles.homeuserShortcutCard}
                    onPress={() => Actions.payment()}
                  >
                    <View style={styles.homeuserShortcutData}>
                      <Image
                        style={styles.homeuserIcon}
                        source={require('../assets/icon-payment.png')}
                      />
                      <Text style={styles.textbold}>Payment</Text>
                    </View>
                  </TouchableHighlight>
                </View>
                <View style={styles.homeuserCol33}>
                  <TouchableHighlight
                    underlayColor='none'
                    style={styles.homeuserShortcutCard}
                    onPress={() => Actions.license()}
                  >
                    <View style={styles.homeuserShortcutData}>
                      <Image
                        style={styles.homeuserIcon}
                        source={require('../assets/icon-topup.png')}
                      />
                      <Text style={styles.textbold}>Top Up</Text>
                    </View>
                  </TouchableHighlight>
                </View>
              </View>
            </View>
            <Text style={styles.homeuserTitle}>Nearby Parking</Text>
            <ImageBackground
              source={require('../assets/central.jpg')}
              style={styles1.homeuserBalanceCard}
              // imageStyle={{
              //   shadowColor: '#888888',
              //   shadowOffset: {
              //     width: 0,
              //     height: 2,
              //   },
              //   shadowOpacity: 0.25,
              //   shadowRadius: 8,
              // }}
            >
              <View
                style={{
                  padding: 30,
                  justifyContent: 'center',
                  backgroundColor: 'rgba(0, 0, 0, 0.25)',
                }}
              >
                <Text style={styles.homeuserCardTitle}>
                  Central World (3.5 km)
                </Text>
                <Text style={styles.homeuserCardSubtitle}>Bangkok</Text>
                <Text style={styles.homeuserCardSubtitle}> </Text>
                <Text style={styles.homeuserCardSubtitle}>100 units</Text>
              </View>
            </ImageBackground>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles1 = StyleSheet.create({
  homeuserBalanceCard: {
    borderRadius: 10,
    minWidth: '80%',
    maxWidth: '80%',
    // width: '80%',
    height: 125,
    shadowColor: '#888888',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 5,
    overflow: 'hidden',
  },
  pic: {
    width: '100%',
    height: '60%',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(255,255,255,0.92)',
  },
});

export default Homeuser;
