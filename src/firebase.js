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

export const getToken = async () => {
  try {
    await messaging.requestPermission();
    const token = await messaging.getToken();
    console.log("token: ", token);
    return token;
  } catch (error) {
    console.log("Error: ", error);
    return null;
  }
};

messaging.usePublicVapidKey(process.env.REACT_APP_PUBLIC_VALID_KEY);

export { messaging };
