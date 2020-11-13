import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../auth.service';
import { AuthData } from '../auth-data.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  form: FormGroup;
  errorMessage: string;
  isLoading = false;

  constructor(
    private router: Router,
    private service: AuthService
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl(
        '',
        [Validators.required, Validators.email]
      ),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  get name() {
    return this.form.get('name');
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  onSignUp() {
    if (!this.form.valid) {
      console.log('Sign up form is not valid.');
      return;
    }

    const authData: AuthData = {
      email: this.form.value.email,
      password: this.form.value.password,
      returnSecureToken: true
    };

    this.isLoading = true;
    this.service.signUp(authData).subscribe(
      () => {
        this.router.navigate(['/products']);
        this.isLoading = false;
      },
      (error: Error) => {
        console.log('User sign up failed.');
        console.log('Error:', error);

        this.isLoading = false;

        this.errorMessage = error.message;
        window.setTimeout(() => {
          this.errorMessage = null;
        }, 4000);
      }
    );

    // this.form.reset();
  }

}
