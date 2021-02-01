import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageI } from '../model/message-i';

@Injectable({
  providedIn: 'root'
})
export class MessagerieService {

  constructor(public Http:HttpClient) { 
   this.getMessage()
  } 
  message: Array < MessageI > =[];
  getMessage(){

    this.Http.get<Array<MessageI>>('http://localhost:3000/message').subscribe(
      elt => {
        console.log("plats recuperes par requêtes", elt)

        this.message = elt;

      }, erreur => console.log(erreur)

    )
  }
  // getMessage(){
  //     return  this.Http.get("http://localhost:3000/message");
  //     }
}
