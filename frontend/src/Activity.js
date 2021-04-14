import React, { useEffect, useState } from 'react';
import { Actions } from 'react-native-router-flux';
import firebase from './config/firebase.config';
import userApis from './apis/user.api';
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
import OnGoingActivityCard from './components/OngoingActivityCard';
import { FloatingLabelInput } from 'react-native-floating-label-input';

const Activity = () => {
  const [onGoingActivity, setOnGoingActivity] = useState([]);
  const [waitingLists, setWaitingLists] = useState([]);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const licensePlateListener = async () => {
      await userApis
        .getUserId()
        .then((user_id) => {
          firebase
            .database()
            .ref(`users/${user_id}/waiting`)
            .limitToLast(1)
            .on('child_added', (snapshot) => {
              const new_added_license = {
                license_plate_category: snapshot.val()[
                  'license_plate_category'
                ],
                license_plate_number: snapshot.val()['license_plate_number'],
                province_id: snapshot.val()['province_id'],
                usage_log_id: snapshot.val()['usage_log_id'],
                usage_log_uid: snapshot.key,
              };
              setWaitingLists([...waitingLists, new_added_license]);
            });
          firebase
            .database()
            .ref(`users/${user_id}/in_use`)
            .on('child_added', (snapshot) => {
              const in_use_added_license = {
                usage_log_id: snapshot.val()['usage_log_id'],
                usage_log_uid: snapshot.key,
              };
              setOnGoingActivity([...onGoingActivity, in_use_added_license]);
            });
          firebase
            .database()
            .ref(`users/${user_id}/in_use`)
            .on('child_removed', (snapshot) => {
              setOnGoingActivity((prevs) => {
                return prevs.filter(
                  (prev) =>
                    prev['usage_log_id'] !== snapshot.val()['usage_log_id']
                );
              });
            });
          return;
        })
        .catch((error) => {
          throw error;
        });
    };
    licensePlateListener();
  }, []);

  if (onGoingActivity.length || waitingLists.length || history.length)
    return (
      <View style={styles.container}>
        <StatusBar barStyle='default' />
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionSubtitle}></Text>
          <Text style={styles.sectionTitlewoNav}>Activity</Text>
          {onGoingActivity && onGoingActivity.length ? (
            <Text style={styles.sectionTitlewoNav}>Ongoing</Text>
          ) : null}
          {onGoingActivity.map((ongoingItem) => {
            return (
              <OnGoingActivityCard
                key={ongoingItem['usage_log_id']}
                usage_log_id={ongoingItem['usage_log_id']}
                usage_log_uid={ongoingItem['usage_log_uid']}
              />
            );
          })}
          {waitingLists && waitingLists.length ? (
            <Text style={styles.sectionTitlewoNav}>Waiting</Text>
          ) : null}
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
