import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BenhAn} from '../model/benh-an';

@Injectable({
  providedIn: 'root'
})
export class BenhAnService {
  URL_BENH_AN = 'http://localhost:3000/benhAn' ;
  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get<BenhAn[]>(this.URL_BENH_AN);
  }

  delete(id: number) {
    return this.httpClient.delete<BenhAn>(this.URL_BENH_AN + '/' + id);
  }

  findById(id: number) {
    return this.httpClient.get<BenhAn>(this.URL_BENH_AN + '/' + id);
  }

  update(benhAn: BenhAn) {
    return this.httpClient.patch(this.URL_BENH_AN + '/' + benhAn.id, benhAn);
  }
}
