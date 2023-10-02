const input = require('readline-sync');

let wins = '';
let defeats = '';

function inputData(string) {
  value = input.question(`Qual a quantidade de ${string} do herói ou para encerrar digite Sair? `);
  return value;
}

function calculateRank(wins, defeats) {
  let result = wins - defeats;
  return result;
}

function findRank(balance) {
  if (balance <= 10) {
    nivel = 'Ferro';
  } else if (balance > 10 && balance <= 20) {
      nivel = 'Bronze';
  } else if (balance > 20 && balance <= 50) {
    nivel = 'Prata';
  } else if (balance > 50 && balance <= 80) {
    nivel = 'Ouro';
  } else if (balance > 80 && balance <= 90) {
    nivel = 'Diamante';
  } else if (balance > 90 && balance <= 100) {
    nivel = 'Lendário';
  } else {
    nivel = 'Imortal';
  }
  return nivel;
}

while (wins != 'Sair') {
  wins = inputData("vitorias");
  if (wins == 'Sair') {
    break;
  }
  defeats = inputData("derrotas");
  if (defeats == 'Sair') {
    break;
  }
  let balance = calculateRank(wins, defeats);

  let nivel = findRank(balance);

  console.log(`O Herói tem de saldo de ${balance} está no nível de ${nivel}`);
}

console.log("Até Breve ! ! !");