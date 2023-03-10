import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  number1:number=0;
  number2:number=0;
  calculator:string="";
  result:number=0;

  constructor() { }

  ngOnInit(): void {
  }

  calculate(){
    switch (this.calculator){
      case "+":
        this.result= this.number1+this.number2;
        break;
      case "-":
        this.result= this.number1-this.number2;
        break;
      case "*":
        this.result= this.number1*this.number2;
        break;
      case "/":
        this.result= this.number1/this.number2;
        break;
      default:
        return 0;
    }
  }
}
