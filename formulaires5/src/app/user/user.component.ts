import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { emailValidator } from '../validators/email-validator';

interface User {
  username: string | null;
  email: string | null;
  password: string | null;
  address: {
    street: string | null;
    postcode: number | null;
    city: string | null;
  };
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  newUser!: User;

  constructor(private fb: FormBuilder) {}

  userForm = this.fb.group({
    username: [''],
    credentials: this.fb.group({
      email: ['', [emailValidator]],
      password: [''],
    }),
    address: this.fb.group({
      street: [''],
      postcode: [],
      city: [''],
    }),
  });

  setUser() {
    console.log(this.userForm.value);
  }

  get email() {
    return this.userForm.get('credentials.email');
  }
}
