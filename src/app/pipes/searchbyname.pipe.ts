import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../model/product';

@Pipe({
  name: 'searchbyname'
})
export class SearchbynamePipe implements PipeTransform {

  transform(value: Product[], name: string): Product[] {
    console.log(value,name);
    
    return value.filter((produit)=>{
      if(produit.name.includes(name))return produit;
    else return null 
  });
  }
  }


