import { CanActivateFn, Route, Router } from '@angular/router';
import { LoginService, } from './login.service';
import { LoginComponent } from './login/login.component';
import { inject } from '@angular/core';

export const loginGuard: CanActivateFn = (route, state) => {
  const LoginService: LoginService = inject(LoginService);
  const router: Router = inject(Router);

  if (LoginService.loginOK()) {
    return true;

  }
  else {
    router.navigateByUrl('/login');
    return false;

  }
};
