import React, { Component, useState, useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';
import { Actions } from 'react-native-router-flux';
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
<<<<<<< HEAD
} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
||||||| 0590402
} from "react-native";
import { Router, Scene } from "react-native-router-flux";
=======
  RefreshControl,
} from "react-native";
import { Router, Scene } from "react-native-router-flux";
>>>>>>> ccc3035cd2c1313fdfcfca29270da91a3bd32873
import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
} from 'react-native-indicators';
import { FloatingLabelInput } from 'react-native-floating-label-input';

<<<<<<< HEAD
import Register from './Register';
import Login from './Login';
import Home from './Home';
import AccessCard from './components/AccessCard';
import * as Helper from './components/Helper';
||||||| 0590402
import Register from "./Register";
import Login from "./Login";
import Home from "./Home";
import AccessCard from "./components/AccessCard";
import * as Helper from './components/Helper';
=======
import Register from "./Register";
import Login from "./Login";
import Home from "./Home";
import AccessCard from "./components/AccessCard";
import * as Helper from "./components/Helper";
>>>>>>> ccc3035cd2c1313fdfcfca29270da91a3bd32873

import styles from './Styles';
import axios from 'axios';

import { connect } from 'react-redux';

const Access = (props) => {
  const [accesses, setAccesses] = useState([]);
<<<<<<< HEAD
  const [filteredAccessePlaceName, setFilteredAccessePlaceName] = useState('');
  const [des, setDes] = useState('Loading');
||||||| 0590402
  const [filteredAccessePlaceName, setFilteredAccessePlaceName] = useState("");
  const [des, setDes] = useState("Loading");
=======
  const [filteredAccessePlaceName, setFilteredAccessePlaceName] = useState("");
  const [des, setDes] = useState("Loading");
  const [refresh, setRefresh] = useState(false);
>>>>>>> ccc3035cd2c1313fdfcfca29270da91a3bd32873
  const { constantValue } = props;

  const getSecureStoreItem = async (key) => {
    return await SecureStore.getItemAsync(key);
  };

  const refreshPage = async () => {
    const token = await SecureStore.getItemAsync("pms_token");
    axios
      .get(`http://localhost:4000/auth/pamapi`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setAccesses(res.data.data.accesses);
        setDes("No access available");
        console.log(res.data.data.accesses);
      });
  };

  useEffect(() => {
    const getAccess = async () => {
      const token = await SecureStore.getItemAsync('pms_token');
      axios
        .get(`http://localhost:4000/auth/pamapi`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          setAccesses(res.data.data.accesses);
          setDes('No access available');
          console.log(res.data.data.accesses);
        });
    };
    getAccess();
  }, []);

  function propTypeName(prop) {
    return constantValue.current.types[prop];
  }

  let screen;
  if (des === 'Loading') {
    screen = (
      <View style={styles.sectionContainerScroll}>
        <PulseIndicator color='#78aac2' />
      </View>
    );
  } else if (accesses.length > 0) {
    screen = (
      <ScrollView
        style={styles.sectionContainerScroll}
        refreshControl={
          <RefreshControl refreshing={refresh} onRefresh={refreshPage} />
        }
      >
        <View>
          {accesses
            .filter(
              (access) =>
                !filteredAccessePlaceName ||
                filteredAccessePlaceName == '' ||
                String(access['property_name'])
                  .toLowerCase()
                  .includes(filteredAccessePlaceName)
            )
            .map((access, index) => {
              var proptype = propTypeName(access.property_type_id);
              var accesstime = Helper.minToH(access.mins_per_usage);

              return (
                <AccessCard
                  key={'accesscard' + index}
                  paid={access.parking_access_id}
                  propimg={access.property_img}
                  proptype={proptype}
                  placename={access.property_name}
                  time={accesstime}
                  valid={access.valid_date_time}
                  expire={access.expired_date_time}
                />
              );
            })}
        </View>
      </ScrollView>
    );
  } else {
    screen = (
      <View style={styles.sectionContainerScroll}>
        <Text style={styles.noDataDes}>{des}</Text>
        <Image
          style={styles.noDataImage}
          source={require('../assets/No-data-rafiki.png')}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle='default' />
      <View style={styles.sectionContainerHeader}>
        <Text style={styles.sectionTitlewoNav}>Access</Text>
        <FloatingLabelInput
          label={'Search by place name'}
          containerStyles={styles.textbox}
          customLabelStyles={{
            colorFocused: '#898989',
            colorBlurred: '#898989',
          }}
          inputStyles={{
            color: '#000000',
            paddingHorizontal: 5,
          }}
          leftComponent={
            <Image
              style={{ height: 16, width: 16 }}
              source={require('../assets/icon-search.png')}
            />
          }
          value={filteredAccessePlaceName}
          isPassword={false}
          onChangeText={(text) => setFilteredAccessePlaceName(text)}
          autoCapitalize='none'
        />
      </View>
      {screen}
      <View></View>
    </View>
  );
};

const mapStateToProps = (state) => {
  const { constantValue } = state;
  return { constantValue };
};

const styles1 = StyleSheet.create({});

export default connect(mapStateToProps)(Access);
