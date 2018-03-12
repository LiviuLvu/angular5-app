import { Injectable, EventEmitter } from '@angular/core';

import { Recipe } from './../shared/recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe> ();
  private recipes: Recipe[] = [
    new Recipe(
      'Spagetti', 
      'Pasta maddness delight', 
      'https://upload.wikimedia.org/wikipedia/commons/7/70/Spaghetti_alle_vongole.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe(
      'Spinach',
      'Vegetables garden of greens', 
      'https://upload.wikimedia.org/wikipedia/commons/a/a0/Food-pasta-spinach_%2824218510092%29.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1),
      ])
  ];

  getRecipes() {
    return this.recipes.slice();
  }

}
