import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';

interface ISignUpData {
  email: string;
  password: string;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    private _authService: AuthService
  ) {
  }

  public ngOnInit(): void {
  }

  public onSignUp(form: NgForm): void {
    const email: string = (<ISignUpData> form.value).email;
    const password: string = (<ISignUpData> form.value).password;

    this._authService.signUpUser(email, password);
  }

}
