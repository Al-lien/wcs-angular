import { Component } from '@angular/core';
import { UserService } from '../../../../shared/user.service';
import { User } from '../../../../models/user.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrl: './single-user.component.scss',
})
export class SingleUserComponent {
  user!: User | undefined;
  showButton: boolean = false;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const username = this.route.snapshot.params['username'];
    console.log(username);
    this.userService
      .getUsersByUsername(username)
      .subscribe((user: User | undefined) => {
        this.user = user;
      });
  }
}
