
import { Professional } from "./professional";
import { Movie } from "./movie";

let movie1:Movie = new Movie("Iron Man", 2008, "American", "Action");

let professional1:Professional = new Professional ("Robert Downey Jr.", 58, 78, 1.74, false, "American", 0, "Actor");
let professional2:Professional = new Professional ("Gwyneth Paltrow", 50, 60, 1.75, false, "American", 1, "Actress");
let professional3:Professional = new Professional ("Jon Favreau", 56, 98, 1.85, false, "American", 0, "Director");
let professional4:Professional = new Professional ("Stan Lee", 100, 70, 1.80, true, "American", 0, "Writer");
let professional5:Professional = new Professional ("Kevin Feige", 49, 75, 1.85, false, "American", 0, "Producer");



let actors: Professional []= [professional1,professional2];
movie1.actors = actors;
movie1.director = professional3;
movie1.writer = professional4;
movie1.language = "English";
movie1.plataforma = "Netflix";
movie1.isMCU = true;
movie1.mainCharacterName = "Tony Stark / Iron Man";
movie1.producer = "Kevin Feige";
movie1.distributor = "Marvel";

movie1.allPrint();

