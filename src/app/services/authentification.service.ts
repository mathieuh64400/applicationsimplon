import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Utilisateur } from '../model/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
con:boolean=false
  constructor(public http :HttpClient) { }
  getUtilisateur(u:Utilisateur){
    this.http.get(`assets/data/${u.email}@${u.password}.json`).subscribe(
      u => {
        console.log(u);
        this.con = true;
      },
      erreur => console.log(erreur)
    );
  }
  
  // public seConnecter(UserInfo: Utilisateur) {
  //   localStorage.setItem('ACESS_TOKEN','acess_token');
  
  // }
  // /**
  //  * estConnecter
  //  */
  // public estConnecter() {
  //   return localStorage.getItem('ACESS_TOKEN')!==null;
  // }
  // /**
  //  * sedeconnecter
  //  */
  // public sedeconnecter() {
  //   localStorage.removeItem('ACESS_TOKEN')
  // }
}
