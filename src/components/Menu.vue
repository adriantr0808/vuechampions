<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link " to='/home'>Home</router-link>
        </li>
        <li class="nav-item">
        <router-link class='nav-link' to='/apuestasnuevo'>Apuestas</router-link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Equipos
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li v-for='(e, index) in equipos' :key='index'><router-link class='dropdown-item' :to="'/detallesequipo/'+e.idEquipo">{{e.nombre}}</router-link></li>
            
          </ul>
        </li>
       
      </ul>
      <form class="d-flex" v-on:submit.prevent='buscarJugadores'>
        <input class="form-control me-2" type="search" placeholder="Buscar Jugador" aria-label="Buscar" v-model='buscar'>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</template>

<script>
import Serviceequipos from './../services/Serviceequipos';
const service = new Serviceequipos();
export default {
    name: 'Menu',
    data(){
      return{
        equipos:[],
        buscar:''
      }
    },
    mounted(){
      this.cargarEquipos();
    },
    methods:{
      cargarEquipos(){
        service.getEquipos().then((res)=> {
          this.equipos=res;
          console.log(this.equipos);
        })
      },

      buscarJugadores(){
        if(this.busqueda!=''){
          this.$router.push('/buscarjugadores/'+this.buscar)
        }
      }
     
    }
}
</script>

<style>

</style>