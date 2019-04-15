import { Recipe } from 'src/app/models/recipe.model';

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import { RecipeService } from '../../services/recipe/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  public recipes: Recipe[];

  constructor(
    private _recipeService: RecipeService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
  }

  public ngOnInit(): void {
    this.recipes = this._recipeService.getRecipes();
  }

  public onNewRecipe(): void {
    // tslint:disable-next-line: no-floating-promises
    this._router.navigate(['new'], {
      relativeTo: this._route
    });
  }


}
