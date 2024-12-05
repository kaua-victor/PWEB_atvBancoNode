class Cliente {

    private _nome: string;
    private _cpf: string;
    private _conta: Conta;

    constructor(nome: string, cpf: string) {
        this._nome = nome;
        this._cpf = cpf;
    }

    get nome() {
        return this._nome;
    }

    set nome(nome: string) {
        this._nome = nome;
    }

    get cpf() {
        return this._cpf;
    }

    set cpf(cpf: string) {
        this._cpf = cpf;
    }

    get conta() {
        return this._conta;
    }

    inserirConta(conta: Conta) {
        this._conta = conta;
    }


    toString(): string {
        return `Nome: ${this._nome} 
        - cpf: ${this._cpf}`;
    }
}
