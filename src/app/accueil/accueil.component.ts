import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  message:any ;
  // data:any;
  don:Data[]=[];
    constructor(public dataserv:DataService) {
      this.message={
        titre:"Simplon's Drink",
        soustitre:"Bienvenue sur l'application de gestion du stock de café."
      }
      // this.data={
      //   titre:"Boisson",
      //   description:"Plus de Sucre",
      //   nom:"Joe Doe",
      //   date:"05/01/2021"
      // }
     }
  ngOnInit(): void {
  }

}
