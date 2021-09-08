// Nosso callback deve ser passado como um parâmetro da função enviarEmail

function enviarEmail(corpo, para, callback) {
  setTimeout(function () {
    console.log(`
  
          Para: ${para}
          -----------------------------------------------------------------------
          ${corpo}
          -----------------------------------------------------------------------
          De: Gustavo Molina
  
          `);
    callback();
  }, 4000);
}

console.log("Inicio do envio do email!");
enviarEmail(
  "Parabéns você ganhou um cupom de desconto de R$0,99 na loja Tend Tudo",
  "chevrolet@ford.com.br",

  // Nesse caso o callback só será executado após termos certeza que o email foi enviado e que está tudo ok.

  function () {
    console.log("Seu email foi enviado, deve chegar em minutos");
    console.log("TUDO OK !!!");
  }
);
