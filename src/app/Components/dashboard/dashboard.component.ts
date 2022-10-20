import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/Domain/product';
import { ProductService } from 'src/app/Services/product.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  productData:Product[] = [];                                //initialize product array
  displayedColumns= ['name', 'category', 'price']
  
  constructor(private product: ProductService) {
    this.product.getProducts().subscribe(x=>{ 
      this.productData = x;
      console.log(this.productData);
    } )
   }

  ngOnInit(): void {
  }

}
