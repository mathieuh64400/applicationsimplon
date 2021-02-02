import { Pipe, PipeTransform } from '@angular/core';
import { MessageI } from '../model/message-i';

@Pipe({
  name: 'messagebytype'
})
export class MessagebytypePipe implements PipeTransform {

  transform(value: MessageI[], name: string): MessageI[] {
    console.log(value,name);
    
    return value.filter((note)=>{
      if(note.Nom.includes(name))return note;
    else return null 
  });
  }

}
