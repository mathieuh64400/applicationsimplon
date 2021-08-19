import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MessagerieService } from 'src/app/services/messagerie.service';

@Component({
  selector: 'app-postdemande',
  templateUrl: './postdemande.component.html',
  styleUrls: ['./postdemande.component.css']
})
export class PostdemandeComponent implements OnInit {
  demande:any;
  constructor(public serv:MessagerieService) {
    this.demande={
      titre:"demande"
     }
   }

  ngOnInit(): void {
  }
  creationMessage(cForm:NgForm){
    console.log("Valeurs récupérées depuis le formualire HTML", cForm.value);
    this.serv.messageCreate();
  }
}
