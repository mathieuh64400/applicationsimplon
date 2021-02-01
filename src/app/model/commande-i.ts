export interface CommandeI {
    id: Number;
    name: String;
    nameprod: String;
    imageUrl: String;
    quantity: Number;
    date: Date;
}

export class Commandeclass implements CommandeI {
    id: Number=1;
    name: String="jean";
    nameprod: String="thé";
    imageUrl: String='';
    quantity: Number=300;
    date: Date= new Date();
}

