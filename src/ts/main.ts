import { service } from "./module/service";
import { IService } from "./module/IService";

window.onload = function(){
 
    let main = new Main()
    main.start();
   
}
class Main{
    start(service: IService){
        
        console.log(service)
        
    }
 
    
}



