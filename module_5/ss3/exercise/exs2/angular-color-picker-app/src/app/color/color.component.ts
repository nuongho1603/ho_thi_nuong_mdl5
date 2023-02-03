import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  background: any;
  color: any;

  constructor() { }

  ngOnInit(): void {
  }

  changeColor(targetElement: any) {
    this.color = targetElement;
  }

  changeColorBr(targetElement: any) {
    this.background = targetElement;
  }
}
