// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//custom components
import VueProgressBar from 'vue-progressbar'
//application
import App from './App'
//progressBar options
const options = {
  color: '#c11b4f',
  failedColor: '#874b4b',
  thickness: '1px',
  transition: {
    speed: '3s',
    opacity: '2s',
    termination: 300
  },
  autoRevert: true,
  location: 'top',
  inverse: true
}

//use custom components
Vue.use(VueProgressBar, options)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
