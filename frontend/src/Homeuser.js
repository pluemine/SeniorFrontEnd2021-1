import React, { Component } from "react";
import { Actions } from "react-native-router-flux";
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from "react-native/Libraries/NewAppScreen";
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
} from "react-native";
import { Router, Scene } from "react-native-router-flux";

import Register from "./Register";
import Login from "./Login";
import Home from "./Home";
import Profile from "./Profile";

import styles from "./Styles";

const TabIcon = ({ selected, title }) => {
  return <Text style={{ color: selected ? "red" : "black" }}>{title}</Text>;
};

const Homeuser = () => {
  return (
    <View style={styles.body}>
      <View style={styles.sectionContainer}>
        <View style={styles.mainarea}>
          <Text style={styles.sectionSubtitle}>Welcome</Text>
          <Text style={styles.sectionTitle}>Firstname</Text>
          <View style={styles1.content}>
            <Image
              style={styles1.logo}
              source={require("../assets/logo.png")}
            />
          </View>
            <Scene key="root">
              {/* Tab Container */}
              <Scene
                key="tabbar"
                tabs={true}
                tabBarStyle={{ backgroundColor: "#FFFFFF" }}
              >
                {/* Tab and it's scenes */}
                <Scene key="osu" title="OSU" icon={TabIcon}>
                  <Scene key="scarlet" component={Profile} title="Scarlet" />
                  <Scene key="gray" component={Login} title="Gray" />
                </Scene>

                {/* Tab and it's scenes */}
                <Scene key="um" title="UM" icon={TabIcon}>
                  <Scene key="blue" component={Profile} title="Blue" />
                  <Scene key="maize" component={Login} title="Maize" />
                </Scene>
              </Scene>
            </Scene>
        </View>
      </View>
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
});

export default Homeuser;
