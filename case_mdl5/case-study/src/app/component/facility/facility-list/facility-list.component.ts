import {Component, OnInit} from '@angular/core';
import {Facility} from "../../../model/facility";
import {FacilityService} from "../../../../service/facility.service";

@Component({
  selector: 'app-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {
  facilityList: Facility[] = [];
  fac: Facility ={};

  constructor(private  facilityService: FacilityService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.facilityService.getAll().subscribe(data => {
      this.facilityList = data;
    })
  }

  delete(id: any) {
    if (id != null) {
      this.facilityService.delete(id).subscribe(data => {
        this.ngOnInit();
        alert("successful delete");
      })
    }
  }
}
