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
import Payment from "./Payment";
import Access from "./Access";

// Simple component to render something in place of icon
const TabIcon = ({ selected, title }) => {
  return <Text style={{ color: selected ? "red" : "black" }}>{title}</Text>;
};

const App = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="home" component={Home} title="Home" hideTabBar initial={true} hideNavBar />
        <Scene key="register" component={Register} title="Register" hideTabBar />
        <Scene key="login" component={Login} title="Sign In" hideTabBar />
        <Scene key="tabbar" tabs={true} tabBarStyle={{ backgroundColor: "#FFFFFF" }} hideNavBar>
          <Scene key="homepage" title="Home" icon={TabIcon} component={Homeuser} initial={true} hideNavBar />
          <Scene key="car" title="Car" icon={TabIcon} component={Payment} hideNavBar />
          <Scene key="access" title="Access" icon={TabIcon}>
            <Scene key="accesshome" component={Access} title="Access" initial={true} hideNavBar />
            <Scene key="time" component={Time} title="Time" />
            <Scene key="share" component={Share} title="Share" />
          </Scene>
          <Scene key="payment" title="Payment" icon={TabIcon} component={Payment} hideNavBar />
          <Scene key="other" title="Other" icon={TabIcon} component={Other} hideNavBar />
        </Scene>
      </Scene>
    </Router>
  );
};

export default App;
