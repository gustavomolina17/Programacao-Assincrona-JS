// Criamos uma função responsável pela simulação do envio de um email.

function enviarEmail(corpo, para) {
  // A função setTimeout serve para realizar ações depois de um determinado tempo.
  // Precisamos sempre passar uma função anônima como parâmetro do setTimeout.

  setTimeout(function () {
    console.log(` 
    
        Para: ${para}
        -----------------------------------------------------------------------
        ${corpo}
        -----------------------------------------------------------------------
        De: Gustavo Molina

        `); // Utilizamos aqui um template literals
  }, 4000); // 4000 ms correspondem a 4s de espera
}

console.log("Inicio do envio do email!");
enviarEmail(
  "Parabéns você ganhou um cupom de desconto de R$0,99 na loja Tend Tudo",
  "chevrolet@ford.com.br"
);
console.log("Seu email foi enviado, deve chegar em minutos");
console.log("TUDO OK !!!");
