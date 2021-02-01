import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageI } from 'src/app/model/message-i';
import { MessagerieService } from 'src/app/services/messagerie.service';

@Component({
  selector: 'app-messageget',
  templateUrl: './messageget.component.html',
  styleUrls: ['./messageget.component.css']
})
export class MessagegetComponent implements OnInit {
  
  // elt: MessageI = {
  //   id: -1,
  //   Nom: 'string',
  //   pseudo: 'string',
  //   description: 'string',
  //   date: new Date(),
  //   type: false

  // }
  searchTermpseudo:string='';
  searchTermtype :string='';
  messages: MessageI[] = [];
  constructor(public serv: MessagerieService) { }

  ngOnInit(): void {
    this.serv.getMessage().subscribe(
      (data)=>{
        console.log('données recup par requete',data);
        this.messages=data;
      }
    )
   


    
  }
  // setUpNote(i: number) {
  //   console.log('Evénement sur le plat déclenché');
  //   this.elt = this.serv.messages[i];
  // }
}
