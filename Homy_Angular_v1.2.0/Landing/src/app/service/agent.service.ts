import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Agent } from "../models/agent";
import { environment } from "../../environtment";

@Injectable({ providedIn: 'root' })
export class AgentService {
    private baseUrl = `${environment.apiUrl}/agents`;

    constructor(private http: HttpClient) {}

    getAll(): Observable<Agent[]> {
        return this.http.get<Agent[]>(this.baseUrl);
    }

    getById(id: number): Observable<Agent> {
        return this.http.get<Agent>(`${this.baseUrl}/${id}`);
    }
}
