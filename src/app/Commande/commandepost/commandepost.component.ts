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
  addcommandes:any='';
  constructor( public serv:CommandeserviceService,public toast: ToastrService) { }

  ngOnInit(): void {
  }
  validatePost(addcommande:NgForm){
    console.log("Valeurs récupérées depuis le formualire HTML", addcommande.value);
    this.serv.PostCommande();
    this.toast.success('ajout realisé');
  }
}
