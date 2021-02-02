import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product, Productclass } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {
  products: Product = new Productclass();
  constructor(private Http: HttpClient) { 
    this.PostProduct()
  }
  getProduct() {
    return this.Http.get<Product[]>("http://localhost:3000/products");
  }


  PostProduct() {
    const prod = {
      name :"assiette",
      category  : "ustensile",
      description  : "cghzygfyg hjtgyuf yguz",
      NomConsommateur : "Dalton",
      imageUrl  : '',
      quantity  : 10,
      date : new Date(),
      etat: true,
      pseudo: "AE-TR7",
      modif: true
    }
    console.log(this.products);
    this.Http.post('http://localhost:3000/products', prod).subscribe(
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
