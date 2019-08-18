import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false
axios.defaults.baseURL = 'http://www.omdbapi.com/?apikey=b76b385c&page=1&type=movie&Content-Type=application/json'

new Vue({
  vuetify,
  render: h => h(App),
  router,
}).$mount('#app')
