import React, { Component } from "react";
import { Text, StatusBar } from "react-native";
import { Actions, Router, Scene } from "react-native-router-flux";

import Register from "./Register";
import Login from "./Login";
import Home from "./Home";
import Homeuser from "./Homeuser";
import Time from "./Time";
import Share from "./Share";
import Other from "./Other";
import Activity from "./Activity";
import Access from "./Access";
import Payment from "./Payment";
import License from "./License";
import Addlc from "./Addlc";
import Addcard from "./Addcard";
import Parking from "./Parking";
import Topup from "./Topup";
import Search from "./Search";
import EditProfile from "./EditProfile";

// Simple component to render something in place of icon
const TabIcon = ({ selected, title }) => {
  return <Text style={{ color: selected ? "red" : "black" }}>{title}</Text>;
};

const App = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene
          key="home"
          component={Home}
          initial={true}
          hideTabBar
          hideNavBar
        />
        <Scene
          key="register"
          component={Register}
          headerTintColor="#5394b5"
          navTransparent={true}
          hideTabBar
        />
        <Scene
          key="login"
          component={Login}
          headerTintColor="#5394b5"
          navTransparent={true}
          hideTabBar
        />
        <Scene
          key="tabbar"
          tabs={true}
          tabBarStyle={{ backgroundColor: "#FFFFFF" }}
          hideNavBar
        >
          <Scene key="Home" icon={TabIcon}>
            <Scene
              key="homehome"
              component={Homeuser}
              navTransparent={true}
              headerTintColor="#5394b5"
              initial={true}
            />
            <Scene
              key="license"
              component={License}
              headerTintColor="#5394b5"
              navTransparent={true}
              hideTabBar={true}
              onRight={() => Actions.refresh({ key: Math.random() })}
              rightButtonImage={require("../assets/icon-refresh.png")}
              rightButtonIconStyle={{ width: 24, height: 24 }}
            />
            <Scene
              key="addlc"
              component={Addlc}
              headerTintColor="#5394b5"
              navTransparent={true}
              hideTabBar={true}
            />
            <Scene
              key="payment"
              component={Payment}
              headerTintColor="#5394b5"
              navTransparent={true}
              hideTabBar={true}
              onRight={() => Actions.refresh({ key: Math.random() })}
              rightButtonImage={require("../assets/icon-refresh.png")}
              rightButtonIconStyle={{ width: 24, height: 24 }}
            />
            <Scene
              key="addcard"
              component={Addcard}
              headerTintColor="#5394b5"
              navTransparent={true}
              hideTabBar={true}
            />
            <Scene
              key="topup"
              component={Topup}
              headerTintColor="#5394b5"
              navTransparent={true}
              hideTabBar={true}
            />
          </Scene>
          <Scene key="Activity" icon={TabIcon}>
            <Scene
              key="activity"
              component={Activity}
              navTransparent={true}
              headerTintColor="#5394b5"
              onRight={() => Actions.refresh({ key: Math.random() })}
              rightButtonImage={require("../assets/icon-refresh.png")}
              rightButtonIconStyle={{ width: 24, height: 24 }}
            />
            <Scene
              key="parking"
              component={Parking}
              navTransparent={true}
              headerTintColor="#5394b5"
            />
          </Scene>
          <Scene key="Access" icon={TabIcon}>
            <Scene
              key="accesshome"
              component={Access}
              initial={true}
              navTransparent={true}
              headerTintColor="#5394b5"
              onRight={() => Actions.refresh({ key: Math.random() })}
              rightButtonImage={require("../assets/icon-refresh.png")}
              rightButtonIconStyle={{ width: 24, height: 24 }}
            />
            <Scene
              key="time"
              component={Time}
              navTransparent={true}
              headerTintColor="#5394b5"
              hideNavBar={false}
              hideTabBar={true}
            />
            <Scene
              key="share"
              component={Share}
              navTransparent={true}
              headerTintColor="#5394b5"
              hideNavBar={false}
              hideTabBar={true}
            />
          </Scene>
          <Scene key="Search" icon={TabIcon}>
            <Scene
              key="search"
              component={Search}
              navTransparent={true}
              headerTintColor="#5394b5"
              onRight={() => Actions.refresh({ key: Math.random() })}
              rightButtonImage={require("../assets/icon-refresh.png")}
              rightButtonIconStyle={{ width: 24, height: 24 }}
            />
          </Scene>
          <Scene key="Account" icon={TabIcon}>
            <Scene
              key="account"
              component={Other}
              navTransparent={true}
              headerTintColor="#5394b5"
              onRight={() => Actions.refresh({ key: Math.random() })}
              rightButtonImage={require("../assets/icon-refresh.png")}
              rightButtonIconStyle={{ width: 24, height: 24 }}
              initial={true}
            />
            <Scene
              key="edit"
              component={EditProfile}
              navTransparent={true}
              headerTintColor="#5394b5"
              hideTabBar={true}
              onRight={() => Actions.refresh({ key: Math.random() })}
              rightButtonImage={require("../assets/icon-refresh.png")}
              rightButtonIconStyle={{ width: 24, height: 24 }}
            />
          </Scene>
        </Scene>
      </Scene>
    </Router>
  );
};

export default App;
