import {ShoppingListService} from 'src/app/services/shopping-list/shopping-list.service';
import { Component, ElementRef, OnInit  , ViewChild } from '@angular/core';
import { Ingredient } from './../../models/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') public nameInputRef: ElementRef;
  @ViewChild('amountInput') public amountInputRef: ElementRef;s

  constructor(
    private _shoppingListService: ShoppingListService,
  ) { }

  public ngOnInit(): void {
  }

  public onAddIngredient(): void {
    const name: string = (<HTMLInputElement> this.nameInputRef.nativeElement).value;
    const amount: number = Number((<HTMLInputElement> this.amountInputRef.nativeElement).value);
    const newIngredient: Ingredient = new Ingredient(name, amount);

    this._shoppingListService.addIngredient(newIngredient);
  }

}
