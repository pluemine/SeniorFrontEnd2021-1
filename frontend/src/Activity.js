import React, { useEffect, useState } from 'react';
import { Actions } from 'react-native-router-flux';
import firebase from './config/firebase.config';
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
  Image,
  TextInput,
  StatusBar,
  Alert,
  Button,
  TouchableHighlight,
} from 'react-native';
import styles from './Styles';
import axios from 'axios';
import LicensePlateWaitingCard from './components/LicensePlateWaitingCard';
import { FloatingLabelInput } from 'react-native-floating-label-input';

const Activity = () => {
  const [onGoingActivity, setOnGoingActivity] = useState([]);
  const [waitingLists, setWaitingLists] = useState([]);
  const [history, setHistory] = useState([]);

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
      });
  }, []);

  if (onGoingActivity.length || waitingLists.length || history.length)
    return (
      <View style={styles.container}>
        <StatusBar barStyle='default' />
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionSubtitle}></Text>
          <Text style={styles.sectionTitlewoNav}>Activity</Text>
          {waitingLists.map((waitingList) => {
            return (
              <LicensePlateWaitingCard
                key={waitingList['usage_log_id']}
                license_plate_category={waitingList['license_plate_category']}
                license_plate_number={waitingList['license_plate_number']}
                province_id={waitingList['province_id']}
                usage_log_id={waitingList['usage_log_id']}
                usage_log_uid={waitingList['usage_log_uid']}
                setWaitingLists={setWaitingLists}
              />
            );
          })}
        </View>
      </View>
    );
  else
    return (
      <View style={styles.container}>
        <StatusBar barStyle='default' />
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionSubtitle}></Text>
          <Text style={styles.sectionTitlewoNav}>Activity</Text>
          <View style={styles.activityWrapper}>
            <View style={styles.noDataImageWrapper}>
              <Image
                style={styles.noDataImage}
                source={require('../assets/No-data-rafiki.png')}
              />
            </View>
          </View>
        </View>
      </View>
    );
};

const styles1 = StyleSheet.create({});

export default Activity;
