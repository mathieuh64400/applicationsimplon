import { Component, OnInit } from '@angular/core';
import { MessageI } from 'src/app/model/message-i';
import { MessagerieService } from 'src/app/services/messagerie.service';

@Component({
  selector: 'app-messageget',
  templateUrl: './messageget.component.html',
  styleUrls: ['./messageget.component.css']
})
export class MessagegetComponent implements OnInit {
elt: MessageI;

  constructor(public serv: MessagerieService ) { }
messages:any;
  ngOnInit(): void {
    this.messages=this.serv.getMessage()
  }
  setUpNote(i:number){
    console.log('Evénement sur le plat déclenché');
    this.elt=this.serv. message[i];
  }
}
