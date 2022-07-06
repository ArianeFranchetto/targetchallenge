//3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:

fetch("./arquivodeapoio.json").then((response) => {
  return response.json();
  function calculadoraFaturamento() {
    var somaTotal = 0;
    var valorMaior = 0;
    var valorMenor = 0;
    var diaSuperior = 0;
    var arrayValores = [
      { somaTotal },
      { valorMaior },
      { valorMenor },
      { diaSuperior },
    ];

    for (let int = 0; i < json.length; i++) {
      //Se o valor do atributo "VALOR" for > 0 ele contabiliza
      if (json[i]["valor"] > 0) {
        //Ja adiciona a uma lista para manipular mais facilmente depois
        arrayDiasComFaturamento.add(json[i]["valor"]);
      }
      // Vai procurando o maior valor também
      if (valorMaior <= json[i]["valor"]) {
        valorMaior = json[i]["valor"];
      }
      //vai procurando o Menor Valor
      if ((valorMenor >= json[i]["valor"] && json[i]["valor"] != 0) || i == 0) {
        valorMenor = json[i]["valor"];
      }
    }

    //Soma todos valores dentro do array
    arrayDiasComFaturamento.forEach((valor) => {
      somaTotal += valor;
    });
    //Divide a soma pelo tamanho do arra
    var media = somaTotal / arrayDiasComFaturamento.length;

    //Verifica qnts dias tem valor maior q a media
    arrayDiasComFaturamento.forEach((valor) => {
      if (valor > media) {
        numDiasSuperior += 1;
      }
    });

    console.log(valorMenor);
    console.log(valorMaior);
    console.log(diaSuperior);
  }
});

then((jsondata) => console.log(jsondata));
