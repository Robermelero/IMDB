import * as fs from 'fs';

import { Movie } from "./movie";




export class Imdb
{

///////////// ATTRIBUTES /////////////

public peliculas: Movie[];


////////////  CONSTRUCTOR  /////////////

constructor (peliculas:Movie[]){

    this.peliculas = peliculas ;
}

/////////////// METODS   //////////////

public escribirEnFicheroJSON(nombreFichero: string){
    
    let txt = JSON.stringify(this.peliculas);
    fs.writeFileSync(nombreFichero, txt);
}
public obtenerInstanciaIMDB(nombreFichero:string):Imdb{
    
    let fromJs = fs.readFileSync(nombreFichero, "utf8");
     let inst:Imdb = JSON.parse(fromJs);
    return inst;
}

}