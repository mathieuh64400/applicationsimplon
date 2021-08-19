export interface CommandeI {
    id: Number;
    name: String;
    nameprod: String;
    imageUrl?: String;
    quantity: Number;
    date: Date;
}

export class Commandeclass implements CommandeI {
    id: Number=31;
    name: String="";
    nameprod: String="";
    imageUrl?: String='';
    quantity: Number=30;
    date: Date= new Date();
}

