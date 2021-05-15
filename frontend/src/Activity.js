import React, { useEffect, useState } from 'react';
import { Actions } from 'react-native-router-flux';
import firebase from './config/firebase.config';
import userApis from './apis/user.api';
import activityApis from './apis/activity.api';
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
  RefreshControl,
  FlatList,
  View,
  Text,
  Image,
  TextInput,
  StatusBar,
  Alert,
  Button,
  TouchableHighlight,
} from 'react-native';
import { PulseIndicator } from 'react-native-indicators';
import styles from './Styles';
import axios from 'axios';
import LicensePlateWaitingCard from './components/LicensePlateWaitingCard';
import OnGoingActivityCard from './components/OngoingActivityCard';
import { FloatingLabelInput } from 'react-native-floating-label-input';

const Activity = () => {
  const [onGoingActivity, setOnGoingActivity] = useState([]);
  const [inUseLogId, setInUseLogId] = useState(new Set());
  const [waitingLists, setWaitingLists] = useState([]);
  const [waitingLogUid, setWaitingLogUid] = useState(new Set());
  const [history, setHistory] = useState([]);
  const [userId, setUserId] = useState(null);
  const [isLoaded, setIsLoaded] = useState(true);
  const [isRefreshing, setIsRefreshing] = React.useState(false);

  useEffect(() => {
    if (userId) {
      onWaiting(userId);
      onInUse(userId);
      onInUsedRemoved(userId);
      onWaitingRemoved(userId);
    } else {
      setIsLoaded(true);
      userApis
        .getUserId()
        .then((user_id) => {
          setUserId(user_id);
          setIsLoaded(false);
        })
        .catch((error) => {
          setIsLoaded(false);
          throw error;
        });
      getHistoryActivity();
    }
  }, [userId]);

  const getHistoryActivity = async () => {
    setIsLoaded(true);
    await activityApis
      .getHistory()
      .then((response) => {
        setHistory(response);
        setIsLoaded(false);
      })
      .catch((error) => {
        setIsRefreshing(false);
        setIsLoaded(false);
        throw error;
      });
  };

  const onHistoryRefresh = React.useCallback(async () => {
    setIsRefreshing(true);
    if (history.length < 3) {
      try {
        await getHistoryActivity();
        setIsRefreshing(false);
      } catch (error) {
        console.error(error);
      }
    } else {
      // ToastAndroid.show('No more new data available', ToastAndroid.SHORT);
      setRefreshing(false);
    }
  }, [isRefreshing]);

  const onWaiting = (user_id) => {
    firebase
      .database()
      .ref(`users/${user_id}/waiting`)
      .on('child_added', (snapshot) => {
        setTimeout(() => {
          console.log(snapshot);
          const new_added_license = {
            license_plate_category: snapshot.val()['license_plate_category'],
            license_plate_number: snapshot.val()['license_plate_number'],
            province_id: snapshot.val()['province_id'],
            usage_log_id: snapshot.val()['usage_log_id'],
            usage_log_uid: snapshot.key,
          };
          if (!waitingLogUid.has(parseInt(new_added_license['usage_log_id']))) {
            // console.log('Added');
            setWaitingLogUid(
              waitingLogUid.add(parseInt(new_added_license['usage_log_id']))
            );
            setWaitingLists((prevs) => {
              return [...prevs, new_added_license];
            });
          }
        }, 500);
      });
  };

  const onInUse = (user_id) => {
    firebase
      .database()
      .ref(`users/${user_id}/in_use`)
      .on('child_added', (snapshot) => {
        setTimeout(() => {
          const in_use_added_license = {
            usage_log_id: snapshot.val()['usage_log_id'],
            usage_log_uid: snapshot.key,
          };
          if (!inUseLogId.has(parseInt(in_use_added_license['usage_log_id']))) {
            setInUseLogId(
              inUseLogId.add(parseInt(in_use_added_license['usage_log_id']))
            );
            setOnGoingActivity([...onGoingActivity, in_use_added_license]);
          }
        }, 500);
      });
  };

  const onInUsedRemoved = (user_id) => {
    firebase
      .database()
      .ref(`users/${user_id}/in_use`)
      .on('child_removed', (snapshot) => {
        setTimeout(() => {
          setOnGoingActivity((prevs) => {
            return prevs.filter(
              (prev) => prev['usage_log_id'] !== snapshot.val()['usage_log_id']
            );
          });
        }, 500);
      });
  };

  const onWaitingRemoved = (user_id) => {
    firebase
      .database()
      .ref(`users/${user_id}/waiting`)
      .limitToLast(1)
      .on('child_removed', (snapshot) => {
        setTimeout(() => {
          setWaitingLists((prevs) => {
            return prevs.filter(
              (prev) => prev['usage_log_id'] !== snapshot.val()['usage_log_id']
            );
          });
        }, 500);
      });
  };

  const renderHistoryActivityItem = ({ item }) => (
    <OnGoingActivityCard
      key={item['usage_log_id'].toString()}
      usage_log_id={item['usage_log_id']}
    />
  );

  const renderOnWaitingActivityItem = ({ item }) => (
    <LicensePlateWaitingCard
      key={item['usage_log_id'].toString()}
      license_plate_category={item['license_plate_category']}
      license_plate_number={item['license_plate_number']}
      province_id={item['province_id']}
      usage_log_id={item['usage_log_id']}
      usage_log_uid={item['usage_log_uid']}
      setWaitingLists={setWaitingLists}
    />
  );

  if (onGoingActivity.length || waitingLists.length || history.length)
    return (
      <View style={styles.container}>
        <StatusBar barStyle='default' />
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitlewoNav}>Activity</Text>
          {onGoingActivity && onGoingActivity.length ? (
            <Text style={styles.sectionSubTitleActivity}>Ongoing</Text>
          ) : null}
          {onGoingActivity && onGoingActivity.length ? (
            <SafeAreaView>
              {onGoingActivity.map((ongoingItem) => {
                return (
                  <OnGoingActivityCard
                    key={ongoingItem['usage_log_id']}
                    usage_log_id={ongoingItem['usage_log_id']}
                    usage_log_uid={ongoingItem['usage_log_uid']}
                  />
                );
              })}
            </SafeAreaView>
          ) : null}
          {waitingLists && waitingLists.length ? (
            <Text style={styles.sectionSubTitleActivity}>
              License Plate In Use
            </Text>
          ) : null}
          {waitingLists && waitingLists.length ? (
            <SafeAreaView>
              <FlatList
                style={styles.waitingActivityFlatListContainer}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                data={waitingLists}
                renderItem={renderOnWaitingActivityItem}
                keyExtractor={(item) => item.usage_log_id.toString()}
                // refreshControl={
                //   <RefreshControl
                //     refreshing={isRefreshing}
                //     onRefresh={onHistoryRefresh}
                //   />
                // }
              />
            </SafeAreaView>
          ) : null}
          {history && history.length ? (
            <Text style={styles.sectionSubTitleActivity}>History</Text>
          ) : null}
          <SafeAreaView>
            <FlatList
              style={styles.historyActivityFlatListContainer}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              data={history}
              renderItem={renderHistoryActivityItem}
              keyExtractor={(item) => item.usage_log_id.toString()}
              refreshControl={
                <RefreshControl
                  refreshing={isRefreshing}
                  onRefresh={onHistoryRefresh}
                />
              }
              initialNumToRender={3}
            />
          </SafeAreaView>
          {/* {history.map((historyList) => {
            return (
              <OnGoingActivityCard
                key={historyList['usage_log_id']}
                usage_log_id={historyList['usage_log_id']}
              />
            );
          })} */}
        </View>
      </View>
    );
  else if (isLoaded)
    return (
      <View style={styles.sectionContainerScroll}>
        <PulseIndicator color='#78aac2' />
      </View>
    );
  else
    return (
      <View style={styles.container}>
        <StatusBar barStyle='default' />
        <View style={styles.sectionContainerHeader}>
          <Text style={styles.sectionTitlewoNav}>Activity</Text>
          <View style={styles.activityWrapper}>
            <View style={styles.noDataImageWrapper}>
              <Image
                style={styles.activityNoDataImage}
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
