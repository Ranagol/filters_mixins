import Vue from 'vue'
import App from './App.vue'

Vue.filter('toLowerCase', function(value){
  return value.toLowerCase();//this is a globally registered filter usable anywhere in the app
});

new Vue({
  el: '#app',
  render: h => h(App)
})
