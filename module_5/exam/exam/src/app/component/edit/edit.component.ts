import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {BenhAn} from '../../model/benh-an';
import {BenhAnService} from '../../service/benh-an.service';
import {BenhNhanService} from '../../service/benh-nhan.service';
import {ActivatedRoute, Router} from '@angular/router';
import {BenhNhan} from '../../model/benh-nhan';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  benhVien: FormGroup = new FormGroup({
    id: new FormControl(),
    maBenhAn: new FormControl(),
    benhNhan: new FormControl(),
    ngayNhapVien: new FormControl(),
    ngayRaVien: new FormControl(),
    lyDo: new FormControl(),
    phuongPhap: new FormControl(),
    bacSiDieuTri: new FormControl(),
  });
  benhAn: BenhAn = {};
  benhNhan: BenhNhan[] = [];

  // tslint:disable-next-line:max-line-length
  constructor(private benhAnService: BenhAnService, private benhNhanService: BenhNhanService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.paramMap.subscribe(data => {
      const id = data.get('id');
      if (id != null) {
        // tslint:disable-next-line:radix
        this.benhAnService.findById(parseInt(id)).subscribe( next => {
          // console.log(data);
          this.benhAn = next;
          this.benhVien.patchValue(this.benhAn);
        });
      }
    });
  }

  ngOnInit(): void {
    this.benhNhanService.getAll().subscribe(next => {
      this.benhNhan = next;
    });
  }

  update() {
    const benhAn = this.benhVien.value;
    this.benhAnService.update(benhAn).subscribe(next => {
      alert(' Sửa thành công! ');
      this.router.navigateByUrl('/benhAn');
    });
  }

  compareFn(o1: BenhNhan, o2: BenhNhan) {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  }
}
