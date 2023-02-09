import { Component, OnInit } from '@angular/core';
import {Product} from "../model/product";
import {ProductService} from "../service/product.service";

@Component({
  selector: 'app-pro-management',
  templateUrl: './pro-management.component.html',
  styleUrls: ['./pro-management.component.css']
})
export class ProManagementComponent implements OnInit {
product?: Product[];
deleteId: number;
deleteName: string;
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.getAll();
  }

getAll(){
    this.product =this.productService.getAll();
}

  deleteModal(id: number, name: string) {
    this.deleteId=id;
    this.deleteName=name;
  }

  delete(deleteId: number) {
    this.productService.delete(deleteId);
  }
}
