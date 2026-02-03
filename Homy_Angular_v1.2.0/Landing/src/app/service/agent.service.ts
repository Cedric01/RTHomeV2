import { HttpClient } from "@angular/common/http";
import { Injectable, Inject, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser } from '@angular/common';
import { Observable } from "rxjs";
import { Property } from "../models/property";

@Injectable({ providedIn: 'root' })
export class AgentService {
    private baseUrl: string;

    constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId: Object) {
        if (isPlatformBrowser(this.platformId)) {
            const host = window.location.host;
            this.baseUrl = host.includes('azurestaticapps') ? 'https://orange-rock-0f996da0f-1.eastus2.2.azurestaticapps.net/agents' : 'https://localhost:7213/api/agents';
        } else {
            this.baseUrl = 'https://localhost:7213/api/agents';
        }
    }

    getAll(): Observable<any[]> {
        return this.http.get<any[]>(this.baseUrl);
    }
}