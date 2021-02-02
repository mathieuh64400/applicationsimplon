import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-postdemande',
  templateUrl: './postdemande.component.html',
  styleUrls: ['./postdemande.component.css']
})
export class PostdemandeComponent implements OnInit {
  demande:any;
  constructor() {
    this.demande={
      titre:"demande"
     }
   }

  ngOnInit(): void {
  }

}
