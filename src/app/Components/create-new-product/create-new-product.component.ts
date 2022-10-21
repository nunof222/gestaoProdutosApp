import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/Domain/product';
import { ProductService } from 'src/app/Services/product.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-create-new-product',
  templateUrl: './create-new-product.component.html',
  styleUrls: ['./create-new-product.component.css']
})
export class CreateNewProductComponent implements OnInit {

  @Input() product: Product = {name:"", category:"", price:0}
   

  constructor(private productsv: ProductService) {
   
    

   }

  ngOnInit(): void {
    
  }
  addProduct(): void {
    this.productsv.addProduct(this.product).subscribe(()=> {
      console.log(this.product)
    });;

   

  };
}

