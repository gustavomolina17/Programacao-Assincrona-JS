function enviarEmail(corpo, para, callback) {
  setTimeout(function () {
    console.log(`
    
            Para: ${para}
            -----------------------------------------------------------------------
            ${corpo}
            -----------------------------------------------------------------------
            De: Gustavo Molina
    
            `);

    // Posso atribuir quantos parâmetros eu quiser no callback.
    // Na prática isso ocorre de forma dinâmica.
    // Para cada parâmetro que adicionarmos no callback, precisaremos passá-los também na function.

    callback("OK", 1, "8s", "Gustavo");
  }, 4000);
}

console.log("Inicio do envio do email...!");
enviarEmail(
  "Parabéns você ganhou um cupom de desconto de R$0,99 na loja Tend Tudo",
  "chevrolet@ford.com.br",
  function (status, amount, time, nome) {
    console.log(`
    De: ${nome}
    Status: ${status}
    ---------------------
    Contatos: ${amount}
    ---------------------
    Tempo: ${time}
    `);
    console.log("TUDO OK !!!");
  }
);
