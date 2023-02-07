import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
  @Input() backgroundColor = '#D9D9D9';
  @Input() progressColor = 'RED';
  @Input() progress = 0;

  constructor() { }

  ngOnInit(): void {
    this.loading();
  }

  loading() {
    let interval = setInterval(() => {
      this.progress = +this.progress + 8;
      if (this.progress == 100) {
        clearInterval(interval);
      }
    }, 1000);
  }
}
