import Global from './../components/Global';
import axios from 'axios';

export default class Servicejugadores {

    getJugadoresIdEq(id){
        return new Promise(function (resolve) {
            var request ='/api/Jugadores/JugadoresEquipos/'+id;
            var url = Global.urlChampions+request;
            var jugadores = [];
            axios.get(url).then(res => {
                jugadores = res.data
                console.log(jugadores);
                 resolve(jugadores);
            });
         });
    }

    getJugadoresNom(nom){
        return new Promise(function (resolve) {
            var request ='/api/Jugadores/BuscarJugadores/'+nom;
            var url = Global.urlChampions+request;
            var jugadores = [];
            axios.get(url).then(res => {
                jugadores = res.data
                console.log(jugadores);
                 resolve(jugadores);
            });
         });
    }
}