import { HttpClient } from '@angular/common/http';
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Observable } from 'rxjs';
import { PriceRange } from '../models/pricerange';

@Injectable({ providedIn: 'root' })
export class PriceRangeService {
  private baseUrl: string;

  constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      const host = window.location.host;
      this.baseUrl = host.includes('azurestaticapps') ? 'https://rthomepropertymanagement-fze4g3hbd8e6avby.uksouth-01.azurewebsites.net/api/priceranges' : 'https://localhost:7213/api/priceranges';
    } else {
      this.baseUrl = 'https://localhost:7213/api/priceranges';
    }
  }

  getAll(): Observable<PriceRange[]> {
    return this.http.get<PriceRange[]>(this.baseUrl);
  }
}
