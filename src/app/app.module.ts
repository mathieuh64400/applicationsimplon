import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserlistComponent } from './User/userlist/userlist.component';
import { UserpostComponent } from './User/userpost/userpost.component';
import { UserputComponent } from './User/userput/userput.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductlistComponent } from './product/productlist/productlist.component';
import { ProductlistconsComponent } from './product/productlistcons/productlistcons.component';
import { ProductajoutComponent } from './product/productajout/productajout.component';
import { ListCommandeComponent } from './Commande/list-commande/list-commande.component';
import { CommandepostComponent } from './Commande/commandepost/commandepost.component';
import { AccueilComponent } from './accueil/accueil.component';
import { MessagegetComponent } from './demande/messageget/messageget.component';
@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,
    UserpostComponent,
    UserputComponent,
    ProductlistComponent,
    ProductlistconsComponent,
    ProductajoutComponent,
    ListCommandeComponent,
    CommandepostComponent,
    AccueilComponent,
    MessagegetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule,FormsModule,BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
