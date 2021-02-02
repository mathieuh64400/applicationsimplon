import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // loginForm: FormGroup;
  // isSubmitted=false;
  data:any;
  constructor(private auth:AuthentificationService,private router:Router,private formBuilder:FormBuilder) { 
    this.data={
      titre:"Simplon's Drink",
      
      message:"Buvons Bien ensemble"}
  }

  ngOnInit(): void {
    // this.loginForm = this.formBuilder.group({
    //   mail: ['jean@gmail.com', Validators.required],
    //   motdepasse: ['EEEE', Validators.required]
    // });
  }
  // get formControls(){return this.loginForm.controls;}

  // seConnecter(){
  //   console.log(this.loginForm.value);
  //   this.isSubmitted= true;
  //   if (this.loginForm.invalid) {
  //     return;
  //   }
  //   this.auth.seConnecter(this.loginForm.value);
  //   this.router.navigateByUrl('/admin');
//}
}
