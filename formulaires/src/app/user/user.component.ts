import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

interface User {
  username: string | null;
  email: string | null;
  password: string | null;
  address: {
    street: string | null;
    postcode: number | string | null;
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
        postcode: this.postcode.value,
        city: this.city.value,
      },
    };
  }
}
