function enviarNumeros() {
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;
  
    // Verifica se os campos estão vazios
    if (numero1 === "" || numero2 === "") {
      alert("Por favor, preencha ambos os campos.");
      return;
    }
  
    // Converte os valores para números
    numero1 = Number(numero1);
    numero2 = Number(numero2);
  
    // Exibe os números no console (opcional)
    console.log("Número 1:", numero1);
    console.log("Número 2:", numero2);
  
    // Aqui você pode fazer o que quiser com os números capturados
    // Por exemplo, você pode enviar os números para um servidor
    // ou realizar cálculos com eles.
  }
  function MinhaFuncao(){
    var numero1 = document.getElementById("numero1").value;
    var numero2 = document.getElementById("numero2").value;
    var resultado = parseInt(numero1) + parseInt(numero2);    
    document.getElementById("resultado").innerHTML = resultado;
}
function MinhaFuncao2(){
  var numero1 = document.getElementById("numero1").value;
  var numero2 = document.getElementById("numero2").value;
  var resultado = parseInt(numero1) / parseInt(numero2);    
  document.getElementById("Dividir").innerHTML = resultado;
}


