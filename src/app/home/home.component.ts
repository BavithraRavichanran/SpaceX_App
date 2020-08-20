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

  constructor(private homeservice: HomeService) { }

  ngOnInit(): void {
    this.getAllSpaceXDetails();
  }
  public getAllSpaceXDetails() {
    this.homeservice.getAllSpaceXDetails().subscribe(data => {
      // this.totalItems = data.length;
      this.allSpaceDetails = data;
      console.log(this.allSpaceDetails);
      
    }, err => console.log(err));

  }
  public getYear(year){
    this.homeservice.getYear(year).subscribe(data => {
      // this.totalItems = data.length;
      this.allSpaceDetails = data;
      console.log(this.allSpaceDetails);
      
    }, err => console.log(err));
  }
  public getSuccessLaunch(e){
    console.log(e);
    
    this.homeservice.getSuccessLaunch(e).subscribe(data => {
      this.allSpaceDetails = data;
      console.log(this.allSpaceDetails);
      
    }, err => console.log(err));
  }
 
  public getSuccessLand(e){
    this.homeservice.getSuccessLand(e).subscribe(data => {
      this.allSpaceDetails = data;
      console.log(this.allSpaceDetails);
      
    }, err => console.log(err));
  }
}
