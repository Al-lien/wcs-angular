import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private role: 'ANONYMOUS' | 'USER' | 'ADMIN' = 'USER';
  private isAuthenticated: boolean = true;

  login(): boolean {
    return this.isAuthenticated;
  }

  setRole(): string {
    return this.role;
  }

  constructor() {}
}
