import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Message, MessageI } from '../model/message-i';

@Injectable({
  providedIn: 'root'
})
export class MessagerieService {
  messages:MessageI = new Message();
  
  constructor(public Http:HttpClient) { 
   this.getMessage()
  } 

  // message: Array < MessageI > =[];
  getMessage(){

   return this.Http.get<MessageI[]>('http://localhost:3000/message')  
  }
  messageCreate(){
    console.log(this.messages);
    this.Http.post('http://localhost:3000/message', this.messages).subscribe(
      retour => {
        console.log(retour);
      },
      erreur => console.log(erreur)
    );
  }
  // getMessage(){
  //     return  this.Http.get("http://localhost:3000/message");
  //     }
}
