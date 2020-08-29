import { Component, OnInit } from '@angular/core';
import { HomeService } from './shared/home.service';

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
public data = 20;
public missionArr = [];
  constructor(private homeservice: HomeService) { }

  ngOnInit(): void {
    this.getAllSpaceXDetails();
  }
  public getAllSpaceXDetails() {
    this.homeservice.getAllSpaceXDetails().subscribe(res => {
      this.allSpaceDetails = res;
      this.pushInitialData();
    }, err => console.log(err));

  }
  public getFiltered(year, launch,land){
    if(year) this.selectedYear = year;
    if(land) this.selectedLand=land;
    if(launch) this.selectedLaunch = launch;    
    this.homeservice.getYear(this.selectedYear, this.selectedLaunch,this.selectedLand).subscribe(res => {
      this.allSpaceDetails = res;
      this.pushInitialData();
   
    }, err => console.log(err));
  }
 public pushInitialData() {
    this.data = 20;
    if (this.data > this.allSpaceDetails.length) {
      this.data = this.allSpaceDetails.length;
    }
    this.missionArr = [];
    this.missionArr = this.allSpaceDetails.slice(0, this.data);
    console.log(this.missionArr)

  }
 public onScroll() {
    const start = this.data;
    this.data += 20;
    if (this.data > this.allSpaceDetails.length) {
      return;
    }
    this.appendItems(start, this.data);
  }
 public appendItems(startIndex, count) {
    this.missionArr = [...this.missionArr, ...this.allSpaceDetails.slice(startIndex, count)];
    console.log(this.missionArr)
  }
  public onUp(){

  }
}

  