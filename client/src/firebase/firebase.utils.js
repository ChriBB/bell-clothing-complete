import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
        apiKey: "AIzaSyBRmWy1KW79YmDdSyXwSX_XifINSCNZlUU",
        authDomain: "bell-db.firebaseapp.com",
        databaseURL: "https://bell-db.firebaseio.com",
        projectId: "bell-db",
        storageBucket: "bell-db.appspot.com",
        messagingSenderId: "376948054972",
        appId: "1:376948054972:web:12bc610d27eaf6cc2029b9",
        measurementId: "G-1L4LP1L51Z"
  };

  firebase.initializeApp(config);


  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();
    
    if(!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }

    return userRef;
};

export const addCollectionAndDocuments = async(collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  
  const batch = firestore.batch()
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
    const{ title, items } = doc.data();
  

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
      };
    });

    return transformedCollection.reduce((accumulator, collection) => {accumulator[collection.title.toLowerCase()] = collection;
    return accumulator; 
    } , {});
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject)
  });
};

// export firebase auth and firestore
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Google authentication, this gives acces to new GoogleAuthProvider class from auth library 
export const googleProvider = new firebase.auth.GoogleAuthProvider();
// lets pop-up appear when GoogleAuthProvider is used
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;