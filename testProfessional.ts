import { Professional } from "./professional";

let professional1:Professional = new Professional ("Robert De Niro", 79, 80, 1.78, false, "American", 2, "Actor");
let professional2:Professional = new Professional ("Martin Scorsese", 80, 70, 1.63, false, "American", 1, "Director");
let professional3:Professional = new Professional ("Robert Downey Jr.", 58, 78, 1.74, false, "American", 0, "Actor");
let professional4:Professional = new Professional ("Margot Robbie", 32, 57, 1.68, false, "Australian", 2, "Actress");

professional1.toprint();
professional2.toprint();
professional3.toprint();
professional4.toprint();