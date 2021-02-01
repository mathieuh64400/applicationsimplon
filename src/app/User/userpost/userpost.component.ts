import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-userpost',
  templateUrl: './userpost.component.html',
  styleUrls: ['./userpost.component.css']
})
export class UserpostComponent implements OnInit {

  constructor(public serv: UserserviceService, public toast: ToastrService) { }
  msg:boolean=false
  
  ngOnInit(): void {
  }

  validatePost(adduserform:NgForm){
    console.log("Valeurs récupérées depuis le formualire HTML", adduserform.value);
    this.serv.PostUser();
    this.toast.success('ajout realisé');
  }
}
