import { createApp } from 'vue';

import App from './App.vue';
import BaseButton from './components/UI/BaseButton';
import BaseStep from "./components/UI/BaseStep.vue";

const app = createApp(App);

app.component('base-button', BaseButton);
app.component('base-step', BaseStep)

app.mount('#app');
