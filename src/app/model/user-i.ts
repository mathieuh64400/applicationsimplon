export interface UserI {
   id: number
    Nom: string
    Prenom: string
    preference: string
    role?: boolean
    promotion: Date
    email: string
    img: string
    motdepass: string
    lieu: string
    type?:boolean
}

export class Userclass implements UserI {

     id: number = 31
    Nom: string = "Dalton"
    Prenom: string = "Fred"
    preference: string = "hjzgfgfrg fggfhg"
    role?: boolean = false
    promotion: Date = new Date()
    email: string = 'fdalto@gmail.com'
    img: string = ''
    motdepass: string = 'ertffff'
    lieu: string = 'pau'
    type?:boolean=false
}