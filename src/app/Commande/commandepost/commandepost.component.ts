import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CommandeserviceService } from 'src/app/services/commandeservice.service';

@Component({
  selector: 'app-commandepost',
  templateUrl: './commandepost.component.html',
  styleUrls: ['./commandepost.component.css']
})
export class CommandepostComponent implements OnInit {
 
  constructor( public serv:CommandeserviceService,public toast: ToastrService) { }

  ngOnInit(): void {
  }
  commandeProduct(cForm:NgForm){
    console.log("Valeurs récupérées depuis le formualire HTML", cForm.value);
    this.serv.postCommande();
  }
}
