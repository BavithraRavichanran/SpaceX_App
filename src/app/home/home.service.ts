import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }
  public getAllSpaceXDetails(): Observable<any> {
    const apiUrl = `https://api.spaceXdata.com/v3/launches?limit=100`;
    return this.http.get<any>(apiUrl);
  }
public getYear(year){
  const apiUrl = `https://api.spaceXdata.com/v3/launches?limit=100&launch_year=${year}`;
  return this.http.get<any>(apiUrl);

}
public getSuccessLaunch(e){
  const apiUrl = `https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${e}`;
  return this.http.get<any>(apiUrl);
}
public getSuccessLand(e){
  const apiUrl = `https://api.spaceXdata.com/v3/launches?limit=100&land_success=${e}`;
  return this.http.get<any>(apiUrl);
}
}
