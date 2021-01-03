import Vue from 'vue'
import MintUI from 'mint-ui'
import { Carousel, CarouselItem } from 'element-ui'
import App from './App.vue'
import router from './router'
import './rem';
import 'mint-ui/lib/style.css';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(MintUI);
Vue.use(Carousel);
Vue.use(CarouselItem);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
