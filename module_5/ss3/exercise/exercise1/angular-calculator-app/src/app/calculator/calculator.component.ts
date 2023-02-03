import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
num1: number=0;
num2: number=0;
choose: string="";
result:any;
  constructor() { }

  ngOnInit(): void {
  }

  calculator(){
    switch (this.choose) {
      case "+":
        return this.result = this.num1+this.num2;
      case "-":
        return this.result = this.num1-this.num2;
      case "*":
        return this.result = this.num1*this.num2;
      case "/":
        if (this.num2==0){
          return this.result= "Mẫu k dc <= 0! OKE ";
        }
        return this.result = this.num1/this.num2;
    }
  }

}
