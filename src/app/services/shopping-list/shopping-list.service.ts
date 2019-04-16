import { Subject } from 'rxjs';
import { Ingredient } from 'src/app/models/ingredient.model';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  public ingredientsChanged: Subject<Ingredient[]> = new Subject<Ingredient[]>();
  private _ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  constructor() {
  }

  public getIngredients(): Ingredient[] {
    return this._ingredients.slice();
  }

  public addIngredient(ingredient: Ingredient): void {
    this._ingredients.push(ingredient);
    this.ingredientsChanged.next(this._ingredients.slice());
  }

  public addIngredients(ingredients: Ingredient[]): void {
    this._ingredients = [
      ...this._ingredients,
      ...ingredients
    ];
    this.ingredientsChanged.next(this._ingredients.slice());
  }
}
