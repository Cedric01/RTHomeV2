import { HttpClient } from "@angular/common/http";
import { Injectable, Inject, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser } from '@angular/common';
import { Observable } from "rxjs";
import { Property } from "../models/property";

@Injectable({ providedIn: 'root' })
export class PropertyService {
  private baseUrl: string;

  constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      const host = window.location.host;
      this.baseUrl = host.includes('azurestaticapps') ? 'https://rthomepropertymanagement-fze4g3hbd8e6avby.uksouth-01.azurewebsites.net/api/properties' : 'https://localhost:7213/api/properties';
    } else {
      this.baseUrl = 'https://localhost:7213/api/properties';
    }
  }

  getAll(): Observable<Property[]> {
    return this.http.get<Property[]>(this.baseUrl);
  }

  getById(id: number): Observable<Property> {
    return this.http.get<Property>(`${this.baseUrl}/${id}`);
  }

  create(property: Property): Observable<Property> {
    return this.http.post<Property>(this.baseUrl, property);
  }

  update(id: number, property: Property): Observable<Property> {
    return this.http.put<Property>(`${this.baseUrl}/${id}`, property);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
