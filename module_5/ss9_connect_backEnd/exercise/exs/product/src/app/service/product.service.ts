import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../model/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  getAll(){
return this.httpClient.get<Product[]>("http://localhost:3000/products");}

  findById(id: number) {
return this.httpClient.get<Product>("http://localhost:3000/products/" +id);
  }

  updateProduct(id: number, product: any) {
return this.httpClient.put<Product>("http://localhost:3000/products/"+id,product);
  }

  delete(deleteId: number) {
    return this.httpClient.delete("http://localhost:3000/products/"+ deleteId);
  }
}
