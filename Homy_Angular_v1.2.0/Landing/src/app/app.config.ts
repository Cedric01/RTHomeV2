import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAuth0, authHttpInterceptorFn } from '@auth0/auth0-angular';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { environment } from '../environtment';

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
          // Protected endpoints — attach token, fail if not authenticated.
          // Only the property-mutation endpoints need a token: reads stay public,
          // and the API itself independently enforces the "agent" role on these,
          // this list just controls whether Angular bothers attaching a token.
          {
            uri: `${environment.apiUrl}/properties`,
            httpMethod: 'POST',
            tokenOptions: { authorizationParams: { audience: 'https://homy-api' } }
          },
          {
            uri: `${environment.apiUrl}/properties/*`,
            httpMethod: 'PUT',
            tokenOptions: { authorizationParams: { audience: 'https://homy-api' } }
          },
          {
            uri: `${environment.apiUrl}/properties/*`,
            httpMethod: 'DELETE',
            tokenOptions: { authorizationParams: { audience: 'https://homy-api' } }
          }
        ]
      }
    }),
    provideHttpClient(withInterceptors([authHttpInterceptorFn]))
  ]
};
