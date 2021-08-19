import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Utilisateur } from 'src/app/model/utilisateur';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-identification',
  templateUrl: './identification.component.html',
  styleUrls: ['./identification.component.css']
})
export class IdentificationComponent implements OnInit {
    data:any;
    ut:Utilisateur={
    email:'joedoe@neuf.fr',
    password:"007Bond"
    }
    
    constructor(public auth:AuthentificationService,private router:Router) {
      this.data={
        titre:"Simplon's Drink",
        
        message:"Buvons Bien ensemble"} 
      
      }
  
    ngOnInit(): void {
      
    }
    montre(){
      console.log(this.ut);
    }
    validationUtilisateur(){
      this.auth.getUtilisateur(this.ut);
      this.router.navigateByUrl('welcome');
    }
   
   }


