import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  // DEFAULT WITH VUE CLI: render: h => h(App)
  render: createElement => createElement(App),
}).$mount('#app');
