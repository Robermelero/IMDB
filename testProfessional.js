"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var professional_1 = require("./professional");
var professional1 = new professional_1.Professional("Robert De Niro", 79, 80, 1.78, false, "American", 2, "Actor");
var professional2 = new professional_1.Professional("Martin Scorsese", 80, 70, 1.63, false, "American", 1, "Director");
var professional3 = new professional_1.Professional("Robert Downey Jr.", 58, 78, 1.74, false, "American", 0, "Actor");
var professional4 = new professional_1.Professional("Margot Robbie", 32, 57, 1.68, false, "Australian", 2, "Actress");
professional1.toprint();
professional2.toprint();
professional3.toprint();
professional4.toprint();