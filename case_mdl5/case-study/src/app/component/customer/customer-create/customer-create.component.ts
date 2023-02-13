import {Component, OnInit} from '@angular/core';
import {CustomerType} from "../../../model/customer-type";
import {CustomerService} from "../../../../service/customer.service";
import {Router} from "@angular/router";
import {CustomerTypeService} from "../../../../service/customer-type.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  customerType: CustomerType[] = [];

  customerForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl("", [Validators.required, Validators.pattern("^([\\p{Lu}][\\p{Ll}]{1,8})(\\s([\\p{Lu}]|[\\p{Lu}][\\p{Ll}]{1,10})){0,5}$")]),
    dateOfBirth: new FormControl("", []),
    gender: new FormControl(),
    idCard: new FormControl(),
    phoneNumber: new FormControl(),
    email: new FormControl(),
    address: new FormControl(),
    customerType: new FormControl()
  });

  constructor(private customerService: CustomerService, private customerTypeService: CustomerTypeService, private router: Router) {
    this.customerTypeService.getAll().subscribe(data => {
      this.customerType = data;
    })
  }

  ngOnInit(): void {
  }

  createCus() {
    if (this.customerForm.valid) {
      this.customerForm.value.id = parseInt(this.customerForm.value.id);
      this.customerService.createCus(this.customerForm.value).subscribe(data => {
        alert("successful create customer.")
        this.router.navigateByUrl("/customer");
      })
    }
  }

  compareFn(o1: CustomerType, o2: CustomerType) {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  }
}
