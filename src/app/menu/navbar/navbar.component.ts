import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router,public authService:AuthentificationService) { }

  ngOnInit(): void {
   
  }
 seDeconnecter(){
      this.authService.deconnecter();
      this.router.navigateByUrl('');
    }
}
