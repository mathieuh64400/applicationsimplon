import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Userclass, UserI } from '../model/user-i';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
 users:UserI = new Userclass();
  constructor(private Http:HttpClient) { }

  getUser(){
    return this.Http.get<UserI[]>('http://localhost:3000/user')
  }

 

  PostUser(){
    console.log(this.users);
    this.Http.post('http://localhost:3000/user', this.users).subscribe(
      retour => {
        console.log(retour);
      },
      erreur => console.log(erreur)
    );
  
  }
  
  Delete(id:Number){
    const deleteurl='http://localhost:3000/user/'+id
    return this.Http.delete(deleteurl)
  }

}
