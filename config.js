import firebase from 'firebase';


const firebaseConfig = {
  apiKey: 'AIzaSyBxFUalYE_zjmHo_Lc3uLAAsVowg6tnHLg',
  authDomain: 'elib-88856.firebaseapp.com',
  projectId: 'elib-88856',
  storageBucket: 'elib-88856.appspot.com',
  messagingSenderId: '12102795857',
  appId: '1:12102795857:web:de02933dff84071d986e70',
};
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
