import Vue from 'vue'
// import Vuex from 'vuex'
import App from './App.vue'
import router from './router'

// Vue.use(Vuex)

let vm = new Vue({
  el: '#app',
  render: h => h(App),
  router
})

Vue.use({
  vm
})
