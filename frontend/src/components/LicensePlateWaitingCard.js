import React, { Component } from 'react';
import axios from 'axios';
import activityApi from '../apis/activity.api';
import { useFonts } from 'expo-font';
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

const LicensePlateWaitingCard = (props) => {
  const {
    license_plate_category,
    license_plate_number,
    province_id,
    usage_log_id,
    usage_log_uid,
    setWaitingLists,
  } = props;

  const [fontLoaded, fontError] = useFonts({
    KanitLight: require('../../assets/fonts/Kanit-Light.ttf'),
  });

  if (!fontLoaded || fontError) return null;

  //   const claimLicensePlate = async (usage_log_id, usage_log_uid) => {
  //     const token =
  //       'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJwbXMiLCJhdWQiOiJ1c2VyIiwiaWF0IjoxNjE4MzA3NTA4MDE5LCJleHAiOjE2MTgzMTQ3MDgwMTksInVzZXJfaWQiOjExNywicm9sZV9pZCI6MX0.zlkzPYLau6T9-xjjwQqvFng3nl4Kr4AIwEndJPbHL7k';
  //     await axios
  //       .put(
  //         `http://localhost:4000/auth/papi/claimByLogId`,
  //         {
  //           usage_log_id: parseInt(usage_log_id),
  //           usage_log_uid: usage_log_uid,
  //         },
  //         {
  //           headers: { Authorization: `Bearer ${token}` },
  //         }
  //       )
  //       .then((res) => {
  //         setWaitingLists((prevs) => {
  //           return prevs.filter((prev) => prev['usage_log_id'] !== usage_log_id);
  //         });
  //       })
  //       .catch((error) => {
  //         throw error;
  //       });
  //   };

  const claimLicensePlate = async (usage_log_id, usage_log_uid) => {
    await activityApi
      .claimLicensePlate(usage_log_id, usage_log_uid)
      .then((res) => {
        // console.log('license_plate_in_use', res);
        setWaitingLists((prevs) => {
          return prevs.filter(
            (prev) => prev['usage_log_id'] !== res['usage_log_id']
          );
        });
      })
      .catch((error) => {
        throw error;
      });
  };

  const rejectLicensePlate = async (usage_log_uid) => {
    await activityApi
      .rejectClaimLicensePlate(usage_log_uid)
      .then((usage_log_uid) => {
        // console.log('license_plate_in_use', res);
        setWaitingLists((prevs) => {
          return prevs.filter(
            (prev) => prev['usage_log_uid'] !== usage_log_uid
          );
        });
      })
      .catch((error) => {
        throw error;
      });
  };

  return (
    <View style={styles.licensePlateWaitingCardWrapper}>
      <View style={styles.licensePlateWaitingCard}>
        <View style={styles.licensePlateWaitingCardContainer}>
          <View style={styles.licensePlateWaitingCardInfo}>
            <View style={styles.licensePlateWaitingCardInfoText}>
              <Text style={styles.licensePlateWaitingCardInfoLicenseNumber}>
                {license_plate_category} {license_plate_number}
              </Text>
              <Text style={styles.licensePlateWaitingCardInfoLicenseProvince}>
                {province_id}
              </Text>
            </View>
          </View>
          <View style={styles.licensePlateWaitingCardButtonsWrapper}>
            <View style={styles.licensePlateWaitingCardButton}>
              <TouchableHighlight
                style={styles.licensePlateWaitingCardClaimButton}
                underlayColor={MyColor.pressedBlued}
                onPress={() => claimLicensePlate(usage_log_id, usage_log_uid)}
              >
                <View>
                  <Text style={styles.licensePlateWaitingCardClaimText}>
                    Claim
                  </Text>
                </View>
              </TouchableHighlight>
            </View>
            <View style={styles.licensePlateWaitingCardButton}>
              <TouchableHighlight
                style={styles.licensePlateWaitingCardRejectButton}
                underlayColor={MyColor.pressedOrange}
                onPress={() => rejectLicensePlate(usage_log_uid)}
              >
                <View>
                  <Text style={styles.licensePlateWaitingCardClaimText}>
                    Reject
                  </Text>
                </View>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.licensePlateWaitingCardBadge}>
        <View>
          <Image
            style={styles.licensePlateWaitingCardBadgeIcon}
            source={require('../../assets/exclamation_mark_icon.png')}
          />
        </View>
      </View>
    </View>
  );
};

const styles1 = StyleSheet.create({});

export default LicensePlateWaitingCard;
