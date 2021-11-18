<template>
<div>
  <h1>Apuestas</h1>
    <button @click='saludar()'>hola</button>
  <table class="table table-striped table-dark">
      <thead>
        <tr>
          <th>Usuario</th>
          <th>Resultado</th>
          <th>Fecha</th>
          <th>Eliminar</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for='(a, index) in apuestas' :key='index'>
          <td>{{a.usuario}}</td>
           <td>{{a.resultado}}</td>
            <td>{{a.fecha}}</td>
            <td><button data-bs-toggle='modal' v-bind:data-bs-target="'#apuesta'+a.idApuesta">Eliminar</button></td>
            <div class="modal" v-bind:id="'apuesta'+a.idApuesta" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title text-dark">Eliminar Apuesta</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body text-dark">
              <p>¿Estas seguro de que quieres eliminar esta apuesta?</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-bs-dismiss="modal"  @click='eliminarApuesta(a.idApuesta)'>Eliminar</button>
              <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Cerrar</button>
            </div>
          </div>
        </div>
      </div>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Serviceapuestas from './../../services/Serviceapuestas';
const service = new Serviceapuestas();
export default {
    name:'ApuestasNuevo',
    data(){
        return{
            apuestas:[]
        }
    },
    mounted(){
        this.cargarApuestas();
    },
    methods:{
    cargarApuestas(){
        service.getApuestas().then(res => {
            this.apuestas=res;
        });
    },
    saludar(){
        console.log('hola');
    },
    eliminarApuesta(id){
       service.deleteApuesta(id).then(res => {
           if(res){
               this.cargarApuestas();
           }
       });
    }
    
    }
    
}
</script>

<style>

</style>