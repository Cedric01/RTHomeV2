import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PriceRange } from '../models/pricerange';
import { environment } from '../../environtment';

@Injectable({ providedIn: 'root' })
export class PriceRangeService {
  private baseUrl = `${environment.apiUrl}/priceranges`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<PriceRange[]> {
    return this.http.get<PriceRange[]>(this.baseUrl);
  }
}
