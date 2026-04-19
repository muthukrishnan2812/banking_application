import { CanActivateFn, Router } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthServiceService);
  const router = inject(Router);
  if(auth.isAuthenticated()){
    return true;
  }else{
    router.navigate(['/']);
    return false;
  }
};
