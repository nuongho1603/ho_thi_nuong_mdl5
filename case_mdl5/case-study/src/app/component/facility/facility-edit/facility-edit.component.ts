import {Component, OnInit} from '@angular/core';
import {RentType} from "../../../model/rent-type";
import {Facility} from "../../../model/facility";
import {FacilityService} from "../../../../service/facility.service";
import {RentTypeService} from "../../../../service/rent-type.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";


@Component({
  selector: 'app-facility-edit',
  templateUrl: './facility-edit.component.html',
  styleUrls: ['./facility-edit.component.css']
})
export class FacilityEditComponent implements OnInit {
  facility: Facility = {};
  facilityForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    area: new FormControl(),
    numberOfFloors: new FormControl(),
    maxPeople: new FormControl(),
    cost: new FormControl(),
    price: new FormControl(),
    rentType: new FormControl(),
    status: new FormControl(),
  });
  rentType: RentType[] = [];
  id: number;


  constructor(private facilityService: FacilityService, private rentTypeService: RentTypeService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.paramMap.subscribe(data => {
      const id = data.get('id');
      if (id != null) {
        this.facilityService.findById(parseInt(id)).subscribe(data => {
          this.facility = data;
          this.facilityForm.patchValue(this.facility);
        });
      }
    })
  }

  ngOnInit(): void {
    this.rentTypeService.getAll().subscribe(data => {
      this.rentType = data;
    })
  }


  updateFacility() {
    const facility = this.facilityForm.value;
    this.facilityService.updateFacility(facility).subscribe(data => {
      console.log(data);
      //   this.facility = data;
      alert("successful update");
      this.router.navigateByUrl("/facility");
    })
  }

  compareFn(o1: RentType, o2: RentType) {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  }
}
