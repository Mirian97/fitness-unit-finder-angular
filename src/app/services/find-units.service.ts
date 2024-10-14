import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Location } from '../types/location.type';
import { UnitsResponse } from '../types/units-response.type';

@Injectable({
  providedIn: 'root',
})
export class FindUnitsService {
  readonly API_URL =
    'https://test-frontend-developer.s3.amazonaws.com/data/locations.json';

  allUnitsSubject: BehaviorSubject<Location[]> = new BehaviorSubject<
    Location[]
  >([]);
  allUnits$: Observable<Location[]> = this.allUnitsSubject.asObservable();
  filteredUnits: Location[] = [];

  constructor(private httpClient: HttpClient) {
    this.httpClient
      .get<UnitsResponse>(this.API_URL)
      .subscribe(({ locations }) => {
        this.allUnitsSubject.next(locations);
        this.filteredUnits = locations;
      });
  }

  getAllUnits(): Observable<Location[]> {
    return this.allUnits$;
  }

  getFilteredUnits(): Location[] {
    return this.filteredUnits;
  }

  setFilteredUnits(filteredUnits: Location[]) {
    this.filteredUnits = filteredUnits;
  }
}
