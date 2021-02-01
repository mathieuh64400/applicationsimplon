import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product, Productclass } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  constructor(private Http:HttpClient) { }
  getProduct(){
  return  this.Http.get("http://localhost:3000/products");
  }
 products:Product = new Productclass();

  PostProduct(){
    console.log(this.products);
    this.Http.post('http://localhost:3000/products', this.products).subscribe(
      retour => {
        console.log(retour);
      },
      erreur => console.log(erreur)
    );
  
  }
  Delete(id:Number){
    const deleteurl='http://localhost:3000/products/'+id
    return this.Http.delete(deleteurl)
  }
}
