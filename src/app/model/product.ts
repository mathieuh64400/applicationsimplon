export interface Product {
    // id: Number;
    name: string;
    category: String;
    description: string;
    NomConsommateur: string;
    imageUrl: string;
    quantity: Number;
    date: Date;
    etat?: Boolean;
    pseudo:string;
    modif?: Boolean;
}
export class Productclass implements Product {
    // id: Number =31;
    name: string ="";
    category: String="";
    description: string="";
    NomConsommateur: string="";
    imageUrl: string='';
    quantity: Number=0;
    date: Date= new Date();
    etat?: Boolean =true;
    pseudo:string ="";
    modif?:Boolean=true;
}
