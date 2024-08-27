const NomeCompleto = "Vitoria Eduarda Araujo";
const Nascimento = "22/06/2006"
const Idade = "18 anos"
const Local = "Sao Jose dos Pinhais"

console.log ('oi eu sou ${NomeCompleto}, meu ano de Nascimento é ${Nascimento} e atualmente tenho ${Idade}, moro em ${Local}')

const ListaDeViagens = new Array(
`Portugal`,
`Espanha`,
`Italia`,
`Alemanha`,
`Australia`,
)

console.log (ListaDeViagens)

console.log(ListaDeViagens [0]);
ListaDeViagens.push ("Coronel Vivida");
console.log(ListaDeViagens);
ListaDeViagens.splice(1,1);
console.log(ListaDeViagens);

const idadeComprador = 23;

if(idadeComprador < 18){
  console.log("infelizmente o sistema não disponibiliza venda para menores de idade")
}
if(idadeComprador >=18){
console.log ("você poderá prosseguir sua compra")
}

  

