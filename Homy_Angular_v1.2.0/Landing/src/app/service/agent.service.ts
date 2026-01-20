import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Property } from "../models/property";
import { environment } from "../../environtment";

@Injectable({ providedIn: 'root' })
export class AgentService {
    private readonly baseUrl = `${environment.apiUrl}/agents`;

    constructor(private http: HttpClient) {}

    getAll(): Observable<any[]> {
        return this.http.get<any[]>(this.baseUrl);
    }
}