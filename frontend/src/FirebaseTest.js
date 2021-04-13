import React, { Component, useEffect, useState } from 'react';
import firebase from './config/firebase.config';
import axios from 'axios';
import LicensePlateWaitingCard from './components/LicensePlateWaitingCard';
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
  Alert,
} from 'react-native';
import styles from './Styles';

const FirebaseTest = () => {
  const [waitingLists, setWaitingLists] = useState([
    {
      license_plate_category: 'กท',
      license_plate_number: '1234',
      province_id: 1,
      usage_log_id: 123,
      usage_log_uid: 'ddddd',
    },
  ]);

  useEffect(() => {
    firebase
      .database()
      .ref(`users/117/waiting`)
      .limitToLast(1)
      .on('child_added', (snapshot) => {
        const new_added_license = {
          license_plate_category: snapshot.val()['license_plate_category'],
          license_plate_number: snapshot.val()['license_plate_number'],
          province_id: snapshot.val()['province_id'],
          usage_log_id: snapshot.val()['usage_log_id'],
          usage_log_uid: snapshot.key,
        };
        setWaitingLists([...waitingLists, new_added_license]);
        // Alert.alert(
        //   'Claim this license plate usage',
        //   `${snapshot.val()['license_plate_category']} ${
        //     snapshot.val()['license_plate_number']
        //   } ${snapshot.val()['province_id']}`,
        //   [
        //     {
        //       text: 'Cancel',
        //       onPress: () => console.log('Cancel Pressed'),
        //       style: 'cancel',
        //     },
        //     {
        //       text: 'Claim',
        //       onPress: () =>
        //         claimLicensePlate(snapshot.val()['usage_log_id'], snapshot.key),
        //     },
        //   ]
        // );
      });
  }, []);

  const claimLicensePlate = async (usage_log_id, usage_log_uid) => {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJwbXMiLCJhdWQiOiJ1c2VyIiwiaWF0IjoxNjE4MzA3NTA4MDE5LCJleHAiOjE2MTgzMTQ3MDgwMTksInVzZXJfaWQiOjExNywicm9sZV9pZCI6MX0.zlkzPYLau6T9-xjjwQqvFng3nl4Kr4AIwEndJPbHL7k';
    await axios
      .put(
        `http://localhost:4000/auth/papi/claimByLogId`,
        {
          usage_log_id: parseInt(usage_log_id),
          usage_log_uid: usage_log_uid,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
        Alert.alert('Claimed!');
      })
      .catch((error) => {
        throw error;
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.sectionContainer}>
        <View style={styles.sectionContainer}>
          <Text>
            {waitingLists.length ? 'Test Firebase' : 'No Waiting Lists'}
          </Text>
          {waitingLists.map((waitingList) => {
            return (
              <LicensePlateWaitingCard
                key={waitingList['usage_log_id']}
                license_plate_category={waitingList['license_plate_category']}
                license_plate_number={waitingList['license_plate_number']}
                province_id={waitingList['province_id']}
                usage_log_id={waitingList['usage_log_id']}
                usage_log_uid={waitingList['usage_log_uid']}
              />
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default FirebaseTest;
