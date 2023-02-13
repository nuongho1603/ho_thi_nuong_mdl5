import {Component, OnInit} from '@angular/core';
import {Customer} from "../../../model/customer";
import {CustomerService} from "../../../../service/customer.service";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customerList: Customer[] = [];
  temp: Customer={};

  constructor(private  customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.customerService.getAll().subscribe(data => {
      this.customerList = data;
    })
  }

  delete(id: any) {
    if(id!=null){
this.customerService.delete(id).subscribe(data=>{
  this.ngOnInit();
})
    }
  }
}
