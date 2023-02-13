import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RentType} from "../app/model/rent-type";

@Injectable({
  providedIn: 'root'
})
export class RentTypeService {
  URL_RENTTYPE = "http://localhost:3000/rentType";
  constructor(private httpClient:HttpClient) { }

  getAll(){
    return this.httpClient.get<RentType[]>(this.URL_RENTTYPE);
  }
}
