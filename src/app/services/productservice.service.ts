import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product, Productclass } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {
  products: Product = new Productclass();

  
  constructor(private Http: HttpClient) { 
    this.productcreate();
  }
  getProduct() {
    return this.Http.get<Product[]>("http://localhost:3000/products");
  }


  productcreate(){
    console.log(this.products);
    this.Http.post('http://localhost:3000/products', this.products).subscribe(
      retour => {
        console.log(retour);
      },
      erreur => console.log(erreur)
    );
  }
  Delete(id: Number) {
    const deleteurl = 'http://localhost:3000/products/' + id
    return this.Http.delete(deleteurl)
  }
}
