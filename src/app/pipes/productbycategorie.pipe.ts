import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../model/product';

@Pipe({
  name: 'productbycategorie'
})
export class ProductbycategoriePipe implements PipeTransform {

  transform(value: Product[], category: string): Product[] {
    console.log(value,category);
    
    return value.filter((prod)=>{
      if(prod.category.includes(category))return prod;
    else return null 
  });
  }

}
