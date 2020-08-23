import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
public allSpaceDetails;
public years = [2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020];
public selectedYear;
public selectedLaunch;
public selectedLand;

  constructor(private homeservice: HomeService) { }

  ngOnInit(): void {
    this.getAllSpaceXDetails();
  }
  public getAllSpaceXDetails() {
    this.homeservice.getAllSpaceXDetails().subscribe(data => {
      this.allSpaceDetails = data;
      
    }, err => console.log(err));

  }
  public getFiltered(year, launch,land){
    if(year) this.selectedYear = year;
    if(land) this.selectedLand=land;
    if(launch) this.selectedLaunch = launch;    
    this.homeservice.getYear(this.selectedYear, this.selectedLaunch,this.selectedLand).subscribe(data => {
      this.allSpaceDetails = data;
   
    }, err => console.log(err));
  }
}
