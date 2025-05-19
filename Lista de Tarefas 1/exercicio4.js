/*
4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
Utilize switch-case para implementar a lógica de cada opção selecionada.
*/

const prompt = require("prompt-sync")();

const escolha = prompt(
  "Escolha uma das opções: \n\n1 - Mensagem de Bom dia \n2 - Mensagem de Boa Tarde \n3 - Mensagem de Boa Noite\n"
);

switch (escolha) {
  case "1":
    console.log("Bom dia! Tenha um ótimo dia!");
    break;
  case "2":
    console.log("Boa tarde! Tenha uma ótima tarde!");
    break;
  case "3":
    console.log("Boa noite! Tenha uma ótima noite!");
    break;
  default:
    console.log("Opção inválida!");
}