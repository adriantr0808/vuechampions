import Global from './../components/Global';
import axios from 'axios';


export default class Serviceequipos {
    getEquipos(){
        return new Promise(function (resolve) {
           var request ='/api/Equipos';
           var url = Global.urlChampions+request;
           var equipos = [];
           axios.get(url).then(res => {
                equipos = res.data
                resolve(equipos);
           });
        });
    }

    getEquipoId(id){
        return new Promise(function (resolve) {
            var request ='/api/Equipos/'+id;
            var url = Global.urlChampions+request;
           
            axios.get(url).then(res => {
                var equipo = res.data
                 resolve(equipo);
            });
         });
    }
}