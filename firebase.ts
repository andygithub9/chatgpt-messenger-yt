// https://www.npmjs.com/package/firebase
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAS9NNviA3RTcM5qGh6Lr3NlQusCzoU0bQ",
  authDomain: "chatgpt-messenger-yt-c63f9.firebaseapp.com",
  projectId: "chatgpt-messenger-yt-c63f9",
  storageBucket: "chatgpt-messenger-yt-c63f9.appspot.com",
  messagingSenderId: "857506921053",
  appId: "1:857506921053:web:5dc9e2c37619be7bcf2bb4",
};

// Initialize Firebase
// Singleton pattern
// getApps 返回一個陣列，陣列裡包含初始化的 apps，如果陣列長度大於零則 app = getApp()，getApp 會返回 app
// 如果 getApps 返回的 apps 陣列長度等於零則初始化 app
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
