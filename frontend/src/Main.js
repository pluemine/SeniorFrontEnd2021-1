import React, { Component } from "react";
import { Text } from "react-native";
import { Router, Scene } from "react-native-router-flux";

import Register from "./Register";
import Login from "./Login";
import Home from "./Home";
import Homeuser from "./Homeuser";
import Time from "./Time";
import Share from "./Share";
import Other from "./Other";
import Activity from "./Activity";
import Access from "./Access";

// Simple component to render something in place of icon
const TabIcon = ({ selected, title }) => {
  return <Text style={{ color: selected ? "red" : "black" }}>{title}</Text>;
};

const App = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="home" component={Home} initial={true} hideTabBar hideNavBar />
        <Scene key="register" component={Register} navTransparent={true} hideTabBar />
        <Scene key="login" component={Login} navTransparent={true} hideTabBar />
        <Scene key="tabbar" tabs={true} tabBarStyle={{ backgroundColor: "#FFFFFF" }} hideNavBar>
          <Scene key="Home" icon={TabIcon} component={Homeuser} initial={true} hideNavBar />
          <Scene key="Activity" icon={TabIcon} component={Activity} hideNavBar />
          <Scene key="Access" icon={TabIcon}>
            <Scene key="accesshome" component={Access} initial={true} hideNavBar />
            <Scene key="time" component={Time} navTransparent={true} titleStyle={{color:'#FFFFFF'}} hideNavBar />
            <Scene key="share" component={Share} hideNavBar />
          </Scene>
          <Scene key="Search" icon={TabIcon} component={Activity} hideNavBar />
          <Scene key="Other" icon={TabIcon} component={Other} hideNavBar />
        </Scene>
      </Scene>
    </Router>
  );
};

export default App;
