import { Component, OnInit } from '@angular/core';
import {Facility} from "../../model/facility";

@Component({
  selector: 'app-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {
  facilityList: Facility[] = [
    {id:1,name:"d",area:20,numberOfFloors:2,maxPeople:2,cost:20,rentType: {id:1,name:"s"},status:"sd"},
    {id:2,name:"dd",area:20,numberOfFloors:2,maxPeople:2,cost:20,rentType: {id:1,name:"s"},status:"sd"}
  ];
  facility: string;

  constructor() { }

  ngOnInit(): void {
  }

}
