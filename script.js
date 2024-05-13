document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Impede o envio do formulário

  // Valores de usuário e senha predefinidos
  var usuarioCorreto = "usuario";
  var senhaCorreta = "senha";

  // Obtém os valores inseridos nos campos de entrada
  var usuarioDigitado = document.getElementById("username").value;
  var senhaDigitada = document.getElementById("password").value;

  // Verifica se os valores correspondem aos pré-definidos
  if (usuarioDigitado === usuarioCorreto && senhaDigitada === senhaCorreta) {
    // Se sim, redireciona para a URL de sucesso
    window.location.href = "https://www.flashscore.com.br/"; // Substitua "pagina-de-sucesso.html" pela URL desejada
  } else {
    // Se não, exibe uma mensagem de erro
    alert("Usuário ou senha incorretos. Tente novamente.");
  }
});
