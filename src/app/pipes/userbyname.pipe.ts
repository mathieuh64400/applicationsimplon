import { Pipe, PipeTransform } from '@angular/core';
import { UserI } from '../model/user-i';

@Pipe({
  name: 'userbyname'
})
export class UserbynamePipe implements PipeTransform {

  transform(value: UserI[], name: string): UserI[] {
    console.log(value,name);
    
    return value.filter((user)=>{
      if(user.Nom.includes(name))return user;
    else return null 
  });
  }

}
