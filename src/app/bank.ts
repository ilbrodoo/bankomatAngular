import { User } from "./user"
export interface Bank {
    id : Number,
    nomeUtente:string
    bancheFunzionalita: string[],
    utentis: User[],
}
