import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  submitted: boolean = false;

  userForm = this.fb.group({
    username: [''],
    credentials: this.fb.group({
      email: [''],
      password: [''],
    }),
    address: this.fb.group({
      street: [''],
      city: [''],
      zipCode: [''],
    }),
  });

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    console.log(this.userForm.value);
    this.submitted = true;
  }
}
