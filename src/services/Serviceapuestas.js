import Global from './../components/Global';
import axios from 'axios';


export default class Serviceapuestas{
    getApuestas(){
        return new Promise(function (resolve) {
            var request ='/api/Apuestas';
            var url = Global.urlChampions+request;
            var apuestas = [];
            axios.get(url).then(res => {
                 apuestas = res.data
                 resolve(apuestas);
            });
         });
    }

    deleteApuesta(idApuesta) {
        return new Promise(function(resolve) {
            var request = "/api/apuestas/" + idApuesta;
            var url = Global.urlChampions + request;
            axios.delete(url).then(() => {
                resolve(true);
            });
        })
    }
}