import {Injectable} from '@angular/core';
import {Product} from "../model/product";
import {element} from "protractor";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  product: Product[] = [
    {id: 1, name: "Sach", price: 20, description: "Sach giao khoa Toan 12"},
    {id: 2, name: "Sach", price: 21, description: "Sach giao khoa Toan 12"},
    {id: 3, name: "Sach", price: 22, description: "Sach giao khoa Toan 13"},
    {id: 4, name: "Sach", price: 23, description: "Sach giao khoa Toan 2"}
  ]

  constructor() {
  }

  getAll() {
    return this.product;
  }

  findById(id: number) {
    let result = this.product.filter(element => element.id === id);
    return result[0];
  }

  updateProduct(id: number, pro: Product) {
    for (let i = 0; i < this.product.length; i++) {
      if (this.product[i].id == id) {
         this.product[i]=pro ;
      }
    }
  }

  // save(pro){
  //   this.product.push(pro);
  // }

  delete(deleteId: number) {
    for (let i = 0; i <this.product.length ; i++) {
      if(this.product[i].id == deleteId){
        this.product.splice(i,1);
      }
    }
  }
}
