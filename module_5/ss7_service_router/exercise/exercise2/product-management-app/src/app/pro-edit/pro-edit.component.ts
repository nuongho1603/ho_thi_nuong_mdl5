import {Component, OnInit} from '@angular/core';
import {Product} from "../model/product";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {ProductService} from "../service/product.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-pro-edit',
  templateUrl: './pro-edit.component.html',
  styleUrls: ['./pro-edit.component.css']
})
export class ProEditComponent implements OnInit {
  // pro?: Product;
  productForm: FormGroup;
  id: number;
  // router : Router;

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService,private router:Router) {
    // this.activatedRoute.paramMap.subscribe(next=>{
    //   const id = next.get("id");
    //   if(id !=null){
    //     this.pro = productService.findById(parseInt(id));
    //     console.log(this.pro);
    //   }
    // })

    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      const product = this.getProduct(this.id);
      this.productForm = new FormGroup({
        id: new FormControl(product.id),
        name: new FormControl(product.name),
        price: new FormControl(product.price),
        description: new FormControl(product.description),
      });
    });
  }

  private getProduct(id: number) {
    return this.productService.findById(id);
  }

  ngOnInit(): void {
  }

  updateProduct(id: number) {
    const pro = this.productForm.value;
    this.productService.updateProduct(id, pro);
    console.log(pro);
// @ts-ignore
    this.router.navigateByUrl("/");
    alert("Cập nhật thành công .Chúc mừng bạn! ")
  }


}
