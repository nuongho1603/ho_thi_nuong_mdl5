import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Facility} from "../model/facility";

@Injectable({
  providedIn: 'root'
})
export class FacilityService {
URL_FACILITY="  http://localhost:3000/facilitys";
  constructor(private httpClient:HttpClient) { }

  getAll(){
return this.httpClient.get<Facility[]>(this.URL_FACILITY);
  }
}
