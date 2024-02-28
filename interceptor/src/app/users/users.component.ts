import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit {
  users!: User[];

  constructor(public usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService.getData().subscribe((data) => {
      this.users = data;
    });
  }
}
