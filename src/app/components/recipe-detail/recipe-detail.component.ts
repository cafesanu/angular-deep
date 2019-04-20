import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe/recipe.service';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  public recipe: Recipe;

  constructor(
    private _recipeService: RecipeService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  public ngOnInit(): void {
    this._route.params
      .subscribe((params: Params) => {
        this.recipe = this._recipeService.getRecipe(Number(params.id));
      });
  }

  public onAddToShoppingList(): void {
    this._recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  public onEditRecipe(): void {
    // tslint:disable-next-line: no-floating-promises
    this._router.navigate(['edit'], {
      relativeTo: this._route
    });
  }

  public onDeleteRecipe(): void {
    this._recipeService.deleteRecipe(this.recipe.id);
    // tslint:disable-next-line: no-floating-promises
    this._router.navigate(['/recipes']);
  }
}
