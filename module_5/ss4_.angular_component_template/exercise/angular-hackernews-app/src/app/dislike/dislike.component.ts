import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dislike',
  templateUrl: './dislike.component.html',
  styleUrls: ['./dislike.component.css']
})
export class DislikeComponent implements OnInit {
dislike = 0;
  constructor() { }

  ngOnInit(): void {
  }

  dislikeThis() {
    this.dislike++;
  }
}
