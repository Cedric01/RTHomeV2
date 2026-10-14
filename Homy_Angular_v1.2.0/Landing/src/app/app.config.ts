import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAuth0, authHttpInterceptorFn } from '@auth0/auth0-angular';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { environment } from '../environtment';

const tokenOptions = { authorizationParams: { audience: 'https://homy-api' } };

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideAuth0({
      domain: 'dev-cph764nhvpsq8ai2.us.auth0.com',
      clientId: 'o6KeJnoqkZNmmOHd6EO9dTm2BkpAhm9K',
      authorizationParams: {
        redirect_uri: typeof window !== 'undefined' ? window.location.origin : 'http://localhost:4200',
        audience: 'https://homy-api'
      },
      httpInterceptor: {
        allowedList: [
          // Reads stay public, except the signed-in user's own listings.
          { uriMatcher: uri => uri.startsWith(`${environment.apiUrl}/properties/mine`), httpMethod: 'GET', tokenOptions },
          // Everything that changes a property or its photos needs a token:
          // POST /properties, PUT|DELETE /properties/{id}, POST|DELETE /properties/{id}/images.
          // The API independently enforces the agent role and ownership; this just
          // controls whether Angular attaches a token.
          { uriMatcher: uri => uri.startsWith(`${environment.apiUrl}/properties`), httpMethod: 'POST', tokenOptions },
          { uriMatcher: uri => uri.startsWith(`${environment.apiUrl}/properties`), httpMethod: 'PUT', tokenOptions },
          { uriMatcher: uri => uri.startsWith(`${environment.apiUrl}/properties`), httpMethod: 'DELETE', tokenOptions }
        ]
      }
    }),
    provideHttpClient(withInterceptors([authHttpInterceptorFn]))
  ]
};
