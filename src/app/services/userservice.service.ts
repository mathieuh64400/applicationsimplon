import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Userclass, UserI } from '../model/user-i';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
 usersi:UserI = new Userclass();
  constructor(private http:HttpClient) { }

  getUser(){
    return this.http.get<UserI[]>('http://localhost:3000/user')
  }

 

  userCreate(){
    console.log(this.usersi);
    this.http.post('http://localhost:3000/user', this.usersi).subscribe(
      retour => {
        console.log(retour);
      },
      erreur => console.log(erreur)
    );
  }
  
  Delete(id:Number){
    const deleteurl='http://localhost:3000/user/'+id
    return this.http.delete(deleteurl)
  }

}
