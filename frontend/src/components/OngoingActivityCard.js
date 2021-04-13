import React, { Component } from 'react';
import axios from 'axios';
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
  const {
    license_plate_category,
    license_plate_number,
    province_id,
    property_id,
    usage_log_id,
    usage_log_uid,
  } = props;

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
        </View>
      </View>
    </View>
  );
};

const styles1 = StyleSheet.create({});

export default OnGoingActivityCard;
