export class Contato{
   
    constructor(id: number, nome: string, telefone: string){
        this.nome = nome;
        this.telefone = telefone;
        this.id = id;
    }

    nome: string;
    telefone: string;
    id: number;
}


