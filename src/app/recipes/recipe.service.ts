import { Injectable } from '@angular/core';

import { Recipe } from './../shared/recipe.model';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Spagetti', 'Pasta maddness delight', 'https://upload.wikimedia.org/wikipedia/commons/7/70/Spaghetti_alle_vongole.jpg'),
    new Recipe('Spinach', 'Vegetables garden of greens', 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Food-pasta-spinach_%2824218510092%29.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }

}
