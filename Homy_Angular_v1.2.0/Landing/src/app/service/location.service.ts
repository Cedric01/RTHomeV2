import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Location } from "../models/location";
import { environment } from "../../environtment";

@Injectable({ providedIn: 'root' })
export class LocationService {
    private baseUrl = `${environment.apiUrl}/getlocations`;

    constructor(private http: HttpClient) {}

    getAll(): Observable<Location[]> {
        return this.http.get<Location[]>(this.baseUrl);
    }
}
