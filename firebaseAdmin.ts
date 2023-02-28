// https://www.npmjs.com/package/firebase-admin
import admin from "firebase-admin";
import { getApps } from "firebase-admin/app";

// 取得 admin private key: Firebase -> Project Overview -> Service accounts -> Firebase Admin SDK -> Generate new private key

const serviceAccount = JSON.parse(
  process.env.FIREBASE_SERVICE_ACCOUNT_KEY as string
);

// https://stackoverflow.com/questions/58974879/using-firebase-admin-what-are-service-account-credentials-used-for
if (!getApps().length) {
  admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
}

const adminDb = admin.firestore();

export { adminDb };
