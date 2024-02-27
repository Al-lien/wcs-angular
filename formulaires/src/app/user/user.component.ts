import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  newUser!: User;

  username = new FormControl('');
  email = new FormControl('');
  password = new FormControl('');
  street = new FormControl('');
  postcode = new FormControl('');
  city = new FormControl('');

  onSubmitForm() {
    this.newUser = {
      username: this.username.value,
      email: this.email.value,
      password: this.password.value,
      address: {
        street: this.street.value,
        postalCode: this.postcode.value,
        city: this.city.value,
      },
    };

    console.log(this.newUser);
  }
}
