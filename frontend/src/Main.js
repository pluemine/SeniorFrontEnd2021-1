import React, { Component } from "react";
import { Text } from "react-native";
import { Router, Scene } from "react-native-router-flux";

import Register from "./Register";
import Login from "./Login";
import Home from "./Home";
import Homeuser from "./Homeuser";

// Simple component to render something in place of icon
const TabIcon = ({ selected, title }) => {
  return <Text style={{ color: selected ? "red" : "black" }}>{title}</Text>;
};

const App = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="home" component={Home} title="Home" />
        <Scene key="register" component={Register} title="Register" />
        <Scene key="login" component={Login} title="Sign In" />
        <Scene key="homeuser" component={Homeuser} title="Home" />
      </Scene>
    </Router>
  );
};

export default App;
