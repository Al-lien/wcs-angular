import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user.service';

export const isAdminGuard: CanActivateFn = (route, state) => {
  const admin = inject(UserService);
  const router = inject(Router);

  if (admin.getRole() !== 'ADMIN') {
    router.navigateByUrl('/home');
    return false;
  }

  return true;
};
