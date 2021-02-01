import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Commandeclass, CommandeI } from '../model/commande-i';

@Injectable({
  providedIn: 'root'
})
export class CommandeserviceService {

  constructor(private chttp:HttpClient) { }
  getCommande(){
    return this.chttp.get("http://localhost:3000/commande");
  }
  Delete(id:Number){
    const deleteurl='http://localhost:3000/commande/'+id
    return this.chttp.delete(deleteurl)
  }
  commandes:CommandeI = new Commandeclass();
  PostCommande(){
    console.log(this.commandes);
    this.chttp.post('http://localhost:3000/products', this.commandes).subscribe(
      retour => {
        console.log(retour);
      },
      erreur => console.log(erreur)
    );
  }
}
