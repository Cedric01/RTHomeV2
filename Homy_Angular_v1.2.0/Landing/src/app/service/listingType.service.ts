import { HttpClient } from "@angular/common/http";
import { Injectable, Inject, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser } from '@angular/common';
import { map, Observable } from "rxjs";
import { SelectOptionListing } from "../models/selectoptionlisting";

@Injectable({
  providedIn: 'root'
})
export class ListingTypeService {

    private baseUrl: string;

    constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId: Object) {
        if (isPlatformBrowser(this.platformId)) {
            const host = window.location.host;
            this.baseUrl = host.includes('azurestaticapps') ? 'https://rthomepropertymanagement-fze4g3hbd8e6avby.uksouth-01.azurewebsites.net/api/listingtypes' : 'https://localhost:7213/api/listingtypes';
        } else {
            this.baseUrl = 'https://localhost:7213/api/listingtypes';
        }
    }

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
