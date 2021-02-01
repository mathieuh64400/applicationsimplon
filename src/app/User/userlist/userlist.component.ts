import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserI } from 'src/app/model/user-i';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  constructor(public serv: UserserviceService ,public toast: ToastrService) { }

  searchTerm: string = '';
  status: any;
  users: UserI[]=[];
  ngOnInit(): void {
    // this.users = this.serv.getUser();
    this.serv.getUser().subscribe(
      (data)=>{
        console.log('données recup par requete',data);
        this.users=data;
      }
    )
  }
  DeleteUser(id: number) {
    if (confirm("etes-vous sur de vouloir eliminer cet individu de la liste de membres?")) {
      this.serv.Delete(id).subscribe(
        data => {
          console.log(data);
          this.toast.warning(' Delete successfully');
        }

      )
    }
  }
}
