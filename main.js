function somatorioDivisiveis() {
    let numero = parseInt(prompt("Digite um número inteiro positivo:"));
  
    if (isNaN(numero) || numero <= 0) {
      alert("Por favor, digite um número inteiro positivo válido.");
      return;
    }
  
    let somatorio = 0;
  
    for (let i = 0; i < numero; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        somatorio += i;
      }
    }
  
    alert("O somatório dos números divisíveis por 3 ou 5 até " + numero + " é: " + somatorio);
  }
  
  somatorioDivisiveis();