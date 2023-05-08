
export class Professional
{
/////////////////////////// ATTRIBUTES ////////////////////////

name: string;
age: number;
weight: number;
height: number;
isRetired: boolean;
nationality: string;
oscarsNumber: number;
profession: string;

/////////////////////////// CONSTRUCTOR /////////////////////////

constructor (name: string, age: number, weight: number, height: number, isRetired: boolean, nationality: string, oscarNumber: number, profession: string){

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

public toprint (){

    console.log(`${"\n"}Name : ${this.name}${"\n"}Age : ${this.age}${"\n"}Weight : ${this.weight}${"\n"}Height : ${this.height}${"\n"}Is retired - ${this.isRetired}${"\n"}Nationality : ${this.nationality}${"\n"}Oscar number : ${this.oscarsNumber}${"\n"}Profession : ${this.profession}`);

};


}