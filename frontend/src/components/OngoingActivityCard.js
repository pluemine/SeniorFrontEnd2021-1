import React, { Component, useState, useEffect } from 'react';
import activityApi from '../apis/activity.api';
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
  Alert,
  TouchableOpacity,
  Image,
} from 'react-native';

import styles, { MyColor } from '../Styles';
import { Actions } from 'react-native-router-flux';

const months = [
  'JAN',
  'FEB',
  'MAR',
  'APR',
  'MAY',
  'JUNE',
  'JUL',
  'AUG',
  'SEP',
  'OCT',
  'NOV',
  'DEC',
];

const formatAMPM = (date) => {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0' + minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
};

const OnGoingActivityCard = (props) => {
  const { usage_log_id, usage_log_uid } = props;

  const [usageInfo, setUsageInfo] = useState(null);

  useEffect(() => {
    const getUsageInfoAsync = async () => {
      await activityApi
        .getUsageInfo(usage_log_id)
        .then((response) => {
          // console.log(response);
          setUsageInfo(response);
        })
        .catch((error) => {
          throw error;
        });
    };
    getUsageInfoAsync();
  }, []);

  if (usageInfo)
    return (
      <TouchableHighlight
        underlayColor='none'
        onPress={() => {
          Actions.parking({ usage_log_id: usage_log_id });
        }}
      >
        <View style={styles.ongoingActivityCardWrapper}>
          <View style={styles.ongoingActivityCard}>
            <View style={styles.ongoingActivityCardContainer}>
              <View style={styles.ongoingActivityCardInfoWrapper}>
                <View style={styles.ongoingActivityCardLeftInfoWrapper}>
                  <View>
                    <Image
                      style={styles.historyActivityCardPropertyImage}
                      source={
                        usageInfo['is_completed']
                          ? require('../../assets/file_icon_x128.png')
                          : require('../../assets/ongoing_icon_x128.png')
                      }
                    />
                  </View>
                  <View style={styles.ongoingActivityCardInfoTextWrapper}>
                    <Text style={styles.ongoingActivityCardInfoPropertyName}>
                      {usageInfo['property_name']}
                    </Text>
                    <Text style={styles.ongoingActivityCardInfoLicenseNumber}>
                      {usageInfo['license_plate_category']}{' '}
                      {usageInfo['license_plate_number']}
                    </Text>
                    <Text style={styles.ongoingActivityCardInfoLicenseProvince}>
                      {usageInfo['province_id']}
                    </Text>
                  </View>
                </View>
                <View style={styles.ongoingActivityCardRightInfoWrapper}>
                  <Text style={styles.ongoingActivityCardInfoDateTime}>
                    {`${
                      months[
                        new Date(usageInfo['entrance_at'].toString()).getMonth()
                      ]
                    } ${new Date(
                      usageInfo['entrance_at'].toString()
                    ).getDate()}`}
                  </Text>
                  <Text style={styles.ongoingActivityCardInfoDateTime}>
                    {`${formatAMPM(
                      new Date(usageInfo['entrance_at'].toString())
                    )}`}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  else return null;
};

const styles1 = StyleSheet.create({});

export default OnGoingActivityCard;
