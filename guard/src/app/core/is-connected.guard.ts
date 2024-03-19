import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user.service';

export const isConnectedGuard: CanActivateFn = (route, state) => {
  const user = inject(UserService);
  const router = inject(Router);

  if (user.isLogin() || user.getRole() === 'ADMIN') {
    return true;
  }

  router.navigateByUrl('/home');
  return false;
};
