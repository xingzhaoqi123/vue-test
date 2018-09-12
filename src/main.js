// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import Axios from "axios";

//把axios挂载到vue的原型中，在vue中每个组件都可以使用axios发送请求
Vue.prototype.$axios = Axios;

//这里要注意Vue.prototype.HOME是一个定值，默认指向localhost
//此处修改其路径，让其指向'/api'，配置文件index.js定义的可跨域路径
Vue.prototype.HOME='/api'
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
