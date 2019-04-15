import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  private _id: number;
  private _editMode: boolean;

  constructor(
    private _route: ActivatedRoute
  ) { }

  public ngOnInit(): void {
    this._route.params
      .subscribe((params: Params) => {
        this._id = Number(params.id);
        this._editMode = !isNaN(this._id);
      }

      )
  }

}
