<template>
  <div class="text-center" v-if="!equipo">
        <p>Cargando...</p>
    <div class="spinner-border" role="status">
      
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
  <div v-else>
    <h1 class="m-4">Detalles</h1>
    <div class="card mt-3 p-4 container">
      <img :src="equipo.imagen" class="card-img-top" style="width: 200px" />
      <div class="card-body">
        <h5 class="card-title">{{ equipo.nombre }}</h5>
        <p class="card-text">
          {{ equipo.descripcion }}
        </p>
        <p class="card-text">Champions: {{ equipo.champions }}</p>
        <router-link :to="'/jugadores/'+equipo.idEquipo" class="btn btn-primary">Jugadores</router-link>
        <a class="btn btn-danger ms-2">Volver</a>
      </div>
    </div>
  </div>
</template>

<script>
import Serviceequipos from "./../../services/Serviceequipos";
const service = new Serviceequipos();
export default {
  name: "DetallesEquipo",
  data() {
    return {
      equipo: null,
      id: 0,
    };
  },
  mounted() {
    this.id = this.$route.params.id;
    this.cargarEquipoId();
  },
  watch: {
    "$route.params.id"(nextVal, prevVal) {
      if (nextVal != prevVal) {
         this.id = this.$route.params.id;
    this.cargarEquipoId();
      }
    },
  },
  methods: {
    cargarEquipoId() {
      service.getEquipoId(this.id).then((res) => {
        this.equipo = res;
      });
    },
  },
};
</script>

<style>
</style>