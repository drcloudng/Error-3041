import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

require('firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyA3k6O4ob-mXN53TRZDT3ymxXMBhT0xtRU",
  authDomain: "drcloud-1547993518594.firebaseapp.com",
  databaseURL: "https://drcloud-1547993518594.firebaseio.com",
  projectId: "drcloud-1547993518594",
  storageBucket: "drcloud-1547993518594.appspot.com",
  messagingSenderId: "570792336521",
  appId: "1:570792336521:web:62ab59097ca8e3e7d8fa58"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// initialize cloud firestore through firebase
var db = firebase.firestore();

window.db = db;

Vue.config.productionTip = false

new Vue({
  router,
  data: {
    auth: {}
  },
  render: h => h(App)
}).$mount('#app')
