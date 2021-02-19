import Vue from 'vue';
import Amplify from 'aws-amplify';
import {
  applyPolyfills,
  defineCustomElements,
} from '@aws-amplify/ui-components/loader';
import awsExports from './aws-exports';
import App from './App.vue';

Amplify.configure(awsExports);
applyPolyfills().then(() => {
  defineCustomElements(window);
});

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
