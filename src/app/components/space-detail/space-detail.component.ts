import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-space-detail',
  templateUrl: './space-detail.component.html',
  styleUrls: ['./space-detail.component.css']
})
export class SpaceDetailComponent implements OnInit {
@Input() public data;
  constructor() { }

  ngOnInit(): void {
    console.log(this.data);
    
  }

}
