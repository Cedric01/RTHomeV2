import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { Property, PropertySummary } from "../models/property";
import { environment } from "../../environtment";

@Injectable({ providedIn: 'root' })
export class PropertyService {
  private baseUrl = `${environment.apiUrl}/properties`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Property[]> {
    return this.http.get<Property[]>(this.baseUrl);
  }

  /** One page of properties plus the total row count the API reports in X-Total-Count. */
  getPage(page: number, pageSize: number): Observable<{ items: Property[]; total: number }> {
    return this.fetchPage(this.baseUrl, page, pageSize);
  }

  /** Like getPage, but only the signed-in user's own properties. */
  getMyPage(page: number, pageSize: number): Observable<{ items: Property[]; total: number }> {
    return this.fetchPage(`${this.baseUrl}/mine`, page, pageSize);
  }

  getMySummary(): Observable<PropertySummary> {
    return this.http.get<PropertySummary>(`${this.baseUrl}/mine/summary`);
  }

  /** Uploads photos to a property you own. Returns the updated property. */
  uploadImages(id: number, files: File[]): Observable<Property> {
    const body = new FormData();
    files.forEach(file => body.append('files', file, file.name));
    return this.http.post<Property>(`${this.baseUrl}/${id}/images`, body);
  }

  deleteImage(id: number, url: string): Observable<void> {
    const params = new HttpParams().set('url', url);
    return this.http.delete<void>(`${this.baseUrl}/${id}/images`, { params });
  }

  private fetchPage(url: string, page: number, pageSize: number): Observable<{ items: Property[]; total: number }> {
    const params = new HttpParams().set('page', page).set('pageSize', pageSize);
    return this.http.get<Property[]>(url, { params, observe: 'response' }).pipe(
      map(res => {
        const items = res.body ?? [];
        const header = Number(res.headers.get('X-Total-Count'));
        // If the header is missing, fall back to what we know from this page.
        const total = Number.isFinite(header) && header > 0 ? header : (page - 1) * pageSize + items.length;
        return { items, total };
      })
    );
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
