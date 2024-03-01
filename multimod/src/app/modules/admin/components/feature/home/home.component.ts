import { Component, OnInit } from '@angular/core';
import { User } from '../../../../../models/user.model';
import { UserService } from '../../../../../shared/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((userFromJsonFile) => {
      this.users = userFromJsonFile;
    });
  }
}
