import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CustomerType} from "../app/model/customer-type";

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {
URL_CUSTYPE ="http://localhost:3000/customerType";
  constructor(private httpClient:HttpClient) { }

  getAll(){
    return this.httpClient.get<CustomerType[]>(this.URL_CUSTYPE);
  }
}
