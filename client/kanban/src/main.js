// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueFire from 'vuefire'// =======================(Ed)
import firebase from 'firebase'// =======================(Ed)

Vue.use(VueFire) // =======================(Ed)

Vue.config.productionTip = false

var config = {
  apiKey: 'AIzaSyCYacsEd0jTvNKT1BYsYyDh0ibBknRtrIU',
  authDomain: 'kit-fox-vision.firebaseapp.com',
  databaseURL: 'https://kit-fox-vision.firebaseio.com',
  projectId: 'kit-fox-vision',
  storageBucket: 'kit-fox-vision.appspot.co,',
  messagingSenderId: '299580960449'
}
firebase.initializeApp(config)// =======================(Ed)
Vue.prototype.$db = firebase.database() // =======================(Ed)

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
