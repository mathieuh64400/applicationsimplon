import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductserviceService } from 'src/app/services/productservice.service';

@Component({
  selector: 'app-productlistcons',
  templateUrl: './productlistcons.component.html',
  styleUrls: ['./productlistcons.component.css']
})
export class ProductlistconsComponent implements OnInit {

  constructor(public serv:ProductserviceService) { }
  
  searchTermproduct:string='';
  products : Product[]=[];
  ngOnInit(): void {
    this.serv.getProduct().subscribe(
      (data)=>{
        console.log('données recup par requete',data);
        this.products=data;
      }
    )
  }
  // getcolor(){
  //   if (this.products.quantity < 5) {
  //     return 'red'
  //    } else {return 'black'}
  // }
  // getcolor(){
  //   if (this.products.quantity < 0.05*products.quantity) {
  //    return 'red'
  //   } else {return 'black'}
  //   }
}
