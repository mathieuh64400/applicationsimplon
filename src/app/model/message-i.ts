export interface MessageI {
    id: number;
    Nom: string;
    description: string;
    pseudo: string;
    date: Date;
    type:string;

}
export class Message implements MessageI {
    id: number=1;
    Nom: string="AHH";
    description: string="hhhhh";
    pseudo: string="hfhhdh";
    date: Date= new Date();
    type:string="ahahah";
}