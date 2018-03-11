import { Injectable, EventEmitter } from '@angular/core';

import { Ingredient } from './../shared/ingredient.model';

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('pasta', 300),
    new Ingredient('cheese', 100)
  ];
  
  constructor() { }
 
  getIngredients() {
    return this.ingredients.slice();
  }
  
  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
