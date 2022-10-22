import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/Domain/product';
import { ProductService } from 'src/app/Services/product.service';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from 'src/app/pipes/filter-pipe';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  productData:Product[] = [];                                //initialize product array
  displayedColumns= ['name', 'category', 'price'];
  productFilter="";
  
  constructor(private product: ProductService) {
    this.product.getProducts().subscribe(x=>{ 
      this.productData = x;
      // console.log(this.productData);
    } )
   }

  ngOnInit(): void {
    this.product.getProducts();
  
  }

}
