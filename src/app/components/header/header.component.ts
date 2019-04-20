import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { StorageService } from 'src/app/services/storage/storage.service';

import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(
    private _storageService: StorageService,
    public authService: AuthService
  ) {}

  public ngOnInit(): void {
  }

  public onSaveData(): void {
    this._storageService.storeRecipes()
      .subscribe((response: Response) => {
         console.log(response);
      });
  }

  public onFetch(): void {
    this._storageService.getRecipes();
  }

  public onLogout(): void {
    this.authService.logout();
  }
}
