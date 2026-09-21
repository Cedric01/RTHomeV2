import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EstimateRequest } from '../models/estimate-request';
import { environment } from '../../environtment';

@Injectable({ providedIn: 'root' })
export class EstimateRequestService {
  private baseUrl = `${environment.apiUrl}/estimaterequests`;

  constructor(private http: HttpClient) {}

  submit(request: EstimateRequest): Observable<EstimateRequest> {
    return this.http.post<EstimateRequest>(this.baseUrl, request);
  }
}
