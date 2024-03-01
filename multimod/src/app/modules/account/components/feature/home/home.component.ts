import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../../../shared/user.service';
import { User } from '../../../../../models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  user!: User | undefined;
  randomId: number = Math.floor(Math.random() * 5);
  showButton: boolean = false;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.userService
      .getUsersById(this.randomId)
      .subscribe((user: User | undefined) => {
        this.user = user;
      });
  }
}
