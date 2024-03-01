import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
})
export class UserCardComponent {
  @Input() id: number = 0;
  @Input() username: string = '';
  @Input() firstname: string = '';
  @Input() lastname: string = '';
  @Input() email: string = '';
  @Input() showButton: boolean = true;

  constructor(private router: Router) {}

  onViewAdmin() {
    this.router.navigateByUrl(`account/home/${this.username}`);
  }
}
