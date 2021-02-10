/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
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
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <View style={styles.maincard}>
                <Text style={styles.sectionSubtitle}>WELCOME</Text>
                <Text style={styles.sectionTitle}>Register</Text>
                <TextInput
                  style={styles.textbox}
                  placeholder={'Email'}
                />
                <TextInput
                  style={styles.textbox}
                  placeholder={'Password'}
                />
                <TextInput
                  style={styles.textbox}
                  placeholder={'Confirm Password'}
                />
                <TextInput
                  style={styles.textbox}
                  placeholder={'Firstname'}
                />
                <TextInput
                  style={styles.textbox}
                  placeholder={'Middlename'}
                />
                <TextInput
                  style={styles.textbox}
                  placeholder={'Lastname'}
                />
                <TextInput
                  style={styles.textbox}
                  placeholder={'BirthDate'}
                />
                <TextInput
                  style={styles.textbox}
                  placeholder={'Phone Number'}
                />
                <TouchableHighlight style={styles.button}>
                  <Button color="#FFFFFF" title="Register"/>
                </TouchableHighlight>
                <Text style={styles.sectionDescription}>
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <View style={styles.maincard}>
                <Text style={styles.sectionSubtitle}>WELCOME</Text>
                <Text style={styles.sectionTitle}>Sign In</Text>
                <TextInput
                  style={styles.textbox}
                  placeholder={'Email'}
                />
                <TextInput
                  style={styles.textbox}
                  placeholder={'Password'}
                />
                <TouchableHighlight style={styles.button}>
                  <Button color="#FFFFFF" title="Sign In"/>
                </TouchableHighlight>
                <Text style={styles.sectionDescription}>
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionSubtitle: {
    marginTop: 8,
    fontSize: 10,
    fontWeight: '800',
    color: '#f49608',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  maincard: {
    maxWidth: 500,
    width: '100%',
    margin: 'auto',
    marginTop: 15,
    /*marginTop: -160,*/
    marginBottom: 15,
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textbox: {
    backgroundColor: '#F1F1F1',
    color: '#000000',
    borderRadius: 6,
    width: '100%',
    marginTop: 15,
    marginBottom: 0,
    height: 40,
    paddingLeft: 20,
  },
  button: {
    backgroundColor: '#444444',
    color: '#FFFFFF',
    borderRadius: 6,
    width: '100%',
    marginTop: 40,
    marginBottom: 0,
    height: 40,
  }
});

export default App;
