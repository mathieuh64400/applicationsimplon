import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { CommandepostComponent } from './Commande/commandepost/commandepost.component';
import { ListCommandeComponent } from './Commande/list-commande/list-commande.component';
import { IdentificationComponent } from './compte/identification/identification.component';
import { LoginComponent } from './compte/login/login.component';
import { MessagegetComponent } from './demande/messageget/messageget.component';
import { PostdemandeComponent } from './demande/postdemande/postdemande.component';
import { ErrorComponent } from './error/error.component';
import { PagepresentationComponent } from './pagepresentation/pagepresentation.component';
import { ProductajoutComponent } from './product/productajout/productajout.component';
import { ProductlistComponent } from './product/productlist/productlist.component';
import { ProductlistconsComponent } from './product/productlistcons/productlistcons.component';
import { AuthentificationGuard } from './security/authentification.guard';
import { UserlistComponent } from './User/userlist/userlist.component';
import { UserpostComponent } from './User/userpost/userpost.component';
import { UserputComponent } from './User/userput/userput.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [

  { path: 'accueil', component: AccueilComponent },
  { path: '', component: PagepresentationComponent },
  {path:'identification',component:IdentificationComponent},
  { path: 'login', component: LoginComponent },
  { path: 'userlist', component: UserlistComponent },
  { path: 'adduser', component: UserpostComponent },
  { path: 'edituser', component: UserputComponent },
  { path: 'productlist', component: ProductlistComponent },
  { path: 'prodconsons', component: ProductlistconsComponent },
  { path: 'productajout', component: ProductajoutComponent },
  { path: 'commandelist', component: ListCommandeComponent },
  { path: 'Postcommandes', component: CommandepostComponent },
  { path: 'demande', component: MessagegetComponent }, 
  {path:'postdemande',component:PostdemandeComponent},
  { path: 'welcome', component: WelcomeComponent, canActivate: [AuthentificationGuard] },
  { path: 'not-found', component: ErrorComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
