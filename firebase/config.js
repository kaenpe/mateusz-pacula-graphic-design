import 'firebase/analytics';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyBTvP6hxyKnF4CFQelxr3mgxVL08cXwlqU',
  authDomain: 'mp-graphicdesign.firebaseapp.com',
  databaseURL: 'https://mp-graphicdesign.firebaseio.com',
  projectId: 'mp-graphicdesign',
  storageBucket: 'mp-graphicdesign.appspot.com',
  messagingSenderId: '416024181139',
  appId: '1:416024181139:web:33d0f833f4deae7ecf5066',
  measurementId: 'G-0N3MSNLXFE',
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectAuth, timestamp };
