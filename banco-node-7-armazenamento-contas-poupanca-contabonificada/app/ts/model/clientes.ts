class Clientes {

    private _clientes: Array<Cliente>;

    constructor() {
        this._clientes = [];
    }

    inserir(cliente: Cliente) {
        this._clientes.push(cliente);
    }

    remover(cpf: string){
        for(let i: number = 0; i<this._clientes.length; i++) {
            if(this._clientes[i].cpf === cpf) {
                this._clientes.splice(i, 1);
            }
            else
                return alert(`cliente com cpf ${cpf} não encontrado`);
        }
    }

    listar() {
        return this._clientes;
    }

    pesquisar(cpf: string){
        for(let i: number = 0; i<this._clientes.length; i++) {
            if(this._clientes[i].cpf === cpf) {
                return this._clientes;
            }
            else
                return alert(`cliente com cpf ${cpf} não encontrado`);
        }
    }


}
