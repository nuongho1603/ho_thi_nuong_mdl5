import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../../../../service/customer.service";
import {Customer} from "../../../model/customer";

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.css']
})
export class CustomerViewComponent implements OnInit {
  customer: Customer;
id:number;
  constructor(private customerService:CustomerService) { }

  ngOnInit(): void {
    this.getViewCus(this.id);
  }

  getViewCus(id:number){
    return this.customerService.getViewCus(id).subscribe(data=>{
      this.customer=data;
    });
  }
}
