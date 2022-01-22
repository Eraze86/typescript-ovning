import { IService } from "../module/IService";



export class service implements IService{

    getData(){
        fetch("http://www.omdbapi.com/?i=tt3896198&apikey=1152cfbe")
        .then(response => response.json())
        .then(data => console.log(data));
        return service
    }
}


// export async function getMovies() {
//     const response = await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=1152cfbe");
//     const movies = await response.json();
//     return movies;
// }