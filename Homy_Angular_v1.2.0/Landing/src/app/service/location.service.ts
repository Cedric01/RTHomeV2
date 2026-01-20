import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Property } from "../models/property";
import { environment } from "../../environtment";

@Injectable({ providedIn: 'root' })
export class LocationService {
    private readonly baseUrl = `${environment.apiUrl}/locations`;

    constructor(private http: HttpClient) {}

    getAll(): Observable<Location[]> {
        return this.http.get<Location[]>(this.baseUrl);
    }
}