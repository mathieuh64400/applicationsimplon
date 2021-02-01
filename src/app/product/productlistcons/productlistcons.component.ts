import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from 'src/app/services/productservice.service';

@Component({
  selector: 'app-productlistcons',
  templateUrl: './productlistcons.component.html',
  styleUrls: ['./productlistcons.component.css']
})
export class ProductlistconsComponent implements OnInit {

  constructor(public serv:ProductserviceService) { }
  products:any;
  ngOnInit(): void {
    this.products=this.serv.getProduct()
  }
  getcolor(){
    if (this.products.quantity < 5) {
     return 'red'
    } else {return 'black'}
    }
}
