import 'babel-polyfill';
import 'normalize.css/normalize.css'; // A modern alternative to CSS resets
import 'ionicons/dist/scss/ionicons.scss';

import Vue from 'vue';
import App from './app/App.vue';
import {
  VueCommunication
} from './global-prototype';
// vue全局消息通讯
Vue.use(VueCommunication);

new Vue({
  el: '#app',
  render: h => h(App)
});
