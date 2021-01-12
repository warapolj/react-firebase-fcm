import firebase from "firebase/app";
import "firebase/messaging";

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

firebase.initializeApp(config);

const messaging = firebase.messaging();

messaging.usePublicVapidKey(
  "BNF7mAL5XtAiwg8iaR3OFxUIEOpehXtHKojhaJb7uPfY_5xcLYe6qB8UQPktX1k_JN-W-y2vK8b8xzAzEg25sK8"
);

export { messaging };
