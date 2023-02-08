import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormArray, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  reactiveForm: FormGroup;
  constructor() {
    this.reactiveForm = new FormGroup({
      name: new FormControl("", [Validators.required,Validators.minLength(4)]),
      email: new FormControl("", [Validators.required, Validators.pattern("^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\\.[A-Za-z0-9]+)$")]),
      phone: new FormControl("", [Validators.required, Validators.pattern("[0-9]{8,10}")]),
      // gender: new FormArray();
      // country?: string;
      age: new FormControl("", [Validators.required, this.validateAge]),
      password: new FormControl("", [Validators.required, Validators.minLength(6)]),
      confirmPass: new FormControl("", [Validators.required, Validators.minLength(6)])
    })
  }


  get contactFormValue(){
    return this.reactiveForm.controls;
  }
  onPasswordChange() {
    if (this.contactFormValue.confirmPass.value == this.contactFormValue.password.value) {
      this.contactFormValue.confirmPass.setErrors(null);
    } else {
      this.contactFormValue.confirmPass.setErrors({ "mismatch": true });
    }
  }

  validateAge(control :AbstractControl){
    let age = control.value;
    if (age <18){
      return {"invalidAge" :true};
    }
    return null;
  }
  ngOnInit(): void {
  }

  submit() {
    console.log(this.reactiveForm.value);
  }
}
