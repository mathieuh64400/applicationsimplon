import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProductserviceService } from 'src/app/services/productservice.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  constructor(public serv:ProductserviceService,public toast: ToastrService) { }
  products:any;
    ngOnInit(): void {
      this.products=this.serv.getProduct()

}
DeleteProduct(id: number){
  if (confirm("etes-vous sur de vouloir eliminer cet individu de la liste de membres?")) {
    this.serv.Delete(id).subscribe(
      data => {
        console.log(data);
        this.toast.warning(' Delete successfully');
      }

    )
  }
}
}
