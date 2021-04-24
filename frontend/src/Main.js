import React, { Component } from "react";
import { Text, Image } from "react-native";
import styles from "./Styles";
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

import { Provider } from "react-redux";
import { createStore } from "redux";

import ConstantReducer from "./redux/ConstantReducer";

const store = createStore(ConstantReducer);

// Simple component to render something in place of icon
const TabIcon = ({ selected, title }) => {
  return <Text style={{ color: selected ? "red" : "black" }}>{title}</Text>;
};

const App = () => {
  return (
    <Provider store={store}>
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
            <Scene
              key="Home"
              icon={({ focused }) => (
                <Image
                  source={
                    focused
                      ? require("../assets/tab-home-focus.png")
                      : require("../assets/tab-home.png")
                  }
                  style={{ width: 20, height: 20 }}
                />
              )}
            >
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
            <Scene
              key="Activity"
              icon={({ focused }) => (
                <Image
                  source={
                    focused
                      ? require("../assets/tab-activity-focus.png")
                      : require("../assets/tab-activity.png")
                  }
                  style={{ width: 20, height: 20 }}
                />
              )}
            >
              <Scene
                key="activity"
                component={Activity}
                navTransparent={true}
                headerTintColor="#5394b5"
                onRight={() => Actions.refresh({ key: Math.random() })}
                rightButtonImage={require("../assets/icon-refresh.png")}
                rightButtonIconStyle={{ width: 24, height: 24 }}
                initial={true}
              />
              <Scene
                key="parking"
                component={Parking}
                navTransparent={true}
                headerTintColor="#5394b5"
                hideTabBar={true}
              />
            </Scene>
            <Scene
              key="Access"
              icon={({ focused }) => (
                <Image
                  source={
                    focused
                      ? require("../assets/tab-access-focus.png")
                      : require("../assets/tab-access.png")
                  }
                  style={{ width: 18, height: 20 }}
                />
              )}
            >
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
            <Scene
              key="Search"
              icon={({ focused }) => (
                <Image
                  source={
                    focused
                      ? require("../assets/tab-search-focus.png")
                      : require("../assets/tab-search.png")
                  }
                  style={{ width: 20, height: 20 }}
                />
              )}
            >
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
            <Scene
              key="Account"
              icon={({ focused }) => (
                <Image
                  source={
                    focused
                      ? require("../assets/tab-account-focus.png")
                      : require("../assets/tab-account.png")
                  }
                  style={{ width: 20, height: 20 }}
                />
              )}
            >
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
    </Provider>
  );
};

export default App;
