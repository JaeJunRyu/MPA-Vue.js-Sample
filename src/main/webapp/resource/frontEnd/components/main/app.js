import Vue from 'vue';
import Component1 from './Component1';
import Component2 from './Component2.vue';
import Component3 from './Component3.vue';
//import axios from 'axios';
// import VueAxios from 'vue-axios';

// Vue.use(VueAxios, axios);
const test = "test";

new Vue({
  el: '#vueapp1',
  render: h => h(Component1)
});

new Vue({
  el: '#vueapp2',
  // mixins : [Component2]
  render: h => h(Component2)
});

new Vue({
  el: '#vueapp3',
  render: h => h(Component3)
});

