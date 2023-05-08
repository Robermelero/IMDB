"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Professional = void 0;
var Professional = /** @class */ (function () {
    /////////////////////////// CONSTRUCTOR /////////////////////////
    function Professional(name, age, weight, height, isRetired, nationality, oscarNumber, profession) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumber = oscarNumber;
        this.profession = profession;
    }
    ///////////////////////////// METODS //////////////////////////////
    Professional.prototype.toprint = function () {
        console.log("".concat("\n", "Name : ").concat(this.name).concat("\n", "Age : ").concat(this.age).concat("\n", "Weight : ").concat(this.weight).concat("\n", "Height : ").concat(this.height).concat("\n", "Is retired - ").concat(this.isRetired).concat("\n", "Nationality : ").concat(this.nationality).concat("\n", "Oscar number : ").concat(this.oscarsNumber).concat("\n", "Profession : ").concat(this.profession, "$"));
    };
    return Professional;
}());
exports.Professional = Professional;
