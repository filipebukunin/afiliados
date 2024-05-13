document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Impede o envio do formul�rio

  // Valores de usu�rio e senha predefinidos
  var usuarioCorreto = "usuario";
  var senhaCorreta = "senha";

  // Obt�m os valores inseridos nos campos de entrada
  var usuarioDigitado = document.getElementById("username").value;
  var senhaDigitada = document.getElementById("password").value;

  // Verifica se os valores correspondem aos pr�-definidos
  if (usuarioDigitado === usuarioCorreto && senhaDigitada === senhaCorreta) {
    // Se sim, redireciona para a URL de sucesso
    window.location.href = "https://www.flashscore.com.br/"; // Substitua "pagina-de-sucesso.html" pela URL desejada
  } else {
    // Se n�o, exibe uma mensagem de erro
    alert("Usu�rio ou senha incorretos. Tente novamente.");
  }
});
