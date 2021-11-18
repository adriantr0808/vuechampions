<template>
  <div>
      <h1 class='m-4'>Jugadores</h1>
           <table class="table table-striped" v-if="jugadores">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Imagen</th>
                    <th>Acción</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(jug, index) in jugadores" :key="index">
                    <td>{{jug.nombre}}</td>
                    <td><img v-bind:src="jug.imagen" height="100px"></td>
                   
                </tr>
            </tbody>
        </table>
  </div>
</template>

<script>
import Servicejugadores from './../../services/Servicejugadores';
const service = new Servicejugadores();
export default {
    name:'Jugadores',
    data(){
        return{
            jugadores:[],
            busqueda:''
        }
    },
    mounted(){
        this.busqueda = this.$route.params.nom;
        console.log(this.busqueda);
        this.cargarJugadores();

    },
     watch: {
        '$route.params.nom'(next, prev) {
            if (next != prev) {
                this.busqueda = this.$route.params.nom;
                this.cargarJugadores();
            }
        }
     },
    methods:{
        cargarJugadores(){
            service.getJugadoresNom(this.busqueda).then(result => {
                this.jugadores=result;
            });
        }
    }
}
</script>

<style>

</style>