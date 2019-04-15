import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  public ingredientsChanged: EventEmitter<Ingredient[]> = new EventEmitter<Ingredient[]>();
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
    this.ingredientsChanged.emit(this._ingredients.slice());
  }

  public addIngredients(ingredients: Ingredient[]): void {
    this._ingredients = [
      ...this._ingredients,
      ...ingredients,
    ];
    this.ingredientsChanged.emit(this._ingredients.slice());
  }
}
