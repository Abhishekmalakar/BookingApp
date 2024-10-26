import { importProvidersFrom, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Iproperty } from '../property/IProperty.interface';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  constructor(private http: HttpClient) {}
  getAllProperties() {
    return this.http.get('/data/properties.json').pipe(
      map((data: any) => {
        const propertiesArray: Array<Iproperty> = [];
        for (const id in data) {
          if (data.hasOwnProperty(id)) {
            propertiesArray.push(data[id]);
          }
        }
        return propertiesArray;
      })
    );
  }
}
