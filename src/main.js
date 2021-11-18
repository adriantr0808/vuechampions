import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Home from './components/equipos/Home.vue'
import DetallesEquipo from './components/equipos/DetallesEquipo.vue';
import Jugadores from './components/jugadores/Jugadores.vue';
import ApuestasNuevo from './components/apuestas/Apuestasnuevo.vue';
import BuscarJugadores from './components/jugadores/BuscarJugadores.vue';

Vue.config.productionTip = false
Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/home', component: Home },
  { path: '/detallesequipo/:id', component: DetallesEquipo },
  { path: '/jugadores/:idEq', component: Jugadores },
  { path: '/apuestasnuevo', component: ApuestasNuevo },
  { path: '/buscarjugadores/:nom', component: BuscarJugadores },
]


const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')