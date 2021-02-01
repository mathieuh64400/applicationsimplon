import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CommandeserviceService } from 'src/app/services/commandeservice.service';

@Component({
  selector: 'app-list-commande',
  templateUrl: './list-commande.component.html',
  styleUrls: ['./list-commande.component.css']
})
export class ListCommandeComponent implements OnInit {

  constructor(public service :CommandeserviceService,private toast:ToastrService) { }

  commandes: any;
  ngOnInit(): void {
    this.commandes = this.service.getCommande();
  }
  Deletecommandes(id: number){
    if (confirm("etes-vous sur de vouloir eliminer cet individu de la liste de membres?")) {
      this.service.Delete(id).subscribe(
        data => {
          console.log(data);
          this.toast.warning(' Delete successfully');
        }
  
      )
    }
  }

}
