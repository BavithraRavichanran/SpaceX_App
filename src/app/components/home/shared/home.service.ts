import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {IData } from 'src/app/shared/model/IData';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  public apiUrl = `https://api.spaceXdata.com/v3/launches?limit=100`;
  constructor(private http: HttpClient) { }

  public getAllSpaceXDetails(): Observable<IData> {
    return this.http.get<IData>(this.apiUrl);
  }
  public getYear(year, launch, land) {
    let apiUrl = `https://api.spaceXdata.com/v3/launches?limit=100`
       if(year){
    apiUrl = apiUrl + `&launch_year=${year}`
    } if(launch){
      apiUrl = apiUrl +  `&launch_success=${launch}`;
    } if(land){
      apiUrl = apiUrl + `&land_success=${land}`;
    }
    return this.http.get<IData>(apiUrl);

  }
}
