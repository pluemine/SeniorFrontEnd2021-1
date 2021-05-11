import React, { Component } from 'react';
import { Text, Image, View } from 'react-native';
import { Actions, Router, Scene } from 'react-native-router-flux';
import { useFonts } from 'expo-font';

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
import Parking from './Parking';
import Topup from './Topup';
import Search from './Search';
import EditProfile from './EditProfile';
import ForgotPass from './ForgotPass';
import ForgotOtp from './ForgotOtp';
import ForgotNew from './ForgotNew';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import ConstantReducer from './redux/ConstantReducer';
import styles, { MyColor } from './Styles';

const store = createStore(ConstantReducer);

const iconImgSrc = {
  Home: {
    active: require('../assets/tab-home-focus.png'),
    inactive: require('../assets/tab-home.png'),
  },
  Activity: {
    active: require('../assets/tab-activity-focus.png'),
    inactive: require('../assets/tab-activity.png'),
  },
  Access: {
    active: require('../assets/tab-access-focus.png'),
    inactive: require('../assets/tab-access.png'),
  },
  Search: {
    active: require('../assets/tab-search-focus.png'),
    inactive: require('../assets/tab-search.png'),
  },
  Account: {
    active: require('../assets/tab-account-focus.png'),
    inactive: require('../assets/tab-account.png'),
  },
};

const TabBarIcon = ({ focused, title }) => {
  const imgSrcInactive = iconImgSrc[title].inactive;
  const imgSrcActive = iconImgSrc[title].active;
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
      }}
    >
      <Image
        source={focused ? imgSrcActive : imgSrcInactive}
        style={{ width: 20, height: 20, marginBottom: 2 }}
      />
      <Text style={focused ? styles.tabBarTitleActive : styles.tabBarTitle}>
        {title}
      </Text>
    </View>
  );
};

const App = () => {
  const [fontLoaded, fontError] = useFonts({
    NunitoBold: require('../assets/fonts/Nunito-Bold.ttf'),
    KanitLight: require('../assets/fonts/Kanit-Light.ttf'),
    NunitoLight: require('../assets/fonts/Nunito-Light.ttf'),
    NunitoRegular: require('../assets/fonts/Nunito-Regular.ttf'),
  });

  if (!fontLoaded || fontError) return null;

  return (
    <Provider store={store}>
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
            headerTintColor='#5394b5'
            navTransparent={true}
            hideTabBar
          />
          <Scene
            key='login'
            component={Login}
            headerTintColor='#5394b5'
            navTransparent={true}
            hideTabBar
          />
          <Scene
            key='forgot'
            component={ForgotPass}
            headerTintColor='#5394b5'
            navTransparent={true}
            hideTabBar
          />
          <Scene
            key='forgototp'
            component={ForgotOtp}
            headerTintColor='#5394b5'
            navTransparent={true}
            hideTabBar
          />
          <Scene
            key='forgotnew'
            component={ForgotNew}
            headerTintColor='#5394b5'
            navTransparent={true}
            hideTabBar
          />
          <Scene
            key='tabbar'
            tabs={true}
            tabBarStyle={styles.tabBarStyle}
            titleStyle={{ display: 'none' }}
            showLabel={false}
            hideNavBar
          >
            <Scene key='Home' title='Home' icon={TabBarIcon}>
              <Scene
                key='homehome'
                component={Homeuser}
                navTransparent={true}
                headerTintColor='#5394b5'
                initial={true}
              />
              <Scene
                key='license'
                component={License}
                headerTintColor='#5394b5'
                navTransparent={true}
                hideTabBar={true}
                //onRight={() => Actions.refresh({ key: Math.random() })}
                //rightButtonImage={require('../assets/icon-refresh.png')}
                //rightButtonIconStyle={{ width: 24, height: 24 }}
              />
              <Scene
                key='addlc'
                component={Addlc}
                headerTintColor='#5394b5'
                navTransparent={true}
                hideTabBar={true}
              />
              <Scene
                key='payment'
                component={Payment}
                headerTintColor='#5394b5'
                navTransparent={true}
                hideTabBar={true}
                //onRight={() => Actions.refresh({ key: Math.random() })}
                //rightButtonImage={require('../assets/icon-refresh.png')}
                //rightButtonIconStyle={{ width: 24, height: 24 }}
              />
              <Scene
                key='addcard'
                component={Addcard}
                headerTintColor='#5394b5'
                navTransparent={true}
                hideTabBar={true}
              />
              <Scene
                key='topup'
                component={Topup}
                headerTintColor='#5394b5'
                navTransparent={true}
                hideTabBar={true}
              />
            </Scene>
            <Scene key='Activity' title='Activity' icon={TabBarIcon}>
              <Scene
                key='activity'
                component={Activity}
                navTransparent={true}
                headerTintColor='#5394b5'
                //onRight={() => Actions.refresh({ key: Math.random() })}
                //rightButtonImage={require('../assets/icon-refresh.png')}
                //rightButtonIconStyle={{ width: 24, height: 24 }}
                initial={true}
              />
              <Scene
                key='parking'
                component={Parking}
                navTransparent={true}
                headerTintColor='#5394b5'
                hideTabBar={true}
              />
            </Scene>
            <Scene key='Access' title='Access' icon={TabBarIcon}>
              <Scene
                key='accesshome'
                component={Access}
                initial={true}
                navTransparent={true}
                headerTintColor='#5394b5'
                //onRight={() => Actions.refresh({ key: Math.random() })}
                //rightButtonImage={require('../assets/icon-refresh.png')}
                //rightButtonIconStyle={{ width: 24, height: 24 }}
              />
              <Scene
                key='time'
                component={Time}
                navTransparent={true}
                headerTintColor='#5394b5'
                hideNavBar={false}
                hideTabBar={true}
              />
              <Scene
                key='share'
                component={Share}
                navTransparent={true}
                headerTintColor='#5394b5'
                hideNavBar={false}
                hideTabBar={true}
              />
            </Scene>
            <Scene key='Search' title='Search' icon={TabBarIcon}>
              <Scene
                key='search'
                component={Search}
                navTransparent={true}
                headerTintColor='#5394b5'
                //onRight={() => Actions.refresh({ key: Math.random() })}
                //rightButtonImage={require('../assets/icon-refresh.png')}
                //rightButtonIconStyle={{ width: 24, height: 24 }}
              />
            </Scene>
            <Scene key='Account' title='Account' icon={TabBarIcon}>
              <Scene
                key='account'
                component={Other}
                navTransparent={true}
                headerTintColor='#5394b5'
                //onRight={() => Actions.refresh({ key: Math.random() })}
                //rightButtonImage={require('../assets/icon-refresh.png')}
                //rightButtonIconStyle={{ width: 24, height: 24 }}
                initial={true}
              />
              <Scene
                key='edit'
                component={EditProfile}
                navTransparent={true}
                headerTintColor='#5394b5'
                hideTabBar={true}
                //onRight={() => Actions.refresh({ key: Math.random() })}
                //rightButtonImage={require('../assets/icon-refresh.png')}
                //rightButtonIconStyle={{ width: 24, height: 24 }}
              />
            </Scene>
          </Scene>
        </Scene>
      </Router>
    </Provider>
  );
};

export default App;
