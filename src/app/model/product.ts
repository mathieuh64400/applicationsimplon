export interface Product {
    id: Number;
    name: string;
    category: String;
    description: string;
    NomConsommateur: string;
    imageUrl: string;
    quantity: Number;
    date: Date;
    etat: Boolean;
    pseudo:string;
    modif: Boolean;
}
export class Productclass implements Product {
    id: Number =1;
    name: string ="assiette";
    category: String="ustensile";
    description: string="cghzygfyg hjtgyuf yguz";
    NomConsommateur: string="Dalton";
    imageUrl: string='';
    quantity: Number=10;
    date: Date= new Date();
    etat: Boolean =true;
    pseudo:string ="AE-TR7";
    modif:Boolean=true;
}
