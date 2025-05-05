import { createApp } from 'vue';
import App from './App.vue';
import store from './store';  // Importa a store

const app = createApp(App);

// Use a store corretamente na instância do app
app.use(store);

app.mount('#app');
