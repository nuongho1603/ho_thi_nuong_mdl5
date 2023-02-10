import { Component, OnInit } from '@angular/core';
import {Product} from "../../model/product";
import {ProductService} from "../../service/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[];
  temp: Product ={};

  constructor(private productService: ProductService,private router:Router) {
    // this.productService.getAll().subscribe(next => {
    //   console.log(next);
    //   this.products = next;
    // })
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.productService.getAll().subscribe(next =>{
      this.products=next;
    })
  }
  delete(idDelete: number) {
    if (idDelete != null) {
      return this.productService.delete(this.temp.id).subscribe(data => {
        alert('Xoa thanh cong');
        // this.productService.getAll();
      //   this.productService.getAll().subscribe(next => {
      //     console.log(next);
      //     this.products = next;
      //
      // })
        this.getAll();
    })}
    // delete(id: number) {
    //   this.productService.delete(id).subscribe(next=>{
    //     alert("Xoa thanh cong");
    //   });
    // }
  }
}
