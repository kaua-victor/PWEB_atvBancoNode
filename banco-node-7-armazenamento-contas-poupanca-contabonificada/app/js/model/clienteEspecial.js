class ClienteEspecial extends Cliente {
    constructor(nome, cpf) {
        super(nome, cpf);
        this._dependentes = [];
    }
    inserirDependente(nome, cpf) {
        let dependente = new Cliente(nome, cpf);
        this._dependentes.push(dependente);
    }
    getDependentes() {
        return this._dependentes;
    }
}
