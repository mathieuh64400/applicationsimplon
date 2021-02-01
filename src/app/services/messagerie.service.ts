import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Message, MessageI } from '../model/message-i';

@Injectable({
  providedIn: 'root'
})
export class MessagerieService {

  constructor(public Http:HttpClient) { 
   this.getMessage()
  } 
  messages:MessageI = new Message();
  // message: Array < MessageI > =[];
  getMessage(){

   return this.Http.get<MessageI[]>('http://localhost:3000/message')
   
    
  }
  // getMessage(){
  //     return  this.Http.get("http://localhost:3000/message");
  //     }
}
