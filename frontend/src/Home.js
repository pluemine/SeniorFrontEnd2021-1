import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
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
  ImageBackground,
} from 'react-native';
import styles from './Styles';

const Home = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle='light-content' />
      <ImageBackground
        style={styles.pic}
        source={require('../assets/main.jpg')}
        blurRadius={25}
      >
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionSubtitle}></Text>
          <Text style={styles.sectionTitle}></Text>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles1.texthead}>Getting Started</Text>
          <Text style={styles1.textdes}>
            To continue, please sign in to the system or if you don't have any
            account, you can create your own account.
          </Text>
          <TouchableHighlight
            style={styles.buttonWhite}
            underlayColor='none'
            onPress={() => Actions.login()}
          >
            <View>
              <Text style={styles.buttonTextWhite}>Sign In</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.buttonbdrWhite}
            underlayColor='none'
            onPress={() => Actions.register()}
          >
            <View>
              <Text style={styles.buttonbdrTextWhite}>Create Account</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.buttonWhite}
            underlayColor='none'
            onPress={() => Actions.Activity()}
          >
            <View>
              <Text style={styles.buttonTextWhite}>Firebase</Text>
            </View>
          </TouchableHighlight>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles1 = StyleSheet.create({
  logo: {
    width: 300,
    height: 300,
    resizeMode: 'stretch',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  texthead: {
    //color: "#444444",
    color: '#FFFFFF',
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 10,
  },
  textdes: {
    //color: "#444444",
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 12,
    marginBottom: 40,
  },
});

export default Home;
