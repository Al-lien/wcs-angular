import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private role: 'ANONYMOUS' | 'USER' | 'ADMIN' = 'USER';
  private isAuthenticated: boolean = true;

  isLogin(): boolean {
    if (this.role === 'ANONYMOUS') {
      return (this.isAuthenticated = false);
    }
    return this.isAuthenticated;
  }

  getRole(): 'ANONYMOUS' | 'USER' | 'ADMIN' {
    return this.role;
  }

  constructor() {}
}
