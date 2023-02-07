import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Facility} from "../../model/facility";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-facility-edit',
  templateUrl: './facility-edit.component.html',
  styleUrls: ['./facility-edit.component.css']
})
export class FacilityEditComponent implements OnInit {
  facilityForm: FormGroup;
  id:number
  constructor() { }

  ngOnInit(): void {
  }

  updateFacility(id: number) {
const facility = this.facilityForm.value;

  }
}
