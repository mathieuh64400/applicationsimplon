import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  message:any ;
  data:any;
    constructor() {
      this.message={
        titre:"Simplon's Drink",
        soustitre:"Bienvenue sur l'application de gestion du stock de café."
      }
      this.data={
        titre:"Boisson",
        description:"Plus de Sucre",
        nom:"Joe Doe",
        date:"05/01/2021"
      }
     }
  ngOnInit(): void {
  }

}
