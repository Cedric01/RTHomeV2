import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environtment';
import { PriceRange } from '../models/pricerange';

@Injectable({ providedIn: 'root' })
export class PriceRangeService {
  private readonly baseUrl = `${environment.apiUrl}/priceranges`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<PriceRange[]> {
    return this.http.get<PriceRange[]>(this.baseUrl);
  }
}
