import { Professional } from "./professional";


export class Movie{

//////////////////////  ATTRIBUTES //////////////////////////

title: string;
releaseYear: number;
actors: Professional[];
nacionality: string;
director: Professional;
writer: Professional;
language: string;
plataforma: string;
isMCU: boolean;
mainCharacterName: string;
producer: string;
distributor: string;
genre: string;

/////////////////////  CONSTRUCTOR  //////////////////////////

constructor(title: string, releaseYear: number, nacionality: string, genre: string){

this.title = title;
this.releaseYear = releaseYear;
this.actors = [];
this.nacionality = nacionality;
this.director  ;
this.writer ;
this.language ;
this.plataforma;
this.isMCU;
this.mainCharacterName;
this.producer ;
this.distributor ;
this.genre = genre;
}

/////////////////////////  METODS  //////////////////////////////

public allPrint(){
   
   console.log("\nTitle :"+ this.title+"\nRelease Year :" +this.releaseYear+"\nActors :", this.actors,"\nNacionality :" +this.nacionality+"\nDirector :" ,this.director,"\nWriter :" , this.writer,"\nLanguage :" +this.language+"\nPlataforma :" +this.plataforma+"\nIs MCU :" +this.isMCU+"\nMain Character Name :" +this.mainCharacterName+"\nProducer :" +this.producer+"\nDistributor :" +this.distributor+"\nGenre :" +this.genre);

}}