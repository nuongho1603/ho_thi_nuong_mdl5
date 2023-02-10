import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {ProductService} from "../../service/product.service";
import {CategoryService} from "../../service/category.service";
import {Category} from "../../model/category";
import {Product} from "../../model/product";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
category: Category[] = [];
  productForm: FormGroup;
  product: Product;
  id: number;


  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService,private categoryService:CategoryService,private  router:Router) {
    this.activatedRoute.paramMap.subscribe((paramMap:ParamMap) =>{
      this.id = +paramMap.get('id');
      this.getProduct(this.id);
    })
  }

  ngOnInit(): void {
    return this.getAllCategory();
  }
 compareFN(item1, item2) {
    return item1 && item2 ? item1.id === item2.id : item1 === item2;
 }

  updateProduct(id: number) {
    const product = this.productForm.value;
    // console.log(product);
    // debugger
    this.categoryService.findById(product.category.id).subscribe(category =>{
      product.category= {
        id: product.category
      }
    })
    // debugger
    this.productService.updateProduct(id, product).subscribe(() => {
      console.log(product);
      alert('Cập nhật thành công');
      this.router.navigateByUrl("/");

    });
  }

  private getProduct(id: number) {
    return this.productService.findById(id).subscribe(product =>{
      console.log(product);
      this.product = product;
      this.productForm = new FormGroup({
        name : new FormControl(product.name),
        price: new FormControl(product.price),
        description: new FormControl(product.description),
        category: new FormControl(product.category)
      })
    })
  }

  getAllCategory(){
    this.categoryService.getAll().subscribe(category=>{
      this.category = category;
    });
  }
}
