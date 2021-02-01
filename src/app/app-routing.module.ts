import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { CommandepostComponent } from './Commande/commandepost/commandepost.component';
import { ListCommandeComponent } from './Commande/list-commande/list-commande.component';
import { MessagegetComponent } from './demande/messageget/messageget.component';
import { ProductajoutComponent } from './product/productajout/productajout.component';
import { ProductlistComponent } from './product/productlist/productlist.component';
import { ProductlistconsComponent } from './product/productlistcons/productlistcons.component';
import { UserlistComponent } from './User/userlist/userlist.component';
import { UserpostComponent } from './User/userpost/userpost.component';
import { UserputComponent } from './User/userput/userput.component';

const routes: Routes = [
  {path:'',component:AccueilComponent},
  {path:'userlist',component:UserlistComponent},
  {path:'adduser',component:UserpostComponent},
  {path:'edituser',component:UserputComponent},
  {path:'productlist',component:ProductlistComponent},
  {path:'prodconsons',component:ProductlistconsComponent},
  {path:'productajout',component:ProductajoutComponent},
  {path:'commandelist',component:ListCommandeComponent},
  {path:'Postcommandes',component:CommandepostComponent},
  {path:'demande',component:MessagegetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }