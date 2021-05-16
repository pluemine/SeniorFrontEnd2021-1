import React, { Component, useState, useEffect } from "react";
import * as SecureStore from "expo-secure-store";
import { Actions } from "react-native-router-flux";
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
  TouchableOpacity,
  Image,
  ImageBackground,
  RefreshControl,
} from "react-native";
import * as Helper from "./components/Helper";
import styles from "./Styles";
import axios from "axios";
import AccessModal from "./components/AccessModal";
import PropertyModal from "./components/PropertyModal";
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
} from "react-native-indicators";

const Parking = (props) => {
  const { usage_log_id } = props;

  const [data, setData] = useState({});
  const [accesses, setAccesses] = useState([]);

  const [des, setDes] = useState("Loading");

  const [propId, setPropId] = useState(null);
  const [propName, setPropName] = useState(null);
  const [licenseCat, setLicenseCat] = useState(null);
  const [licenseNumber, setLicenseNumber] = useState(null);
  const [fee, setFee] = useState(null);
  const [entrance, setEntrance] = useState(null);
  const [exit, setExit] = useState(null);
  const [time, setTime] = useState(null);
  const [complete, setComplete] = useState(null);
  const [ref, setRef] = useState(false);

  const [access, setAccess] = useState({
    name: "None",
    id: null,
  });
  const [accessSelector, setAccessSelector] = useState({
    name: "None",
    id: null,
  });
  const [isModalVisible, setModalVisible] = useState(false);
  const [isInfoVisible, setInfoVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const toggleInfo = () => {
    setInfoVisible(!isInfoVisible);
  };

  const handleChange_accessSelector = (event) => {
    setAccessSelector(event);
  };

  function confirmAccess() {
    if (!complete) {
      toggleModal();
      setAccess({ name: accessSelector.name, id: accessSelector.id });
      updateAccess();
    }
    // console.log(accessSelector.name, accessSelector.id);
  }

  function cancelAccess() {
    if (!complete) {
      toggleModal();
      if (access === "None") {
        setAccessSelector({ name: "None", id: null });
      } else {
        setAccessSelector({ name: access.name, id: access.id });
      }
    }
  }

  useEffect(() => {
    const getUser = async () => {
      const token = await SecureStore.getItemAsync("pms_token");
      axios
        .get(`http://localhost:4000/auth/aapi?id=${usage_log_id}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          console.log(res.data.data.usage_log);
          setData(res.data.data.usage_log);
          if (res.data.data.usage_log.parking_access_id != null) {
            setAccess({
              name:
                res.data.data.usage_log.property_name
                  .toUpperCase()
                  .replace(" ", "") + res.data.data.usage_log.parking_access_id,
              id: res.data.data.usage_log.parking_access_id,
            });
            setAccessSelector({
              name:
                res.data.data.usage_log.property_name
                  .toUpperCase()
                  .replace(" ", "") + res.data.data.usage_log.parking_access_id,
              id: res.data.data.usage_log.parking_access_id,
            });
          }
          console.log(
            res.data.data.usage_log.property_name
              .toUpperCase()
              .replace(" ", "") + res.data.data.usage_log.parking_access_id,
            res.data.data.usage_log.parking_access_id
          );
          setPropId(res.data.data.usage_log.property_id);
          setPropName(res.data.data.usage_log.property_name);
          setLicenseCat(res.data.data.usage_log.license_plate_category);
          setLicenseNumber(res.data.data.usage_log.license_plate_number);
          setFee(res.data.data.usage_log.fees);
          setEntrance(res.data.data.usage_log.entrance_at);
          setExit(res.data.data.usage_log.exit_at);
          setTime(res.data.data.usage_log.usage_mins);
          setComplete(res.data.data.usage_log.is_completed);
          const getAccess = async () => {
            // console.log(res.data.data.usage_log.property_id);
            // const token = await SecureStore.getItemAsync('pms_token');
            axios
              .post(
                `http://localhost:4000/auth/pamapi/property`,
                {
                  property_id: res.data.data.usage_log.property_id,
                  license_plate_category:
                    res.data.data.usage_log.license_plate_category,
                  license_plate_number:
                    res.data.data.usage_log.license_plate_number,
                  province_id: res.data.data.usage_log.province_id,
                },
                {
                  headers: { Authorization: `Bearer ${token}` },
                }
              )
              .then((res) => {
                setAccesses(res.data.data.accesses);
                setDes("Loaded");
                console.log("SS", res.data.data.accesses);
              });
          };
          if (!res.data.data.usage_log.is_completed) getAccess();
          setDes("Loaded");
        })
        .catch((error) => console.log(error));
    };
    getUser();
  }, []);

  const updateAccess = async () => {
    const token = await SecureStore.getItemAsync("pms_token");
    axios
      .put(
        `http://localhost:4000/auth/papi/applyParkingAccessIdByLogId`,
        {
          usage_log_id: data.usage_log_id,
          parking_access_id: accessSelector.id,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((res) => {
        console.log(res);
        console.log(res.data);
        if (res.data.status === "OK") {
          refresh();
        }
      });
  };

  const refresh = async () => {
    //setDes("Loading");
    const token = await SecureStore.getItemAsync("pms_token");
    axios
      .get(`http://localhost:4000/auth/aapi/fees?id=${data.usage_log_id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        // console.log(res);
        // console.log(res.data);
        if (res.data.data.usage_log.parking_access_id != null) {
          setAccess({
            name:
              propName.toUpperCase().replace(" ", "") +
              res.data.data.usage_log.parking_access_id,
            id: res.data.data.usage_log.parking_access_id,
          });
          setAccessSelector({
            name:
              propName.toUpperCase().replace(" ", "") +
              res.data.data.usage_log.parking_access_id,
            id: res.data.data.usage_log.parking_access_id,
          });
        }
        setFee(res.data.data.usage_log.fees);
        setEntrance(res.data.data.usage_log.entrance_at);
        setExit(res.data.data.usage_log.exit_at);
        setTime(res.data.data.usage_log.usage_mins);
        setComplete(res.data.data.usage_log.is_completed);
        //setDes("");
      });
  };

  let screen;
  if (des === "Loading") {
    screen = (
      <View>
        <View style={styles.sectionContainerScroll}>
          <PulseIndicator color="#78aac2" />
        </View>
      </View>
    );
  } else {
    screen = (
      <View style={styles.card}>
        <ScrollView
          style={styles.cardContainer}
          refreshControl={
            <RefreshControl refreshing={ref} onRefresh={refresh} />
          }
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.cardMenuBlock}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <TouchableHighlight underlayColor="none" onPress={toggleInfo}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start",
                  }}
                >
                  <Text style={styles.textTitle}>{propName}</Text>
                  <Image
                    style={{ width: 20, height: 20, marginLeft: 10 }}
                    source={require("../assets/icon-info.png")}
                  />
                </View>
              </TouchableHighlight>
              <PropertyModal
                propid={propId}
                propname={propName}
                visible={isInfoVisible}
                cancel={toggleInfo}
              />
              {!complete ? (
                <Text style={styles.textMenuTitleOrange}>Parking Ongoing</Text>
              ) : (
                <Text style={styles.textMenuTitleBlue}>Completed</Text>
              )}
            </View>
          </View>
          <TouchableHighlight style={styles.cardMenuBlock} underlayColor="none">
            <View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    style={{ width: 25, height: 25, marginRight: 10 }}
                    source={require("../assets/icon-fee.png")}
                  />
                  <Text style={styles.textMenuTitle}>Fee</Text>
                </View>
                <Text style={styles.textMenuTitle}>฿{fee}</Text>
              </View>
            </View>
          </TouchableHighlight>
          <View
            style={{
              borderBottomColor: "#EEEEEE",
              borderBottomWidth: 1,
            }}
          />
          <TouchableHighlight style={styles.cardMenuBlock} underlayColor="none">
            <View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    style={{ width: 25, height: 25, marginRight: 10 }}
                    source={require("../assets/icon-clock.png")}
                  />
                  <Text style={styles.textMenuTitle}>Time used</Text>
                </View>
                <Text style={styles.textMenuTitle}>{Helper.minwH(time)}</Text>
              </View>
              <Text style={styles.textMenuTitle}> </Text>
              <Text style={styles.textMenuTitle}>From</Text>
              <Text style={styles.textMenuDes}>
                {Helper.dateMonthwMin(entrance)}
              </Text>
              <Text style={styles.textMenuTitle}>↓</Text>
              <Text style={styles.textMenuTitle}>Until</Text>
              <Text style={styles.textMenuDes}>
                {exit != null ? Helper.dateMonthwMin(exit) : "Now"}
              </Text>
            </View>
          </TouchableHighlight>
          <View
            style={{
              borderBottomColor: "#EEEEEE",
              borderBottomWidth: 1,
            }}
          />
          <TouchableHighlight style={styles.cardMenuBlock} underlayColor="none">
            <View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    style={{ width: 25, height: 20, marginRight: 10 }}
                    source={require("../assets/icon-lc.png")}
                  />
                  <Text style={styles.textMenuTitle}>License Plate</Text>
                </View>
                <Text style={styles.textMenuTitle}>
                  {licenseCat} {licenseNumber}
                </Text>
              </View>
            </View>
          </TouchableHighlight>
          <View
            style={{
              borderBottomColor: "#EEEEEE",
              borderBottomWidth: 1,
            }}
          />
          <TouchableHighlight
            style={styles.cardMenuBlock}
            underlayColor="none"
            onPress={!complete ? toggleModal : null}
          >
            <View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    style={{ width: 25, height: 14, marginRight: 10 }}
                    source={
                      access.name === "None"
                        ? require("../assets/icon-coupon.png")
                        : require("../assets/icon-coupon-focus.png")
                    }
                  />
                  <Text
                    style={
                      access.name === "None"
                        ? styles.textMenuTitle
                        : styles.textMenuTitleBlue
                    }
                  >
                    Access
                  </Text>
                </View>
                <Text
                  style={
                    access.name === "None"
                      ? styles.textMenuTitle
                      : styles.textMenuTitleBlue
                  }
                >
                  {access.name}
                </Text>
              </View>
            </View>
          </TouchableHighlight>
          <AccessModal
            data={accesses}
            propId={propId}
            visible={isModalVisible}
            selector={accessSelector}
            handleChange={handleChange_accessSelector}
            confirm={confirmAccess}
            cancel={cancelAccess}
          />
        </ScrollView>
        <View style={styles.cardMenuBlockButton}></View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="default" />
      <ImageBackground
        style={styles.picBg}
        imageStyle={
          des === "Loading" ? { display: "none" } : styles.picParkingBg
        }
        source={require("../assets/car_driver.gif")}
      >
        <View style={styles.sectionContainerHeader}>
          <Text style={styles.sectionTitlewoNav}>Parking Info</Text>
        </View>
        {screen}
        {des === "Loading" ? (
          <View style={styles.cardMenuBlockButton}></View>
        ) : null}
      </ImageBackground>
    </View>
  );
};

const styles1 = StyleSheet.create({});

export default Parking;
