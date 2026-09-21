import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { SelectOptionListing } from "../models/selectoptionlisting";
import { environment } from "../../environtment";

@Injectable({
  providedIn: 'root'
})
export class ListingTypeService {

    private baseUrl = `${environment.apiUrl}/listingtypes`;

    constructor(private http: HttpClient) {}

  getListingTypes(): Observable<SelectOptionListing[]> {
  return this.http.get<any[]>(this.baseUrl).pipe(
    map(types =>
      types.map(t => ({
        value: t.id,
        label: t.label
      }))
    )
  );
}
}
