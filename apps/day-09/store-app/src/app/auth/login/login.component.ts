import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('form') form: NgForm;
  errorMessage: string;
  isLoading = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (!this.form.valid) {
      console.log('Login form is not valid.');
      return;
    }

    console.log('Login form submitted.');
    console.log('form:', this.form.value);

    // make a service call

    this.form.reset();
  }

}
