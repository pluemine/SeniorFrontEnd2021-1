import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCyz7PKIKicNPdUrVDbgZOW9x6K363yU-Q',
  authDomain: 'essaging-31cda.firebaseapp.com',
  databaseURL: 'https://messaging-31cda-default-rtdb.firebaseio.com',
  projectId: 'messaging-31cda',
  storageBucket: '647553688817',
  messagingSenderId: '647553688817',
  appId: '1:647553688817:web:eab9e9e1611ff52df37550',
  measurementId: 'G-WPPQ26K94W',
};

firebase.initializeApp(config);

module.exports = firebase;
