import { Injectable } from '@angular/core';

import {BenhNhan} from '../model/benh-nhan';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BenhNhanService {
  URL_BENH_AN = 'http://localhost:3000/benhNhan' ;
  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get<BenhNhan[]>(this.URL_BENH_AN);
  }
}
