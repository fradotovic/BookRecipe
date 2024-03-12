import { Call } from "@angular/compiler";
import { timeInterval } from "rxjs-compat/operator/timeInterval";


export class Recipe{

  public name: string;

  public description: string;

  public imagePath: string;

constructor(name:string, description:string, imagePath:string){

  this.name = name;

  this.description = description;

  this.imagePath = imagePath;

}



}
