import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {

recipes: Recipe[] = [
  new Recipe('Pizza Slavonska','Pizza s kulenom','https://www.escapefastfood.hr/images/virtuemart/product/resized/prod_219_810x810.jpg'),
  new Recipe('Bolognese','Talijanski specijalitet','https://feelgoodfoodie.net/wp-content/uploads/2023/04/Pasta-Bolognese-TIMG.jpg')
];

constructor() {

}

ngOnInit(){

}

}
