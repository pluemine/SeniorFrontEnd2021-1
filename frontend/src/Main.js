import React, { Component } from 'react';
import { Text, StatusBar } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import FirebaseTest from './FirebaseTest';
import Register from './Register';
import Login from './Login';
import Home from './Home';
import Homeuser from './Homeuser';
import Time from './Time';
import Share from './Share';
import Other from './Other';
import Activity from './Activity';
import Access from './Access';
import Payment from './Payment';
import License from './License';
import Addlc from './Addlc';
import Addcard from './Addcard';

// Simple component to render something in place of icon
const TabIcon = ({ selected, title }) => {
  return <Text style={{ color: selected ? 'red' : 'black' }}>{title}</Text>;
};

const App = () => {
  return (
    <Router>
      <Scene key='root'>
        <Scene
          key='home'
          component={Home}
          initial={true}
          hideTabBar
          hideNavBar
        />
        <Scene
          key='register'
          component={Register}
          navTransparent={true}
          hideTabBar
        />
        <Scene
          key='firebaseTest'
          component={FirebaseTest}
          navTransparent={true}
          hideTabBar
        />
        <Scene key='login' component={Login} navTransparent={true} hideTabBar />
        <Scene
          key='tabbar'
          tabs={true}
          tabBarStyle={{ backgroundColor: '#FFFFFF' }}
          hideNavBar
        >
          <Scene key='Home' icon={TabIcon}>
            <Scene
              key='homehome'
              component={Homeuser}
              navTransparent={true}
              initial={true}
            />
            <Scene
              key='license'
              component={License}
              navTransparent={true}
              hideTabBar={true}
            />
            <Scene
              key='addlc'
              component={Addlc}
              navTransparent={true}
              hideTabBar={true}
            />
            <Scene
              key='payment'
              component={Payment}
              navTransparent={true}
              hideTabBar={true}
            />
            <Scene
              key='addcard'
              component={Addcard}
              navTransparent={true}
              hideTabBar={true}
            />
          </Scene>
          <Scene
            key='Activity'
            icon={TabIcon}
            component={Activity}
            hideNavBar
          />
          <Scene key='Access' icon={TabIcon}>
            <Scene
              key='accesshome'
              component={Access}
              initial={true}
              hideNavBar
            />
            <Scene
              key='time'
              component={Time}
              navTransparent={true}
              titleStyle={{ color: '#FFFFFF' }}
              headerTintColor='#ffffff'
              hideNavBar={false}
              hideTabBar={true}
            />
            <Scene
              key='share'
              component={Share}
              navTransparent={true}
              titleStyle={{ color: '#FFFFFF' }}
              headerTintColor='#ffffff'
              hideNavBar={false}
              hideTabBar={true}
            />
          </Scene>
          <Scene key='Search' icon={TabIcon} component={Activity} hideNavBar />
          <Scene key='Other' icon={TabIcon}>
            <Scene key='otherhome' component={Other} hideNavBar />
          </Scene>
        </Scene>
      </Scene>
    </Router>
  );
};

export default App;
