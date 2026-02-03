import { HttpClient } from "@angular/common/http";
import { Injectable, Inject, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser } from '@angular/common';
import { Observable } from "rxjs";
import { Property } from "../models/property";
import { Location } from "../models/location";

@Injectable({ providedIn: 'root' })
export class LocationService {
    private baseUrl: string;

    constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId: Object) {
        if (isPlatformBrowser(this.platformId)) {
            const host = window.location.host;
            this.baseUrl = host.includes('azurestaticapps') ? 'https://rthomepropertymanagement-fze4g3hbd8e6avby.uksouth-01.azurewebsites.net/api/getlocations' : 'https://localhost:7213/api/getlocations';
        } else {
            this.baseUrl = 'https://localhost:7213/api/getlocations';
        }
    }

    getAll(): Observable<Location[]> {
        return this.http.get<Location[]>(this.baseUrl);
    }
}