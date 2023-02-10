import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Category} from "../model/category";
import {Product} from "../model/product";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
// category: Category[]=[];
  constructor(private httpClient:HttpClient) { }

  getAll() {
    return this.httpClient.get<Category[]>("http://localhost:3000/category");
  }

  findById(id: number) {
    return this.httpClient.get<Category>("http://localhost:3000/category/" +id);
  }
}
