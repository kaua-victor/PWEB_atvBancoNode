let clienteController = new ClienteController();

const conta4 = new Conta('4', 100);
const conta5 = new Conta('5', 200);
const clientes: Clientes = new Clientes();
const cli1 = new Cliente("Kauã", "111");
const cli2 = new Cliente("João", "222");

const cliEspecial1 = new ClienteEspecial("Luiz", "333")
const cliEspecial2 = new ClienteEspecial("Lucas", "444")

cliEspecial1.inserirDependente("Matheus", "555")
cliEspecial2.inserirDependente("Pedro", "777")

cli2.inserirConta(conta4);
clientes.inserir(cli1);
clientes.inserir(cli2);
clientes.inserir(cliEspecial1)
clientes.inserir(cliEspecial2)

console.log("Clientes: " + clientes.listar());
clientes.remover("333");
console.log("Clientes: " + clientes.listar());
console.log(clientes.pesquisar("111"))
console.log(cliEspecial1.getDependentes())
console.log(cliEspecial2.getDependentes())