import { CanActivateFn } from '@angular/router';

export const logoutGuard: CanActivateFn = (route, state) => {
  return true;
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