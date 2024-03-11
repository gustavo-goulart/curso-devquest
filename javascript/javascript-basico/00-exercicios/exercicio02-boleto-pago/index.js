//meu resultado
/*
const boletoPago = false;

if (boletoPago == true) {
  alert("O Boleto está pago");
} else {
  alert("O Boleto não está pago");
}
*/

// CORREÇÃO
const boletoPago = true;

if (boletoPago) {
  alert("O Boleto está pago");
} else if (boletoPago === false) {
  alert("O Boleto não está pago");
}
