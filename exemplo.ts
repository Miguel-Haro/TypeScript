// INTRODUÇÃO: TIPOS PRIMITIVOS EM TYPESCRIPT

// 1) number (Para todos os tipos de números: inteiros e decimais)
let precoProduto: number = 199.99;
let quantidadeEstoque: number = 50;
console.log(`1. Preço: ${precoProduto}, Estoque: ${quantidadeEstoque}`);

// 2) string (Para todos os dados textuais)
let nomeUsuario: string = 'Miguel';
let emailUsuario: string = 'miguel@exemplo.com';

// Inferencia do tipo
let cpf = 111111111; // fica em number sem precisar colocar o ":"
//let cpf = "111111111"; //erro de tipagem: Type 'string' is not assignable to type 'number'

// Pode usar templates literais (crases)
let saudacao: string = `Bem-vindo, ${nomeUsuario}!, seu e-mail é ${emailUsuario}.`;
console.log(`2. Saudação: ${saudacao}`);

// 3) boolean (Para valores lógicos: true or false)
let isAdmin: boolean = true;
let isContaAtiva: boolean = false;

function checarPermissao(admin: boolean): string {
  return admin ? 'Acessso liberado' : 'Acesso negado';
}

console.log(`3. Permissao: ${checarPermissao(isAdmin)}`);

//return admin ? 'Acessso liberado' : 'Acesso negado'; retorna liberado se true, negado se false
//(admin: boolean) recebe true ou false

// 4) void (Usado principalmente para funções que não retornam nenhum valor)
//void é o tipo vazio
function logarMensagem(msg: string): void {
  console.log(`4. [LOG] Mensagem registrada: ${msg}`);
  // esta função não tem 'return' (ou retorna 'return;'), por isso p tipo é 'void'
}

logarMensagem('Operação concluída com sucesso!');

// 5) Inferência de Tipo (TypeScript deduz o tipo)
// O TS infere automaticamente que 'pi' é do tipo 'number'
let pi = 3.14159;

// O TS infere que 'cidade' é do tipo 'string'
let cidade = 'São Paulo';

// 6) Union Types (Tipos de União: A variável pode ser um OU outro tipo)

// A variável 'id' pode ser um número OU uma string
let idProduto: number | string;
idProduto = 12345;
idProduto = 'PROD-ABC';

// idProduto = true; // Erro: Type 'boolean' is not assignable to type 'string | number'.

function buscarItem(id: number | string) {
  console.log(`6. Buscando item com ID: ${id}`);
}

buscarItem(500);
buscarItem('COD-999');

// | --> significa ou

// 7) Array (Coleções de elementos de UM tipo específico)

//Array de strings (sitaxe: Tipo[])
let listaNomes: string[] = ['João', 'Pedro', 'Mariana'];

//Array de números (sitaxe: alternativa: Array<Tipo>)
let listaPontos: Array<number> = [10, 25, 40]; // Array<number> só aceita numeros

listaNomes.push('Miguel');
//listaNomes.push(123);

console.log(`7. Nomes na lista: ${listaNomes.join(', ')}`);

// join(', ') junta os nomes usando vírgula
// push: push() é um método usado para adicionar um elemento no final de um array (lista).

// 8) Tuple (Tupla: Array de tamanho fixo e tipos definidos por POSIÇÃO)

//Deve ser extamente: [string, number, boolean]
let configuracaoUsuario: [string, number, boolean];

configuracaoUsuario = ['editor', 5, true];

function exibirConfig(config: [string, number, boolean]) {
  console.log(
    `8. Perfil: ${config[0]}, Nível: ${config[1]}, Ativo: ${config[2]}`,
  );
}

exibirConfig(configuracaoUsuario);

// 9) unknown (Tipo mais seguro que 'any', força checagem antes de usar)
let dadosReacebidos: unknown;

dadosReacebidos = 10;
dadosReacebidos = 'dez';

if (typeof dadosReacebidos === 'number') {
  console.log(`9. Dados (number) formatados: ${dadosReacebidos.toFixed(2)}`);
} else if (typeof dadosReacebidos === 'string') {
  console.log(
    `9. Dados (string) em maiúsculas: ${dadosReacebidos.toUpperCase()}`,
  );
}

// unknown -> "eu não sei qual é o tipo desse dado"
// === "é exatamente igual a"
// typeof: serve para descobrir o tipo de um valor
// toFixed: é usado para formatar um número com casas decimais.
// toUpperCase: serve para transformar um texto em letras maiúsculas.
