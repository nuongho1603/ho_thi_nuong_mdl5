import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CustomerType} from "../../../model/customer-type";
import {CustomerService} from "../../../../service/customer.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Customer} from "../../../model/customer";
import {CustomerTypeService} from "../../../../service/customer-type.service";
import {THIS_EXPR} from "@angular/compiler/src/output/output_ast";

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  customerForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    dateOfBirth: new FormControl(),
    gender: new FormControl(),
    idCard: new FormControl(),
    phoneNumber: new FormControl(),
    email: new FormControl(),
    address: new FormControl(),
    customerType: new FormControl()
  });
  customerType: CustomerType[] = [];
  customer: Customer = {};


  constructor(private customerService: CustomerService, private customerTypeService: CustomerTypeService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.paramMap.subscribe(data => {
      const id = data.get('id');
      if (id != null) {
        this.customerService.findById(parseInt(id)).subscribe(data => {
          this.customer = data;
          this.customerForm.patchValue(this.customer);
        })
      }
    })
  }

  ngOnInit(): void {
    this.customerTypeService.getAll().subscribe(data => {
      this.customerType = data;
    })
  }

  updateCus() {
    const customer = this.customerForm.value;
    this.customerService.updateCus(customer).subscribe(data => {
      alert("successful update.");
      this.router.navigateByUrl("/customer");
      this.ngOnInit();
    })
  }
  compareFn(o1:CustomerType,o2:CustomerType){
    return o1 && o2 ? o1.id===o2.id : o1===o2;
  }
}
