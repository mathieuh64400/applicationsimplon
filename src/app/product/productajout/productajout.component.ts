import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ProductserviceService } from 'src/app/services/productservice.service';

@Component({
  selector: 'app-productajout',
  templateUrl: './productajout.component.html',
  styleUrls: ['./productajout.component.css']
})
export class ProductajoutComponent implements OnInit {

  constructor(public serv: ProductserviceService,public toast: ToastrService) { }
  addprodform:any='';
  ngOnInit(): void {
  }
  validatePost(addprodform:NgForm){
    console.log("Valeurs récupérées depuis le formualire HTML", addprodform.value);
    this.serv.PostProduct();
    this.toast.success('ajout realisé');
  }

}
