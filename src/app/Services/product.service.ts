import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { Product } from '../Domain/product';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  private backUrl= 'https://heromasterdata.herokuapp.com/api/product/';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})  // constructs a new HTTP header object which accepts JSON data
  }



  constructor(private http:HttpClient) { }

  getProducts(): Observable<Product[]> {                 // get products method
    return this.http.get<Product[]> (this.backUrl);

  }

  getProduct(id:string): Observable<Product> {   // single product method
    const url = `${this.backUrl}${id}`;
    return this.http.get<Product>(url);
  }

  addProduct(product: Product): Observable<Product> { //create new product
    return this.http.post<Product>(
    this.backUrl, product,
    this.httpOptions);
  }
}

