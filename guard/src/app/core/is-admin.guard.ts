import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user.service';

export const isAdminGuard: CanActivateFn = (route, state) => {
  const log = inject(UserService);
  const router = inject(Router);

  if (log.setRole() === 'ADMIN' && log.login()) {
    return true;
  }

  router.navigateByUrl('/home');
  return false;
};
