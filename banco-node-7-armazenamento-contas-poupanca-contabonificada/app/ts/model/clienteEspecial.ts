class ClienteEspecial extends Cliente {
    private _dependentes: Array<Cliente>;

    constructor(nome: string, cpf: string) {
        super(nome, cpf);
        this._dependentes = [];
    }

    inserirDependente(nome: string, cpf:string) {
        let dependente = new Cliente(nome, cpf);
        this._dependentes.push(dependente);
    }

    getDependentes() {
        return this._dependentes;
    }



}