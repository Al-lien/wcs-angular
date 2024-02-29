import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user.service';

export const isConnectedGuard: CanActivateFn = (route, state) => {
  const log = inject(UserService);
  const router = inject(Router);

  if (log.login() === false) {
    router.navigateByUrl('/home');
    return false;
  }

  if (log.login()) {
    return (log.setRole() === 'USER' || log.setRole() === 'ADMIN') && true;
  }

  return false;
};
