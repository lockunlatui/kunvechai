import firebase from 'firebase/app';
import '@firebase/messaging';

const firebaseConfig = {
  apiKey: "AIzaSyDLP0YXlE2E8MdYd8hMJR0GQv3pKrioCDE",
  authDomain: "kun-react-one.firebaseapp.com",
  databaseURL: "https://kun-react-one.firebaseio.com",
  projectId: "kun-react-one",
  storageBucket: "kun-react-one.appspot.com",
  messagingSenderId: "95210844384",
  appId: "1:95210844384:web:d7c766522d4e21ed40a085",
  measurementId: "G-Y68WR061HT"
};


const initializedFirebaseApp = firebase.initializeApp(firebaseConfig);

const messaging = initializedFirebaseApp.messaging();

messaging.usePublicVapidKey(
  "BIBtQJmNsy-31-pYIdgr4bkZseS8f33kSq3KqtD1MVNqwfwbZXc5O1uLkMU_kBGjUtgNvfymweqRXHjs4jXJQc8"
);

export { messaging };

