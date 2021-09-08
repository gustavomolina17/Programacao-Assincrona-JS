/* Promise -> Evolução dos callbacks, é uma forma mais "sofisticada" de trabalharmos com programação Assíncrona. 

A promise é um callback "gourmet".

As promises são cada vez mais e mais utilizadas no dia a dia dos programadores. Elas são bastante utilizadas no React, no Angular, no Vue, no Express, no Node.js ...

Promise -> Promessa (Podemos fazer uma analogia com o mundo real): Sempre que "prometemos" algo para alguém existem duas possibilidades: podemos cumprir com o que foi prometido (Resolve) ou não cumprimos(Reject).

Vamos ver essa ideia na prática:

Email => Resolve: "OK" - Reject: "Falha"

Save => Resolve: "Dado Salvo" - Reject:"Ocorreu um erro, foi mal :( " */

function enviarEmail(corpo, para) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      let deuerro = false;

      if (!deuerro) {
        resolve(); // Promessa OK!
      } else {
        reject(); // Foi mal, eu falhei :(
      }
    }, 4000);
  });
}

// Usamos o .then para que o programa execute as ações que eu quiser quando a promise for RESOLVE.

// Usamos o .catch para fazer o tratamento da promise, ou seja, como o meu programa deve se comportar caso a promise seja REJECT.

enviarEmail(" Olá Bluemers ;) ", "avestruzqueteseduz@gmail.com")
  .then(function () {
    console.log("OPA, você fez o que me prometeu!!!");
  })
  .catch(function () {
    console.log("QUE PENA, dessa vez não rolou. ");
  });
