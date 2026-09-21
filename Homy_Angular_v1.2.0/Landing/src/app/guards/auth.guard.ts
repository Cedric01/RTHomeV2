import { inject } from '@angular/core';
import { CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService as Auth0Service } from '@auth0/auth0-angular';
import { filter, switchMap, tap, map, take, of } from 'rxjs';

const ROLES_CLAIM = 'https://homy-api/roles';

export const authGuard: CanActivateFn = (_route, state: RouterStateSnapshot) => {
  const auth = inject(Auth0Service);
  return auth.isLoading$.pipe(
    filter(loading => !loading),
    take(1),
    switchMap(() => auth.isAuthenticated$),
    tap(isAuthenticated => {
      if (!isAuthenticated) {
        auth.loginWithRedirect({ appState: { target: state.url } });
      }
    }),
    map(isAuthenticated => isAuthenticated)
  );
};

export const agentGuard: CanActivateFn = (_route, state: RouterStateSnapshot) => {
  const auth = inject(Auth0Service);
  const router = inject(Router);
  return auth.isLoading$.pipe(
    filter(loading => !loading),
    take(1),
    switchMap(() => auth.isAuthenticated$),
    switchMap(isAuthenticated => {
      if (!isAuthenticated) {
        auth.loginWithRedirect({ appState: { target: state.url } });
        return of(false);
      }
      return auth.user$.pipe(
        take(1),
        map(user => {
          const roles = (user?.[ROLES_CLAIM] as string[]) ?? [];
          if (roles.includes('agent')) return true;
          router.navigate(['/']);
          return false;
        })
      );
    })
  );
};