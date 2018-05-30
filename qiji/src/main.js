// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.


import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import Card from '@/components/card';
// import HomeCard from '@/components/HomeCard';


import router from './router'
import VueAMap from 'vue-amap';
import { lazyAMapApiLoaderInstance } from 'vue-amap';

Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(VueAMap);
// Vue.use(Card);
// Vue.use(HomeCard);

VueAMap.initAMapApiLoader({
  key: '4cab0e2b48ad2698a62278953f01f989',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  v: '1.4.4'
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  VueAMap,
  components: { App},
  template: '<App/>'
})
lazyAMapApiLoaderInstance.load().then(() => {
  // your code ...
  // this.map = new AMap.Map('amapContainer', {
  //   center: new AMap.LngLat(150, 31.197646)
  // });
  
});