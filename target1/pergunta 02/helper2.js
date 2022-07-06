//Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

var sp = 67836.43;
var rj = 36678.66;
var mg = 29229.88;
var es = 27165.48;
var outros = 19849.53;
var total = sp + rj + mg + es + outros;

var porcentagemSp = (sp / total) * 100;
var porcentagemRj = (rj / total) * 100;
var porcentageMg = (mg / total) * 100;
var porcentagemEs = (es / total) * 100;
var porcentagemOutros = (outros / total) * 100;

console.log(porcentagemSp);
console.log(porcentageMg);
console.log(porcentagemRj);
console.log(porcentagemEs);
console.log(porcentagemOutros);
