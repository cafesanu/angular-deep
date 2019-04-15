import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient.model';
import { Recipe } from 'src/app/models/recipe.model';
import { ShoppingListService } from 'src/app/services/shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  public recipeSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();
  private _nextId: number = 1;
  private _recipes: Recipe[] = [
    new Recipe(
      this._nextId++,
      'Arroz con pollo',
      'Can\'t go wrong with chicken and rice',
      'https://www.tasteofhome.com/wp-content/uploads/2017/10/Healthier-than-Egg-Rolls_EXPS_SDON17_55166_C06_23_6b-696x696.jpg',
      [
        new Ingredient('Chicken', 1),
        new Ingredient('Rice', 1)
      ]
    ),

    new Recipe(
      this._nextId++,
      'Paella',
      'Con mariscos y chorizo',
      'https://www.janellapurcell.com/wp-content/uploads/2016/07/paella.jpg',
      [
        new Ingredient('Chicken', 1),
        new Ingredient('Rice', 1)
      ]
    )
  ];

  constructor(
    private _shoppingListService: ShoppingListService
  ) {
  }

  public getRecipes(): Recipe[] {
    return this._recipes.slice();
  }

  public getRecipe(id: number): Recipe {
    return this._recipes.find((recipe: Recipe) => recipe.id === id);
  }

  public addIngredientsToShoppingList(ingredients: Ingredient[]): void {
    this._shoppingListService.addIngredients(ingredients);
  }
}
