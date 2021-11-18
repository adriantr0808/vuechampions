<template>
     <div v-if='!jugadores' class='container'>
               <p>Cargando...</p>
    <div class="spinner-border" role="status">
      
      <span class="visually-hidden">Loading...</span>
    </div>
      </div>
  <div v-else>
      <h1 class="m-4">
          Jugadores
      </h1>
 
      <div class='container'>
   <router-link :to="'/detallesequipo/'+this.id" class='btn btn-danger mt-3 mb-3'>Volver</router-link>
  <table class='table table-dark table striped '>
    <thead>
      <tr>
        <th>Nombre</th>
        <th>Imagen</th>
        <th>Detalles</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for='(j, index) in jugadores' :key='index'>
        <td>{{j.nombre}}</td>
        <td><img :src='j.imagen' width="150px" height="auto"></td>
        <td><button  class='btn btn-warning mt-5'>Detalles</button></td>
      </tr>
    </tbody>
  </table>

  </div>
  </div>
</template>

<script>
import Servicejugadores from './../../services/Servicejugadores.js';

const service = new Servicejugadores();
export default {
    name:'Jugadores',
    data(){
        return{
            jugadores:[],
            id:0
        }
    },
    mounted(){
         this.id = this.$route.params.idEq;
         this.cargarJugadores();
        
    },
    
    methods:{
        cargarJugadores(){
            service.getJugadoresIdEq(this.id).then((res) => {
                this.jugadores=res;
                console.log(this.jugadores);
            });
        }
    }
}
</script>

<style>

</style>