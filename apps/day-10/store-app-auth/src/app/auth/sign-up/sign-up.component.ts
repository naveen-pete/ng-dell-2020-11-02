import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  form: FormGroup;
  errorMessage: string;
  isLoading = false;

  constructor() { }

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

    console.log('Sign up form submitted.');
    console.log(this.form.value);

    // make a service call

    this.form.reset();
  }

}
