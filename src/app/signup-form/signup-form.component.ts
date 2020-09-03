import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserNameValidator } from './username.validator';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {
  form = new FormGroup({
    username: new FormControl('', [Validators.required,Validators.minLength(3),UserNameValidator.cannotContainSpace]),
    password: new FormControl('',Validators.required)
  })
  constructor() { }

  ngOnInit(): void {
  }

  get username() {
    return this.form.get('username');
  }
  get password() {
    return this.form.get('password');
  }
}
