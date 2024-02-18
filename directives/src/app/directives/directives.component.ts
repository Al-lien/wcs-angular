import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.scss',
})
export class DirectivesComponent {
  isAdmin: boolean = true;

  toggleIsAdmin() {
    this.isAdmin = !this.isAdmin;
  }
}
