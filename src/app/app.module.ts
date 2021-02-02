import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserlistComponent } from './User/userlist/userlist.component';
import { UserpostComponent } from './User/userpost/userpost.component';
import { UserputComponent } from './User/userput/userput.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductlistComponent } from './product/productlist/productlist.component';
import { ProductlistconsComponent } from './product/productlistcons/productlistcons.component';
import { ProductajoutComponent } from './product/productajout/productajout.component';
import { ListCommandeComponent } from './Commande/list-commande/list-commande.component';
import { CommandepostComponent } from './Commande/commandepost/commandepost.component';
import { AccueilComponent } from './accueil/accueil.component';
import { MessagegetComponent } from './demande/messageget/messageget.component';
import { PostdemandeComponent } from './demande/postdemande/postdemande.component';
import { UserbynamePipe } from './pipes/userbyname.pipe';
import { MessagebytypePipe } from './pipes/messagebytype.pipe';
import { ProductbynamePipe } from './pipes/productbyname.pipe';
import { ProductbycategoriePipe } from './pipes/productbycategorie.pipe';
import { SearchbynamePipe } from './pipes/searchbyname.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { PagepresentationComponent } from './pagepresentation/pagepresentation.component';
import { LoginComponent } from './compte/login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { IdentificationComponent } from './compte/identification/identification.component';
import { NavbarComponent } from './menu/navbar/navbar.component';
import { FooterComponent } from './menu/footer/footer.component';
import { ChoixComponent } from './choix/choix.component';
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
    MessagegetComponent,
    PostdemandeComponent,
    UserbynamePipe,
    MessagebytypePipe,
    ProductbynamePipe,
    ProductbycategoriePipe,
    SearchbynamePipe,
    PagepresentationComponent,
    LoginComponent,
    WelcomeComponent,
    ErrorComponent,
    IdentificationComponent,
    NavbarComponent,
    FooterComponent,
    ChoixComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,
    FormsModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
