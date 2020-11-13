import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthData } from '../auth-data.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('form') form: NgForm;
  errorMessage: string;
  isLoading = false;

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (!this.form.valid) {
      console.log('Login form is not valid.');
      return;
    }

    this.isLoading = true;
    this.errorMessage = null;

    const authData: AuthData = {
      email: this.form.value.email,
      password: this.form.value.password,
      returnSecureToken: true
    }

    this.authService.login(authData).subscribe(
      () => {
        this.isLoading = false;
        this.router.navigate(['/products']);
      },
      (error: Error) => {
        console.log('Login failed.');
        console.log('Error:', error);
        this.isLoading = false;

        this.errorMessage = error.message;
        window.setTimeout(() => {
          this.errorMessage = null;
        }, 4000);
      }
    );
  }

}
