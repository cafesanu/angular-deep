import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() public recipeItem: Recipe;
  @Output() public readonly recipeSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  public onRecipeSelected(): void {
    this.recipeSelected.emit(this.recipeItem);
  }
}
