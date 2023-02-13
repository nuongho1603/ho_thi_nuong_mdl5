import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Customer} from "../app/model/customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  URL_CUS = "http://localhost:3000/customers";

  constructor(private httpClient: HttpClient) {
  }

  getAll() {
    return this.httpClient.get<Customer[]>(this.URL_CUS);
  }

  findById(id: number) {
    return this.httpClient.get<Customer>(this.URL_CUS + "/" + id);
  }

  updateCus(customer :Customer){
    return this.httpClient.patch(this.URL_CUS +"/" + customer.id,customer);
  }

  delete(id:any){
    return this.httpClient.delete<Customer>(this.URL_CUS+"/"+id);
  }

  createCus(event:any){
    return this.httpClient.post(this.URL_CUS,event);
  }
}
