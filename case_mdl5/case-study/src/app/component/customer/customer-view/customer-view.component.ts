import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../../../../service/customer.service";
import {Customer} from "../../../model/customer";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.css']
})
export class CustomerViewComponent implements OnInit {
  customer: Customer;
id:number;
  constructor(private customerService:CustomerService,private activatedRoute:ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(data=>{
      const id=data.get('id');
      if (id!=null){
        this.customerService.findById(parseInt(id)).subscribe(data=>{
          this.customer = data;
        })
      }
    })
  }

  ngOnInit(): void {

  }

  // getViewCus(id:number){
  //   return this.customerService.getViewCus(id).subscribe(data=>{
  //     this.customer=data;
  //   });
  // }
}
