import { Component, OnInit } from '@angular/core';
import {BenhAn} from '../../model/benh-an';
import {BenhAnService} from '../../service/benh-an.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  benhAn: BenhAn[] = [];
  temp: BenhAn = {};

  constructor(private benhAnService: BenhAnService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.benhAnService.getAll().subscribe(data => {
      this.benhAn = data;
    });
  }

  delete(id: number) {
    if (id != null) {
      this.benhAnService.delete(id).subscribe(data => {
        alert('Bạn đã xóa thành công!Chúc mừng. ');
        this.ngOnInit();
      });
    }
  }
}
