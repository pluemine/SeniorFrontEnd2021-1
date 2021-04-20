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

const OnGoingActivityCard = (props) => {
  const { usage_log_id, usage_log_uid } = props;

  const [usageInfo, setUsageInfo] = useState(null);

  useEffect(() => {
    const getUsageInfoAsync = async () => {
      await activityApi
        .getUsageInfo(usage_log_id)
        .then((response) => {
          // console.log('usageInfo', response);
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
      <View style={styles.ongoingActivityCardWrapper}>
        <View style={styles.ongoingActivityCard}>
          <View style={styles.ongoingActivityCardContainer}>
            <View style={styles.ongoingActivityCardInfoWrapper}>
              <View style={styles.ongoingActivityCardLeftInfoWrapper}>
                <View>
                  <Image
                    style={styles.ongoingActivityCardPropertyImage}
                    source={require('../../assets/central.jpg')}
                  />
                </View>
                <View style={styles.ongoingActivityCardInfoTextWrapper}>
                  <Text style={styles.ongoingActivityCardInfoPropertyName}>
                    Central World
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
                  17 APR
                </Text>
                <Text style={styles.ongoingActivityCardInfoDateTime}>
                  12:00 PM
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  else return null;
};

const styles1 = StyleSheet.create({});

export default OnGoingActivityCard;
