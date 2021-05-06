import React, { Component, useState, useEffect } from "react";
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
} from "react-native";

import styles from "../Styles";
import PropertyModal from "./PropertyModal";

const PropertyCard = (props) => {
  const {
    propid,
    propname,
    proptype,
    proplocation,
    propcapa,
    propimg,
    propprovince,
  } = props;

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const cancel = () => {
    toggleModal();
  };

  return (
    <View>
      <TouchableHighlight
        underlayColor="none"
        style={styles.itemcard}
        onPress={toggleModal}
      >
        <View style={styles1.container}>
          <View style={styles1.col40}>
            <Image
              style={styles1.pic}
              source={{ uri: propimg }}
              resizeMode="cover"
            />
            <View style={styles1.property_type_badge}>
              <Text style={styles1.property_type_badge_text}>{proptype}</Text>
            </View>
          </View>
          <View style={styles1.col60}>
            <View style={styles1.col60_flex}>
              <Text style={{ ...styles.textHeader }}>{propname}</Text>
              {/*<Text style={styles.textDes}>
                <Text style={styles.textMenuDesBold}>Location </Text>
                {proplocation.x} {proplocation.y}
  </Text>*/}
              <Text style={styles.textDes}>
                <Text style={styles.textMenuDesBold}>Capacity </Text>
                {propcapa}
              </Text>
              <Text style={styles.textDes}>
                <Text style={styles.textMenuDesBold}>Province </Text>
                {propprovince}
              </Text>
            </View>
          </View>
        </View>
      </TouchableHighlight>
      <PropertyModal
        propid={propid}
        propname={propname}
        proptype={proptype}
        propcapa={propcapa}
        propimg={propimg}
        propprovince={propprovince}
        visible={isModalVisible}
        cancel={cancel}
      />
    </View>
  );
};

const styles1 = StyleSheet.create({
  logo: {
    width: 300,
    height: 300,
    resizeMode: "stretch",
    margin: 50,
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
  },
  texthead: {
    color: "#444444",
    fontWeight: "800",
    textAlign: "center",
    marginBottom: 10,
  },
  textdes: {
    color: "#444444",
    textAlign: "center",
    fontSize: 12,
    marginBottom: 40,
  },
  container: {
    padding: 0,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    alignItems: "stretch", // if you want to fill rows left to right
  },
  item1: {
    paddingRight: 10,
    width: "70%",
  },
  item2: {
    width: "30%",
  },
  property_type_badge: {
    position: "absolute",
    right: 5,
    top: 5,
    backgroundColor: "rgba(244, 150, 8, 0.8)",
    borderRadius: 5,
    padding: 3,
    textAlign: "center",
  },
  property_type_badge_text: {
    fontSize: 10,
    fontWeight: "800",
    color: "#fff",
  },
  col40: {
    position: "relative",
    width: "40%",
    height: "100%",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  col50: {
    width: "50%",
  },
  col60: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    alignItems: "center",
    width: "60%",
    height: "100%",
    overflow: "scroll",
    // padding: 10,
  },
  col60_flex: {
    flexDirection: "column",
    justifyContent: "center",
    flexWrap: "wrap",
    alignItems: "flex-start",
    height: "100%",
    width: "100%",
    paddingHorizontal: 20,
  },
  pic: {
    width: "100%",
    height: "100%",
    margin: "auto",
  },
  rowcontainer: {
    flex: 1,
    flexDirection: "column",
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
});

export default PropertyCard;
