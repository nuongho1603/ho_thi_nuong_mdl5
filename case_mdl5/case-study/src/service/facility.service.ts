import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Facility} from "../app/model/facility";

@Injectable({
  providedIn: 'root'
})
export class FacilityService {
URL_FACILITY = "http://localhost:3000/facility";
  constructor(private httpClient:HttpClient) { }

  getAll() {
    return this.httpClient.get<Facility[]>(this.URL_FACILITY);
  }

  updateFacility(facility:Facility){
    return this.httpClient.patch(this.URL_FACILITY+"/"+facility.id,facility);
  }

  findById(id: number) {
    return this.httpClient.get<Facility>(this.URL_FACILITY+"/"+id);
  }

  delete(id:any){
    return this.httpClient.delete<Facility>(this.URL_FACILITY+"/"+id);
  }
}
