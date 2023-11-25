const readline = require("readline-sync");

console.log("\n*** Escolha uma das Alternativas: ***\n");

console.log("1 - Listar os salários minímos de 2010 à 2023");
console.log("2 - Listar o índice IPCA de 2010 à 2023");
console.log("3 - Comparação entre o percentual de aumento salarial e o IPCA");

let alternativa = parseInt(
  readline.question(`\n Digite o número da sua escolha: `)
);
let arraySalario = [
  { ano: 2010, salario: 510 },
  { ano: 2011, salario: 545 },
  { ano: 2012, salario: 622 },
  { ano: 2013, salario: 678 },
  { ano: 2014, salario: 472 },
  { ano: 2015, salario: 788 },
  { ano: 2016, salario: 880 },
  { ano: 2017, salario: 937 },
  { ano: 2018, salario: 954 },
  { ano: 2019, salario: 998 },
  { ano: 2020, salario: 1045 },
  { ano: 2021, salario: 1100 },
  { ano: 2022, salario: 1212 },
];

let arrayInflacao = [
  { ano: 2010, inflacao: "5,91%" },
  { ano: 2011, inflacao: "6,50%" },
  { ano: 2012, inflacao: "5,84%" },
  { ano: 2013, inflacao: "5,91%" },
  { ano: 2014, inflacao: "6,41% " },
  { ano: 2015, inflacao: "10,67%" },
  { ano: 2016, inflacao: "6,29%" },
  { ano: 2017, inflacao: "2,95%" },
  { ano: 2018, inflacao: "3,75%" },
  { ano: 2019, inflacao: "4,31%" },
  { ano: 2020, inflacao: "4,52%" },
  { ano: 2021, inflacao: "5,26%" },
  { ano: 2022, inflacao: "10,18%" },
  { ano: 2023, inflacao: "8,9%" },
];

console.clear();

switch (alternativa) {
  case 1:
    console.log(
      " Você escolheu a Opção --> 1 - Listar os salários minímos de 2010 à 2023 \n"
    );

    for (let i = 0; i < arraySalario.length; i++) {
      let ano = arraySalario[i].ano;
      let salario = arraySalario[i].salario;

      console.log(
        `Ano: ${ano.toString().padStart(10, ". ")} ${"".padEnd(
          5,
          " "
        )} Salário: ${"".padEnd(10, ".")}  R$ ${salario
          .toFixed(2)
          .replace(".", ",")}`
      );
    }

    break;

  case 2:
    console.log(
      " Você escolheu a Opção --> 2 - Listar o índice IPCA de 2010 à 2023 \n"
    );

    for (let i = 0; i < arrayInflacao.length; i++) {
      let ano = arrayInflacao[i].ano;
      let inflacao = arrayInflacao[i].inflacao;

      console.log(
        `Ano: ${ano.toString().padStart(10, ". ")} ${"".padEnd(
          5,
          " "
        )} Inflação IPCA: ${inflacao.padStart(10, ". ")}`
      );
    }

    break;

  case 3:
    console.log(
      " Você escolheu a Opção --> 3 - Comparação entre o percentual de aumento salarial e o IPCA \n"
    );

    let salario_ano_anterior = arraySalario[0].salario;

    for (let i = 1; i < arraySalario.length; i++) {
      let ano = arraySalario[i].ano;
      let salario = arraySalario[i].salario;
      let inflacao = parseFloat(
        arrayInflacao[i - 1].inflacao.replace(",", ".")
      );

      let diferenca_salario = salario - salario_ano_anterior;
      let percentual_crescimento =
        (diferenca_salario / salario_ano_anterior) * 100;

      console.log(
        `      
        Ano: ${ano.toString().padStart(10, ". ")}  ${"".padEnd(5, " ")} 
        Salário: ${"".padEnd(10, ".")}  R$ ${salario
          .toFixed(2)
          .replace(".", ",")}
        Crescimento Salarial: ${percentual_crescimento
          .toFixed(2)
          .replace(".", ",")
          .padStart(10, ".")}%  ${"".padEnd(5, " ")} 
        Inflação IPCA: ${inflacao
          .toFixed(2)
          .replace(".", ",")
          .padStart(10, ".")}%`
      );

      salario_ano_anterior = salario;
    }

    break;

  default:
    console.log("*** Opção Inválida! ***");
    break;
}
