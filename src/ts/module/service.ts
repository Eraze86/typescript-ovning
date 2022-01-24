import { IService } from "../module/IService";



export class service implements IService{
    title: string;
    constructor(title: string){
        this.title = title
    }

    getData(){
        return fetch("http://www.omdbapi.com/?i=tt3896198&apikey=1152cfbe")
        .then(response => response.json())
        .then(data => {
            console.log(data)
            return data;
     
        })      
    }
}


