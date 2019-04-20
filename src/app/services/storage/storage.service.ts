import { Observable } from 'rxjs';
import { Recipe } from 'src/app/models/recipe.model';
import { AuthService } from 'src/app/services/auth/auth.service';

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { RecipeService } from '../recipe/recipe.service';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _url: string = 'https://ng-recipe-name.firebaseio.com/ng-recipe-name.json';

  constructor(
    private _http: Http,
    private _recipeService: RecipeService,
    private _authService: AuthService
  ) { }

  public storeRecipes(): Observable<Response> {
    return this._http.put(this._url, this._recipeService.getRecipes());
  }

  public getRecipes(): void {
    const token: string = this._authService.getToken();

    this._http.get(`${this._url}?auth=${token}`)
      .subscribe((response: Response) => { // tslint:disable-line deprecation
        const recipes: Recipe[] = <Recipe[]> response.json();

        this._recipeService.setRecipes(recipes);

        return response;
      });
  }
}
