import { Injectable } from '@angular/core';
import { AuthService as Auth0Service } from '@auth0/auth0-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const ROLES_CLAIM = 'https://homy-api/roles';

@Injectable({ providedIn: 'root' })
export class AuthService {
  get isLoading$(): Observable<boolean> {
    return this.auth0.isLoading$;
  }

  get isLoggedIn$(): Observable<boolean> {
    return this.auth0.isAuthenticated$;
  }

  get user$() {
    return this.auth0.user$;
  }

  get isAgent$(): Observable<boolean> {
    return this.auth0.user$.pipe(
      map(user => {
        const roles = (user?.[ROLES_CLAIM] as string[]) ?? [];
        return roles.includes('agent');
      })
    );
  }

  constructor(private auth0: Auth0Service) {}

  login(loginHint?: string): void {
    this.auth0.loginWithRedirect({
      authorizationParams: loginHint ? { login_hint: loginHint } : undefined
    });
  }

  register(): void {
    this.auth0.loginWithRedirect({
      authorizationParams: { screen_hint: 'signup' }
    });
  }

  logout(): void {
    this.auth0.logout({ logoutParams: { returnTo: window.location.origin } });
  }
}