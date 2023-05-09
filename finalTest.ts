import * as readline from 'readline';
import * as process from 'process';
import { Professional } from './professional';
const rl = require("readline-sync")
import * as fs from 'fs';
import { Movie } from './movie';
import { Imdb } from './imdb';

let actor  ={
name: "", 
age:  0,
weight:  0,
height:  0,
isRetired:  false,
nationality:  "",
oscarsNumber:  0,
profession:   "",
} ;

actor.name = rl.question("What is actor name?: ");
actor.age = rl.question("How old is?: ");
actor.weight = rl.question("How much does it weigh?: ");
actor.height= rl.question("How much does it height?: ");
actor.isRetired = rl.question("Is retired?: ");
actor.nationality = rl.question("What is his nationality?: ");
actor.oscarsNumber = rl.question("How many oscars does he have?: ");
actor.profession =  rl.question("What is his profession?: ");


          
console.log(actor)

let json= JSON.stringify(actor);

let inst:Professional= JSON.parse(json);

let movie1:Movie = new Movie("Iron Man", 2008, "American", "Action");

let professional1:Professional = new Professional ("Robert Downey Jr.", 58, 78, 1.74, false, "American", 0, "Actor");
let professional2:Professional = new Professional ("Gwyneth Paltrow", 50, 60, 1.75, false, "American", 1, "Actress");
let professional3:Professional = new Professional ("Jon Favreau", 56, 98, 1.85, false, "American", 0, "Director");
let professional4:Professional = new Professional ("Stan Lee", 100, 70, 1.80, true, "American", 0, "Writer");
let professional5:Professional = new Professional ("Kevin Feige", 49, 75, 1.85, false, "American", 0, "Producer");



let actors: Professional []= [professional1,professional2, inst];
movie1.actors = actors;
movie1.director = professional3;
movie1.writer = professional4;
movie1.language = "English";
movie1.plataforma = "Netflix";
movie1.isMCU = true;
movie1.mainCharacterName = "Tony Stark / Iron Man";
movie1.producer = "Kevin Feige";
movie1.distributor = "Marvel";

let movie2:Movie = new Movie("Iron Man 2", 2010, "American", "Action");

movie2.actors = actors;
movie2.director = professional3;
movie2.writer = professional4;
movie2.language = "English";
movie2.plataforma = "Disney+";
movie2.isMCU = true;
movie2.mainCharacterName = "Tony Stark / Iron Man";
movie2.producer = "Kevin Feige";
movie2.distributor = "Marvel";

let movies:Movie[] = [movie1,movie2];

let archive:Imdb = new Imdb(movies);

archive.escribirEnFicheroJSON("BBDD.json");












