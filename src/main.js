import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);

// Atrapar errores
app.config.errorHandler = (err) => {
    console.log("Error ocurred: ", err);
}

app.mount('#app');

