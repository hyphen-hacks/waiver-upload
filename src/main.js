import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
const config = {
  apiKey: "AIzaSyDCnWcOvTFf5P4mWeSl0KDxnGOEDRJTVwg",
  authDomain: "hyphen-hacks-2019.firebaseapp.com",
  databaseURL: "https://hyphen-hacks-2019.firebaseio.com",
  projectId: "hyphen-hacks-2019",
  storageBucket: "hyphen-hacks-2019.appspot.com",
  messagingSenderId: "496171471834"
};
firebase.initializeApp(config);
Vue.prototype.$firebase = firebase
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
