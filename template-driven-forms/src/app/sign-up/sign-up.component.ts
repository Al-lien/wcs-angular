import { Component } from '@angular/core';
import { User } from '../user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {
  model: User = new User('', '', '', '');

  onSubmit(myForm: NgForm) {
    if (myForm.status === 'VALID') {
      console.log(this.model);
    } else {
      console.log('You fucked up ...');
    }
  }
}
